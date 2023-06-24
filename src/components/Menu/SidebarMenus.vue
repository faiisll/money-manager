<template>
  <div class="w-full flex flex-col gap-1">
    <h3 class="text-sm text-neutral-600 font-semibold dark:text-neutral-400 pb-4">
        Main Menu
    </h3>

    <SidebarMenusItem v-for="item in links" :key="item.id" :name="item.name" :icon="item.icon" />
  </div>
</template>

<script>
import SidebarMenusItem from './SidebarMenusItem.vue';
export default {
    components: {
        SidebarMenusItem
    },
    data: () => ({
        links: [
            {
                id: 1,
                icon: "i-heroicons-home",
                name: "Home",
                url: "/"
            },
            {
                id: 2,
                icon: "i-heroicons-arrows-up-down-20-solid",
                name: "Transaction",
                url: "/"
            },
            {
                id: 3,
                icon: "i-heroicons-squares-plus",
                name: "Categories",
                url: "/"
            },
            {
                id: 4,
                icon: "i-heroicons-cog-6-tooth",
                name: "Setting",
                url: "/"
            },
        ]
    })

}
</script>

<style>

</style>