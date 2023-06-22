<template>
  <div class="w-full rounded-xl p-4" :class="`${color} ${customClass}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        color :{
            type: String,
            default: "bg-white"
        },
        customClass: {
          type: String,
          default: ""
        }
    }

}
</script>

<style>

</style>