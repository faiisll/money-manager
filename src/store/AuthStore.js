import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { getDataLS, setDataLS } from '../helpers/localStorage';


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
        checkLocalAuth(){
            let local = getDataLS('user')
            if(!local) {
                this.reset()
                return false
            }else{
                this.user = local
                this.isLogged = true
                return true
            }


        },
        register({email, password}){
            this.loading = true
            return new Promise((resolve, reject) => {
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    this.user = user
                    setDataLS('user', user)
                    this.isLogged = true
                    resolve(user)
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
                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential);
                    const user = userCredential.user
                    this.user = user
                    setDataLS('user', user)
                    this.isLogged = true
                    resolve(user)

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
                signOut(auth).then(res => {
                    resolve(true)
                    this.reset()
                }).catch((err) => {
                    reject(err)
    
                }).finally(() => {
                    this.loading = false
                })
            })
        },
    }
})