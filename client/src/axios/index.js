import axios from 'axios'

const HTTP = axios.create({
    baseURL:`${process.env.REACT_APP_API_URL}`,
})

export const login = async (formData)=> await HTTP.post('/users/signin', formData);

export const register = async (formData) => await HTTP.post("/users/signup", formData);

export const matchAdd = async (formData) => await HTTP.post("/users/addmatch", formData);

export const refereeAdd = async (formData) => await HTTP.post("/users/addreferee", formData);