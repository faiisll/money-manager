<template>
    <Menu>
      <MenuButton>
          <slot></slot>
      </MenuButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems class="absolute w-36 z-90 top-14 right-0 bg-white dark:bg-neutral-800 shadow-lg p-4 border dark:border-0 rounded-xl flex flex-col">
          <MenuItem>
            <div class="flex">
                <span class="i-heroicons-eye"></span>
                <span>View</span>
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
    computed: {
    },
    methods: {
    }
  };
  </script>
  
  <style>
  </style>