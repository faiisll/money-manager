<template>
    <FullLoading v-if="initialLoading" />
    <div v-else class="w-screen h-full grid grid-cols-7 lg:grid-cols-6 dark:bg-neutral-900">
        <ConfirmDelete />
        <ButtonAddTransaction />
        <transition name="page-slide" mode="out-in">
            <mobileSidebar @close="showSidebar = false" v-if="showSidebar"  />
        </transition>
        <div class="h-full w-full hidden sm:flex sm:col-span-2 md:col-span-2  lg:col-span-1">
            <Sidebar />
        </div>
        <div class="h-screen col-span-7 sm:col-span-5 md:col-span-5 lg:col-span-5 overflow-y-auto flex flex-col dark:bg-neutral-900 transition-all">
            <div class="w-full border-b dark:border-b-neutral-800 px-6 py-7 flex items-center sm:justify-end justify-between relative">
                <span @click="showSidebar = true" role="button" class="i-heroicons-bars-3-center-left text-lg dark:text-neutral-200 sm:hidden"></span>
                <div class="flex gap-4 items-center">
                    <DarkModeToggler />
                    <ProfileMenu />
                </div>
            </div>
            <div style="overflow-y: auto;" class="w-full grow overflow-hidden">
                <router-view v-slot="{ Component}">
                    <!-- Use any custom transition and  to `fade` -->
                    <transition name="page-opacity" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>

        </div>
    </div>
</template>

<script>
import ProfileMenu from '../../components/Menu/ProfileMenu.vue';
import DarkModeToggler from "../../components/DarkModeToggler/index.vue"
import Sidebar from "../../components/Sidebar/index.vue"
import Dasboard from "../Dashboard/index.vue"
import IconPicker from "@/components/IconPicker/index.vue"
import FullLoading from "@/components/FullLoading/index.vue"
import ButtonAddTransaction from '@/components/Button/ButtonAddTransaction.vue';
import { mapStores } from 'pinia';
import ConfirmDelete from '@/components/Modal/ConfirmDelete.vue';
import { useAuthStore, useCategoryStore, useWalletStore } from '@/store';
import mobileSidebar from '@/components/Sidebar/mobileSidebar.vue';
export default {
    components: {
        Sidebar,
        Dasboard,
        ProfileMenu,
        DarkModeToggler,
        IconPicker,
        ButtonAddTransaction,
        FullLoading,
        ConfirmDelete,
        mobileSidebar
    },
    data: () =>({
        initialLoading: false,
        showSidebar: false
    }),
    computed: {
        ...mapStores(useAuthStore, useWalletStore),
        ...mapStores(useAuthStore, useCategoryStore)
    },
    methods: {
        initilize(){
            this.initialLoading = true
            Promise.all([
                this.authStore.updateUser(),
                this.walletStore.getWalletsAct(),
                this.categoryStore.getCategoriesAct()
            ]).then(res => {
                // console.log(res);
            }).finally(() => {
                this.initialLoading = false
            })
        }

    },
    created(){
        this.initilize()
    }

}
</script>

<style>
.page-opacity-enter-active,
.page-opacity-leave-active{
    transition: 300ms ease all;
}
.page-opacity-enter-from,
.page-opacity-leave-to{
    opacity: 0;
    /* transform: translateY(30px); */
}
.page-slide-enter-active,
.page-slide-leave-active{
    transition: 300ms ease all;
}
.page-slide-enter-from,
.page-slide-leave-to{
    opacity: 0;
    /* transform: translateX(-30px); */
}

</style>