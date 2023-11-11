<template>
  <div class="w-full flex flex-col gap-1">
    <h3 class="text-sm text-neutral-600 font-semibold dark:text-neutral-400 pb-4">
        Main Menu
    </h3>

    <SidebarMenusItem v-for="item in sidebarStore.sidebars" :key="item.id" :url="item.url" :active="item.url === currentRoute" :name="item.name" :icon="item.icon" />
  </div>
</template>

<script>
import SidebarMenusItem from './SidebarMenusItem.vue';
import {mapStores} from "pinia"
import {useSidebarStore} from "@/store"
import { useRouter} from 'vue-router'
export default {
    components: {
        SidebarMenusItem
    },
    setup(){
        const router = useRouter
        return {
            router,
        }

    },
    data: () => ({
        links: [
        ]
    }),
    computed: {
        ...mapStores(useSidebarStore),
        currentRoute(){
            return this.router().currentRoute.value.path
        }
    }

}
</script>

<style>

</style>