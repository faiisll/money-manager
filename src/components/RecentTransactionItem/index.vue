<template>
  <div class="w-full flex items-center">
    <div class="px-4 py-3 rounded-xl" :class="{'bg-emerald-100': type === '+', 'bg-pink-100': type === '-'}">
        <span class="text-gray-900 text-xl" :class="{[icon]: true, 'text-emerald-900': type === '+', 'text-pink-900': type === '-'}"></span>
    </div>
    <div class="flex flex-col ml-3">
        <h3 class="text-sm font-semibold dark:text-neutral-200">
            <slot name="title"></slot>
        </h3>
        <small class="text-gray-400 dark:text-neutral-500">
            <slot name="category"></slot>
        </small>
    </div>
    <div class="ml-auto dark:text-slate-100">
        <h4>{{ type }} {{ convertMoney(amount) }}</h4>
    </div>

  </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: "+"
        },
        icon: {
            type: String,
            default: "i-heroicons-shopping-bag"
        },
        amount: {
            type: Number,
            default: 120000
        }
    },
    methods: {
        convertMoney(amount = 1){
            if(amount < 1000) return amount
            let commaNumber = amount/1000

            return `${commaNumber} k`
        }
    }

}
</script>

<style>

</style>