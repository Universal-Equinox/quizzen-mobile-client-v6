import { useEffect } from "react";
import { useAuth } from "./UseAuth"
import { axiosPrivate } from "../api/Axios";



const useAxiosPrivate = () => {
    const { auth } = useAuth();

    useEffect(() => {

        const requestInterceptor = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseInterceptor = axiosPrivate.interceptors.response.use(
            response => response,

            async (error) => {
                const prevReq = error?.config;

                if (error?.response?.staus === 403 && !prevReq?.sent) {
                    prevReq.sent = true;

                    //GET NEW ACCESSTOKEN WİTH REFRESH HERE
                    const accessToken = "new Token"
                    prevReq.headers['Authorization'] = `Bearer ${accessToken}`;

                    return axiosPrivate(prevReq);
                }

                return Promise.reject(error);
            }
        );


        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptor);
            axiosPrivate.interceptors.response.eject(responseInterceptor);
        }

    }, [auth])


    return axiosPrivate;
}


export default useAxiosPrivate;