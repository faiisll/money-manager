<template>
  <div class="w-full h-full rounded-md" :class="{['skeleton']: !isDark, ['skeleton-dark']: isDark}"></div>
</template>

<script>
import {useDark} from "@vueuse/core"
export default {
    setup(){
        let isDark = useDark()

      return {
          isDark,
      }
    }

}
</script>

<style lang="scss" scoped>
@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
@keyframes skeleton-loading-dark {
  0% {
    background-color: hsla(201, 20%, 80%, 0.233);
  }
  100% {
    background-color: hsla(204, 20%, 95%, 0.315);
  }
}

.skeleton{
    animation: skeleton-loading 0.8s linear infinite alternate;
}
.skeleton-dark{
    
    animation: skeleton-loading-dark 0.8s linear infinite alternate;
}

</style>