<template>
  <button
    :type="type"
    class="px-3 rounded-lg flex flex-col items-center justify-center text-sm cursor-pointer transition-all"
    :class="{
        ...sizeClass,
        ...variantClass
    }">
        <span class="h-fit">
            <slot></slot>
        </span>
    </button>
</template>

<script>
import { ref, toRefs } from 'vue'
export default {
    setup(props){
        const { size, variant } = toRefs(props)
        const sizeClass = ref({
            ['text-md h-12']: size.value === 'md',
            ['text-sm h-10']: size.value === 'sm',
            ['text-lg h-12']: size.value === 'lg',

        })
        const variantClass = ref({
            ['bg-emerald-600 hover:bg-emerald-700 text-white']: variant.value === 'primary',
            ['bg-red-600 hover:bg-red-700 text-white']: variant.value === 'danger',
            ['bg-white border-2 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 border-gray-200 text-gray-600 hover:bg-gray-100']: variant.value === 'outline-default',


        })

        // console.log(sizeVariant.value);

        return {
            sizeClass,
            variantClass
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
        variant: {
            default: "primary"

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