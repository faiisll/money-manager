import UserLayout from "../pages/layout/UserLayout.vue"
import GuestLayout from "../pages/layout/GuestLayout.vue"
import Dashboard from "../pages/Dashboard/index.vue"
import {createRouter, createWebHistory} from "vue-router"
import Transaction from "../pages/Transaction/index.vue"
import routerGuard from "./routerGuard"
import Login from "@/pages/Login/index.vue"
import Register from "@/pages/Login/Register.vue"

const routes = [
    {
        path: "/auth",
        component: GuestLayout,
        children: [
            {
                path: "",
                component: Login,
                name: "Login",
                meta: { requiresAuth: false },
            },
            {
                path: "register",
                component: Register,
                name: "Register",
                meta: { requiresAuth: false },
            },
            {
                path: "login",
                redirect: { name: 'Login' },
                meta: { requiresAuth: false },
            }
        ]
    },
    {
        path: "/",
        component: UserLayout,
        children: [
            {
                path: "",
                component: Dashboard,
                name: "Dashboard",
                meta: { requiresAuth: true },
            },
            {
                path: "transaction",
                component: Transaction,
                meta: { requiresAuth: true },
            },
            {
                path: "wallet",
                component: Transaction,
                meta: { requiresAuth: true },
            },
            {
                path: "categories",
                component: Transaction,
                meta: { requiresAuth: true },
            },
            {
                path: "setting",
                component: Transaction,
                meta: { requiresAuth: true },
            },

        ]
        
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
})

router.beforeEach(async (to, from, next) => {
    routerGuard(from, to, next)
    
})

export default router
