import axios from 'axios';

const HTTP = axios.create({
    baseURL:'http://process.env.REACT_APP_APP_URL',
})

export const comment = async (value,id) => await HTTP.post(`/matches/${id}`,{ value });