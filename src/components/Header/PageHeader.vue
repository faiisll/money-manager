<template>
   <div class="w-full p-6">
        <h1 class="text-3xl dark:text-slate-200">
            <slot></slot>
        </h1>
        <small class="text-md text-gray-500 dark:text-slate-400">{{ desc }}</small>
    </div>
</template>

<script>
export default {
    props: {
        desc: {
            type: String,
            default: ""
        }
    }

}
</script>

<style>

</style>