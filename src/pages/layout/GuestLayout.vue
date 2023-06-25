<template>
  <div class="w-full h-full relative dark:bg-neutral-900">
    <div class="absolute right-8 top-8">
      <DarkModeToggler />
    </div>
    <router-view v-slot="{ Component}">
        <!-- Use any custom transition and  to `fade` -->
        <transition name="page-opacity" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
  </div>
</template>

<script>
import DarkModeToggler from "@/components/DarkModeToggler/index.vue"
export default {
  components: {
    DarkModeToggler
  }

}
</script>

<style>

</style>