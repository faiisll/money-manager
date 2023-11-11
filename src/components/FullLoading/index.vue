<template>
  <div class="w-screen h-screen flex justify-center items-center dark:bg-neutral-900 dark:text-slate-400 fixed left-0 top-0">
    <Spinner />
  </div>
</template>

<script>
import Spinner from "../Spinner/index.vue"
export default {
    components: {
        Spinner
    }

}
</script>

<style>

</style>