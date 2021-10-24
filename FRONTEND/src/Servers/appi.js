import axios from "axios";

const URL = 'http://localhost:5000';

export const addUser = async (data) => {
    try {
        let res = await axios.post(`${URL}/add`, data);
        return res.data;
    } catch (err) {
        console.log('Error While Adding a user', err);
    }
}
export const getUsers = async () => {
    try {
        let res = await axios.get(`${URL}/user`);
        return res.data;
    } catch (err) {
        console.log('Error While Getting a user', err);
    }
}
export const setConversation = async (data) => {
    try {
        await axios.post(`${URL}/conversation/add`, data);
    } catch (err) {
        console.log('Error While calling setCoversation API', err);
    }
}

export const getConvo = async (data) => {
    try {
        const res = await axios.post(`${URL}/conversation/get`, data);
        return res.data;
    } catch (err) {
        console.log('Error While calling getConvo API', err)
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`${URL}/message/add`, data)
    } catch (err) {
        console.log('Error While Calling new message API');
    }
}
export const getMessages = async (id) => {
    try {
        let res = await axios.get(`${URL}/message/get/${id}`)
        return res.data;
    } catch (err) {
        console.log('Error While Calling get messages API');
    }
}