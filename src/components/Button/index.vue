<template>
  <button
    :type="type"
    class="w-full rounded-lg flex justify-center text-white bg-emerald-600 text-sm cursor-pointer hover:bg-emerald-700 transition-all"
    :class="{
        ...sizeVariant
    }">
        <slot></slot>
    </button>
</template>

<script>
import { ref, toRefs } from 'vue'
export default {
    setup(props){
        const { size } = toRefs(props)
        const sizeVariant = ref({
            ['text-md py-3']: size.value === 'md',
            ['text-sm py-2']: size.value === 'sm',
            ['text-lg py-3']: size.value === 'lg',

        })

        // console.log(sizeVariant.value);

        return {
            sizeVariant
        }
    },
    props: {
        size: {
            type: String,
            default: "md",
            validator(value) {
                // The value must match one of these strings
                return ['sm', 'md', 'lg'].includes(value)
            }
        },
        type: {
            type: String,
            default: 'button',
            validator(value) {
                // The value must match one of these strings
                return ['button', 'submit', 'reset'].includes(value)
            }
        }
    }

}
</script>

<style>

</style>