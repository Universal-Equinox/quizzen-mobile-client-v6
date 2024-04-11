import axios from "axios";

const BASE_URL = " https://f311-95-7-99-2.ngrok-free.app/api/"

export default axios.create({
    baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true
})