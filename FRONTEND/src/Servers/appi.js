import axios from "axios";

const URL = 'http://localhost:5000';

export const addUser = async (data) => {
    try {
        await axios.post(`${URL}/add`, data);
    }catch(err){
        console.log('Error While Adding a user', err);
    }
}
export const getUsers = async () => {
    try {
        let res = await axios.get(`${URL}/user`);
        let data = await res;
        return data;
    }catch(err){
        console.log('Error While Getting a user', err);
    }
}
export const setConversation = async (data) => {
    try {
        await axios.post(`${URL}/conversation/add`, data);
    }catch(err){
        console.log('Error While calling setCoversation API', err);
    }
}