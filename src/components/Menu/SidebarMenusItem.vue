<template>
  <div :class="{'bg-neutral-100 dark:bg-neutral-800': active}" class="flex gap-2 py-3 px-4 items-center hover:bg-neutral-100 rounded-xl dark:text-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200 cursor-pointer">
    <span :class="{[icon]: true}" class="text-lg"></span>
    <span class="text-sm">{{ name }}</span>
  </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: "i-heroicons-home"
        },
        name: {
            type: String,
            default: "Home"
        },
        active: {
            type: Boolean,
            default: false
        }
    }

}
</script>

<style>

</style>