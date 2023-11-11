<template>
    <div class="balance-card w-full relative hover:-translate-y-1 overflow-hidden transition-all hover:bg-neutral-200 h-44 border dark:border-0 cursor-pointer bg-neutral-100 dark:bg-neutral-800 rounded-xl py-4 px-5">
        <div class="absolute w-56 h-56 rounded-full top-24 dark:bg-neutral-400 bg-neutral-900 opacity-10"></div>
        <div class="absolute w-80 h-80 rounded-full left-36 top-2 dark:bg-neutral-400  bg-neutral-900 opacity-10"></div>
        <div class="flex w-full py-4 justify-between text-emerald-600 z-10">
            <div class="flex gap-2">
                <span class="i-heroicons-currency-dollar-20-solid text-2xl"></span>
                <h3 class="font-semibold">
                    <slot></slot>
                </h3>

                
            </div>
            <div class="flex relative">
                <div class="w-10 z-10 h-10 translate-x-5 bg-yellow-300 absolute left-0 rounded-full"></div>
                <div class="w-10 z-30 h-10 translate-x-5 bg-yellow-300 opacity-50 rounded-full"></div>
                <div class="w-10 z-20 h-10 rounded-full bg-red-500"></div>
            </div>
        </div>
        <div class="mt-4 z-10">
            <small class="text-neutral-600 dark:text-neutral-400">Balance</small>
            <h4 class="text-2xl font-bold dark:text-neutral-200">IDR {{ moneyFormat(balance) }}</h4>
        </div>
    </div>
</template>

<script>
import { moneyFormat } from '@/helpers';
export default {
    props: {
        balance: {
            type: Number,
            default: 0
        }
    },
    methods: {
        moneyFormat(val){
            return moneyFormat(val)
        }
    }

}
</script>

<style>

</style>