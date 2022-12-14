import axios from 'axios';

const HTTP = axios.create({
    baseURL:`${process.env.REACT_APP_API_URL}`,
})

export const comment = async (value,id) => await HTTP.post(`/matches/${id}`,{ value });