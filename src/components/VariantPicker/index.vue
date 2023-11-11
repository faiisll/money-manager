<template>
    <RadioGroup v-model="selectedVariant" class="flex gap-2 mb-4 w-full" name="type">
        <RadioGroupOption v-for="color in variants" @click="handleSelect(color)" v-slot="{ checked }" :key="color" :value="color" class="flex-1">
            <div class="w-full bg- p-2 rounded-lg cursor-pointer flex justify-center items-center" :class="variantsClass[color]">
                <span class="i-heroicons-check-circle-20-solid select-none text-white transition-opacity duration-300" :class="checked ? 'opacity-100' : 'opacity-0'">Income</span>
            </div>
        </RadioGroupOption>
    </RadioGroup>
  
  
</template>

<script>
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
} from '@headlessui/vue'
export default {
    components: {
        RadioGroup,
        RadioGroupLabel,
        RadioGroupOption,
    },
    props: {
        value: {
            type: String,
            default: "red"
        }
    },
    data: () => ({
        selectedVariant: "green",
        variants: ["red", "blue", "primary", "purple", "pink"],
        variantsClass: {
            red: "bg-rose-500",
            blue: "bg-sky-500",
            primary: "bg-teal-500",
            purple: "bg-indigo-500",
            pink: "bg-pink-400",
        }
    }),
    watch: {
        value: {
            deep: true,
            handler(val){
                this.selectedVariant = val
            }
        }
    },
    methods: {
        handleSelect(val){
            this.$emit('selectColor', val)
        }
    },
    created(){
        this.selectedVariant = this.value
    }

}
</script>

<style>

</style>