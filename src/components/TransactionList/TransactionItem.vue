<template>
  <div class="w-full grid grid-cols-3 py-4 hover:bg-neutral-100 px-2 rounded-lg dark:hover:bg-neutral-700 transition-all relative">

        
        <!-- transaction name section -->
        <div @click="rowClick" class="flex items-center pr-2 z-20">
            <div class="p-2 border flex rounded-lg mr-4">
                <span class="i-heroicons-shopping-cart"></span>

            </div>
            <div class="flex flex-col">
                <span class="text-sm font-semibold">{{ value.name }}</span>
                <span class="text-xs text-neutral-500 dark:text-neutral-600">Description text</span>
            </div>
        </div>


        <div @click="rowClick" class="flex items-center pr-2 z-20">
            <div class="p-2 border dark:border-neutral-600 flex rounded-lg mr-4">
                <span class="i-heroicons-wallet"></span>
                
            </div>
            <span class="text-sm text-neutral-400">Cash</span>
        
        </div>
        <div class="flex items-center justify-between pr-2 z-30">
        
            <span class="text-sm shrink-0 text-neutral-500 dark:text-neutral-200 font-bold">IDR {{ value.amount }}</span>
            <span @click="rowClick" class="flex-1 h-full"></span>
            <div class="flex gap-2 shrink-0">
                <div class="flex p-2 border dark:border-neutral-600 rounded-lg" role="button">
                    <span class="i-heroicons-pencil"></span>
                </div>
                <div class="flex p-2 border dark:border-neutral-600 rounded-lg" role="button">
                    <span class="i-heroicons-trash"></span>
                </div>
            </div>
        
        </div>

        <div @click="rowClick" class="w-full h-full absolute top-0 left-0 z-10"></div>
    </div>
</template>

<script>
import TransactionOptions from '../Menu/TransactionOptions.vue';
export default {
    components: {
        TransactionOptions
    },
    props: {
        value: Object
    },
    methods: {
        rowClick(){
            console.log("row clicked");
        }
    }

}
</script>

<style>

</style>