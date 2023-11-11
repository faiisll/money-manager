import UserLayout from "../pages/layout/UserLayout.vue"
import GuestLayout from "../pages/layout/GuestLayout.vue"
import Dashboard from "../pages/Dashboard/index.vue"
import {createRouter, createWebHashHistory} from "vue-router"
import Transaction from "../pages/Transaction/index.vue"
import routerGuard from "./routerGuard"
import Login from "@/pages/Login/index.vue"
import Register from "@/pages/Login/Register.vue"
import Wallet from "@/pages/wallet/index.vue"
import Category from "@/pages/Category/index.vue"

const routes = [
    {
        path: "/auth",
        component: GuestLayout,
        children: [
            {
                path: "",
                component: () => import("@/pages/Login/index.vue"),
                name: "Login",
                meta: { requiresAuth: false },
            },
            {
                path: "register",
                component: () => import("@/pages/Login/Register.vue"),
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
                component: () => import("@/pages/Dashboard/index.vue"),
                name: "Dashboard",
                meta: { requiresAuth: true },
            },
            {
                path: "transaction",
                component: () => import("@/pages/Transaction/index.vue"),
                meta: { requiresAuth: true },
            },
            {
                path: "wallet",
                component: () => import("@/pages/Wallet/index.vue"),
                meta: { requiresAuth: true },
            },
            {
                path: "categories",
                component: () => import("@/pages/Category/index.vue"),
                meta: { requiresAuth: true },
            },
            {
                path: "setting",
                component: () => import("@/pages/Setting/index.vue"),
                meta: { requiresAuth: true },
            },

        ]
        
    },
]



const router = createRouter({
    history: createWebHashHistory(),
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
