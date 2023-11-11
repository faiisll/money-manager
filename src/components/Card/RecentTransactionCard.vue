<template>
    <Card color="bg-white" customClass="border border-gray-200 dark:bg-neutral-800 dark:border-0">
        <div class="w-full flex justify-between mb-4">
            <h2 class="text-sm font-semibold dark:text-slate-100">{{ title }}</h2>
            <span class="i-heroicons-ellipsis-horizontal-solid text-2xl text-gray-600 dark:text-gray-200 p-2" role="button"></span>
        </div>

        <div class="w-full flex flex-col gap-4">
            <RecentTransactionItem
                v-for="item in dummyData"
                :amount="item.ammount"
                :type="item.type"
                :icon="item.icon"
                :key="item.id">
                <template #title>{{ item.title }}</template>
                <template #category>{{ item.category }}</template>
            </RecentTransactionItem>
        </div>
    </Card>
  
</template>

<script>
import Card from "./index.vue"
import RecentTransactionItem from "../RecentTransactionItem/index.vue"
export default {
    props: {
        title: {
            type: String,
            default: "Recent Transactions"
        }
    },
    components: {
        Card,
        RecentTransactionItem
    },
    data: () => ({
        dummyData: [
            {
                id: 1,
                title: "Shopping Grocery",
                category: "Montly Shopping",
                ammount: 12500,
                type: "-",
                icon: "i-heroicons-shopping-bag"
                
            },
            {
                id: 2,
                title: "Salary",
                category: "Income",
                ammount: 6500000,
                type: "+",
                icon: "i-heroicons-banknotes"
            },
            {
                id: 3,
                title: "Package Data",
                category: "Monthly Bill",
                ammount: 180000,
                type: "-",
                icon: "i-heroicons-wifi-20-solid"
            },
        ]

    })

}
</script>

<style>

</style>