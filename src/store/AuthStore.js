import { defineStore } from 'pinia'
import { auth } from '../firebase';
import { getDataLS, setDataLS } from '../helpers/localStorage';
import { logout, getUser } from '@/api';
import { login, register } from '@/api/auth';


export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLogged: false,
        loading: false,
        user: null
    }),
    actions: {
        reset(){
            this.user = null
            this.isLogged = false
            this.loading = false
            localStorage.removeItem('user')
        },
        updateUser(){
            this.loading = true
            return new Promise((resolve, reject) => {
                getUser().then(res => {
                    if(res.data){
                        if(res.data){
                            this.user = res.data
                            setDataLS('user', res.data)
                        }
                    }
                    resolve(res)
                }).catch(err => {
                    reject(err)
                }).finally(() =>{
                    this.loading = false

                })
            })

        },
        checkLocalAuth(){
            let local = getDataLS('user')
            let token = getDataLS('token')
            if(!token) {
                this.reset()
                return false
            }else{
                this.user = local
                this.isLogged = true
                return true
            }


        },
        register({email, password, name}){
            this.loading = true
            return new Promise((resolve, reject) => {
                register({email, password, name})
                .then((userCredential) => {
                    resolve(userCredential)
                }).catch(err => {
                    reject(err)
                }).finally(() => {
                    this.loading = false
                })
            })
        },
        login({email, password}){
            this.loading = true
            return new Promise((resolve, reject) => {
                login({email, password})
                .then((userCredential) => {
                    if(userCredential.data){
                        const {user, access_token} = userCredential.data
                        this.user = user
                        setDataLS('user', user)
                        setDataLS('token', access_token)
                        this.isLogged = true
                        resolve(userCredential.data)
                    }else resolve(userCredential)

                }).catch((err) => {
                    reject(err)

                }).finally(() => {
                    this.loading = false
                })
            })

            
        },
        logout(){
            this.loading = true
            return new Promise((resolve, reject) => {
                logout().then(res => {
                    resolve(true)
                    this.reset()
                    localStorage.removeItem('token')
                }).catch((err) => {
                    reject(err)
    
                }).finally(() => {
                    this.loading = false
                })
            })
        },
    }
})