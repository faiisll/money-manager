<template>
    <Card color="bg-white" customClass="border border-gray-200 dark:bg-neutral-800 dark:border-0">
        <div class="w-full flex justify-between mb-4">
            <h2 class="text-sm font-semibold dark:text-slate-100">Spending by Categories</h2>
            <span class="i-heroicons-ellipsis-horizontal-solid text-2xl text-gray-600 p-2 dark:text-slate-100" role="button"></span>
        </div>

        <div class="w-full grid grid-cols-6 gap-3">
            <div>
                <SpendingCategoryItem>
                    Montly Shopping
                </SpendingCategoryItem>
            </div>
            
        </div>
    </Card>
  
</template>

<script>
import Card from "./index.vue"
import SpendingCategoryItem from "../SpendingCategoryItem/index.vue"
export default {
    components: {
        Card,
        SpendingCategoryItem
    },
    data: () => ({
        

    })

}
</script>

<style>

</style>