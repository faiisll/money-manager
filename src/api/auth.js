import axios from "axios";

let url = import.meta.env.VITE_API_BASE_URL
let publicAxios = axios.create({
    baseURL: url
})

publicAxios.interceptors.response.use((res) => {
    if(res.status >= 200 && res.status < 300) return res
}, (err) => {
    let error = err
    if(err.response){
        error =  err.response
    }

    return Promise.reject(error)
})

export const login = (body) => publicAxios.post(`/auth/login`, body);
export const register = (body) => publicAxios.post(`/auth/register`, body);