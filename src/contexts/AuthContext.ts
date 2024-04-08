
import { useContext, createContext } from "react";

interface AuthProps {
    auth?: { accessToken: string | null; user: string | null };
    onLogin?: (email: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}

export const TOKEN_KEY = "accessToken";
export const USER_KEY = "user";
export const API_URL = "api-adresss-here";

export const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
}

