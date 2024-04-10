import { useEffect, useState, createContext } from "react";
import * as SecureStore from "expo-secure-store";

import { } from "react";

interface AuthProps {
    auth?: { accessToken: string | null; user: string | null };
    setAuth?: (auth: { accessToken: string | null; user: string | null }) => void;
    onLogin?: (email: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}

export const TOKEN_KEY = "accessToken";
export const USER_KEY = "user";
export const API_URL = "api-adresss-here";



export const AuthContext = createContext<AuthProps>({});


export const AuthProvider = ({ children }: any) => {

    const [auth, setAuth] = useState<{
        accessToken: string | null;
        user: string | null;
    }>({
        accessToken: null,
        user: null
    });

    useEffect(() => {

        const loadToken = () => {
            const accessToken = SecureStore.getItem(TOKEN_KEY);
            const user = SecureStore.getItem(USER_KEY);

            if (accessToken !== undefined) {
                // axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;

                setAuth({
                    accessToken: accessToken,
                    user: user
                });

                console.log({ authState: auth });

            }
        };

        loadToken();
    }, []);


    const login = async (email: string, pass: string) => {
        try {
            // const res = await axios.post("apiurl", { email, pass });
            setAuth({
                accessToken: pass,
                user: email
            });

            // axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
            await SecureStore.setItemAsync(TOKEN_KEY, pass);
            await SecureStore.setItemAsync(USER_KEY, email);

            return {
                accessToken: pass,
                user: email
            };

        } catch (error) {
            return error;
        }
    };

    const logout = async () => {
        try {

            console.log(`"${auth.user}" çıkış yaptı`);

            setAuth({
                accessToken: null,
                user: null
            });

            // axios.defaults.headers.common['Authorization'] = "";
            await SecureStore.deleteItemAsync(TOKEN_KEY);
            await SecureStore.deleteItemAsync(USER_KEY);



        } catch (error) {
            console.error(error);
            return { error };
        }
    };

    const value = {
        onLogin: login,
        onLogout: logout,
        auth,
        setAuth
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};
