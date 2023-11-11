

<template>
  <div id="parent-all" class="font-raleway dark:bg-neutral-900">
    <Toast v-for="variant in toastVariant" :variant="variant" :key="variant" />
    <router-view v-slot="{ Component }">
      <!-- Use any custom transition and  to `fade` -->
      <transition name="fade" mode="out-in">
          <component :is="Component" />
      </transition>
    </router-view>
    
  </div>
</template>
<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '@/store';
import Toast from "@/components/Toast/index.vue"
export default {
  components: {
    Toast
  },
  computed: {
    ...mapStores(useAuthStore)
  },
  data: () => ({
    toastVariant: ['default', 'success', 'danger']
  }),
  created(){
    this.authStore.checkLocalAuth()
  }

}
</script>
<style>
#parent-all{
  min-height: 100vh;
  width: 100vw;
}

.fade-enter-active,
.fade-leave-active{
    transition: 300ms ease all;
}
.fade-enter-from,
.fade-leave-to{
    opacity: 0;
}

</style>
