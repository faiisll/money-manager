<template>
  <span @click="toggleDark()" :class="{'i-heroicons-moon': !isDark, 'i-heroicons-sun': isDark}" class="select-none text-xl mb-1 text-slate-800 dark:text-slate-200" role="button">tes</span>
</template>

<script>
import {useDark, useToggle} from "@vueuse/core"
export default {
    setup(){
        let isDark = useDark()
        const toggleDark = useToggle(isDark)

        return {
            isDark,
            toggleDark
        }
    }

}
</script>

<style>

</style>