
<template>
  <div class="w-5/6 h-screen overflow-y-auto flex flex-col dark:bg-neutral-900 transition-all">
    <div class="w-full border-b dark:border-b-neutral-800 px-6 py-7 flex gap-4 items-center justify-end relative">
        <DarkModeToggler />
        <ProfileMenu />
    </div>
    <div class="w-full grow">
        <slot></slot>
    </div>

  </div>
</template>
<script>
import ProfileMenu from '../Menu/ProfileMenu.vue';
import DarkModeToggler from "../DarkModeToggler/index.vue"
export default { 
    components: {
        ProfileMenu,
        DarkModeToggler
    }

}
</script>

<style>

</style>