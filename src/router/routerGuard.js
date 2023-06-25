import { useAuthStore } from "../store"

export default async function(from, to, next){

    const auth = useAuthStore()
    let isLogged = await auth.isLogged
    if (to.meta.requiresAuth && !isLogged) next({ name: 'Login' })
    if(isLogged && to.path.includes("auth")){
        next({ name: 'Dashboard' })
    }

    next()

}