
<template>
  <div class="h-full sm:w-full sm:h-full px-6 py-6 flex flex-col border-r border-gray-200 bg-white dark:bg-neutral-900 dark:border-r-neutral-800">
    <SidebarHeader />
    <SidebarMenus />
  </div>
</template>

<script>
import SidebarHeader from './SidebarHeader.vue';
import SidebarMenus from '../Menu/SidebarMenus.vue';
export default {
    components: {
        SidebarHeader,
        SidebarMenus
    }

}
</script>

<style>

</style>