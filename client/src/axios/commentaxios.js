import axios from 'axios';

const HTTP = axios.create({
    baseURL:'http://localhost:5000',
})

export const comment = async (value,id) => await HTTP.post(`/matches/${id}`,{ value });