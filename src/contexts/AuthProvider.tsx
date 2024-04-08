import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { TOKEN_KEY, USER_KEY, AuthContext } from "./AuthContext";


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

            if (accessToken !== null) {
                // axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
                console.log("context token: " + accessToken);
                console.log("context user: " + user);

                setAuth({
                    accessToken: accessToken,
                    user: user
                });

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
        auth
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};
