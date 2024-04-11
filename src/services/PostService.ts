import Axios from "../api/Axios"

export const GetPosts = async () => {
    try {
        const res = await Axios.get("/question");
        return res.data;

    } catch (error) {
        console.log(error)
    }
}

export const GetPostById = async (postId: string) => {
    try {
        const res = await Axios.get("/question/" + postId);
        return res.data;

    } catch (error) {
        console.log(error)
    }
}

export const GetPostComments = async (postId: string) => {
    try {
        const res = await Axios.get(`/answer?questionId=${postId}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetUserPosts = async (userId: string) => {
    try {
        const res = await Axios.get(`/question?userId=${userId}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}