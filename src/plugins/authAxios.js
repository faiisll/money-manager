import { forceLogout } from "@/helpers/localStorage";
import axios from "axios";
let url = import.meta.env.VITE_API_BASE_URL
let authenticatedAPI = axios.create({
    baseURL: url,
    headers: {
		Accept: 'application/json'
	},
})

authenticatedAPI.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
    }
    config.headers['Access-Control-Allow-Origin'] = "*"

    return config
})

authenticatedAPI.interceptors.response.use((res) => {
    if(res.status >=200 && res.status < 300) return res
},async (err) => {
    let error =await err
    if(!error.hasOwnProperty('response')){
        // console.log(error.response);
        error = {
            response: {
                status: 400,
                message: "Internal server error."

            }
        }

    }
    if(err.response.status === 401){
        forceLogout()
        error = {
            response: {
                status: 401,
                message: "Your session expired or unauthorize."

            }
        }
        return Promise.reject(error)
    }


    return Promise.reject(error.response.data)

})

export default authenticatedAPI