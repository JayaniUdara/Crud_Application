import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

export const getUsers = async () => {
    return await axios.get(API_URL);
};

export const createUser = async (user: { name: string; email: string }) => {
    return await axios.post(API_URL, user);
};

export const updateUser = async (id: number, user: { name: string; email: string }) => {
    return await axios.put(`${API_URL}/${id}`, user);
};

export const deleteUser = async (id: number) => {
    return await axios.delete(`${API_URL}/${id}`);
};
