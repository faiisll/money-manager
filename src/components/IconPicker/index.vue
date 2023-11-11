<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton
      :class="open ? '' : 'text-opacity-90'"
      class="group flex items-center rounded-md bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-300 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <span v-if="selectedIcon !== null" class="text-xl m-auto text-neutral-800 dark:text-neutral-200 transition duration-150 ease-in-out group-hover:text-opacity-80"
      :class="{[selectedIcon]: selectedIcon !== null }"
      aria-hidden="true"></span>
      <!-- <div v-if="selectedIcon === null" class="w-5 h-5 bg-red-600">tes</div> -->
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0">
      <PopoverPanel class="absolute left-40 mt-3 w-fit max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl z-40">
        <div class="w-full mb-2 shadow-md">
          <Input
              name="search"
              prefixIcon="i-heroicons-magnifying-glass"
              placeholder="Search icon here"
              type="text"
              v-model="search"
          />
        </div>
        <div class="overflow-hidden flex flex-row flex-wrap max-w-xl overflow-y-auto w-80 h-72 bg-white dark:bg-neutral-800 border dark:border-emerald-200 dark:text-neutral-200 p-5 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div v-for="icon in filteredIcons" :key="icon.name" @click="selectIcon(icon.name)" class="w-8 h-8 grow-0 flex cursor-pointer text-neutral-600 dark:text-neutral-200 hover:text-emerald-600 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-xl">
              <span class="text-xl m-auto" :class="{[icon.name]: true, ['text-green-500']: icon.name === selectedIcon}"></span>
            </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
  </template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import icons from "./heroicons.js"
export default {
    components: {
        Popover, PopoverButton, PopoverPanel
    },
    props: {
      iconValue: {
        type: String,
      }
    },
    data: () => ({
      icons: [],
      selectedIcon: "",
      search: ""
    }),
    computed: {
      filteredIcons(){
        return icons.filter(icon => icon.name.includes(this.search))
      }

    },
    watch: {
      iconValue(val) {
        // console.log("icon", val);
        this.selectedIcon = this.iconValue
      }
      
    },
    methods: {
      selectIcon(icon){
        // let i = JSON.parse(JSON.stringify(icon))
        // console.log(icon);
        this.$emit('selectIcon', icon)
      }
    },
    created(){
      this.icons = [...icons]
      this.selectedIcon = this.iconValue === "default"  || this.iconValue === null ? "i-heroicons-hand-thumb-up" : this.iconValue

    }

}
</script>

<style>

</style>