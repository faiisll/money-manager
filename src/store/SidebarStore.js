import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        sidebars: [
            {
                id: 1,
                icon: "i-heroicons-home",
                name: "Home",
                url: "/",
                show: true
            },
            {
                id: 2,
                icon: "i-heroicons-arrows-up-down-20-solid",
                name: "Transaction",
                url: "/transaction",
                show: true
            },
            {
                id: 3,
                icon: "i-heroicons-wallet",
                name: "Wallet",
                url: "/wallet",
                show: true
            },
            {
                id: 4,
                icon: "i-heroicons-squares-plus",
                name: "Categories",
                url: "/categories",
                show: true
            },
            {
                id: 5,
                icon: "i-heroicons-cog-6-tooth",
                name: "Setting",
                url: "/setting",
                show: true
            },
        ]
    }),
})