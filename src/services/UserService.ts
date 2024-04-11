import Axios from "../api/Axios";
import { UserType } from "../types/UserType";

export const GetUserById = async (userId: string) => {
    try {
        const res = await Axios.get(`/user?id=${userId}`);
        return res.data;
    } catch (error) {
        console.log(error)

    }
}

export const GetUserByEmail = async (email: string) => {
    try {
        const res = await Axios.get(`/user?email=${email}`);
        return res.data;
    } catch (error) {
        console.log(error)

    }
}

export const GetUserByUsername = async (username: string) => {
    try {
        const res = await Axios.get(`/user?username=${username}`);
        return res.data;
    } catch (error) {
        console.log(error)

    }
}

