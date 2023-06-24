<template>
  <Menu>
    <MenuButton>
        <span class="i-heroicons-bars-3-solid text-2xl dark:text-slate-200"></span>
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems class="absolute top-14 bg-white dark:bg-neutral-800 shadow-lg p-4 border dark:border-0 rounded-xl flex flex-col">
        <MenuItem v-slot="{ active }">
            <div class="flex items-center w-full py-2 px-5 rounded-lg cursor-pointer dark:text-neutral-200" :class="{ 'bg-green-100 dark:bg-neutral-700': active }">
                <span class="i-heroicons-arrow-left-on-rectangle-solid mr-2"></span>
                <a class="text-sm " href="/account-settings">
                    Log Out
                </a>
            </div>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
};
</script>

<style>
</style>