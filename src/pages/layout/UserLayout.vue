<template>
    <div class="w-full h-full flex dark:bg-neutral-900">
        <Sidebar />
        <div class="w-5/6 h-screen overflow-y-auto flex flex-col dark:bg-neutral-900 transition-all">
            <div class="w-full border-b dark:border-b-neutral-800 px-6 py-7 flex gap-4 items-center justify-end relative">
                <DarkModeToggler />
                <ProfileMenu />
            </div>
            <div class="w-full grow">
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
export default {
    components: {
        Sidebar,
        Dasboard,
        ProfileMenu,
        DarkModeToggler
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
    transform: translateY(30px);
}

</style>