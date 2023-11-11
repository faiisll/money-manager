<template>
    <div class="w-full h-full">
        <PageHeader desc="Be responsible for the money we have">
            Welcome Back
        </PageHeader>
    
        <div class="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 px-6 mb-6">
            <div class="grid md:grid-cols-2 gap-4">
                <div>
                    <amount-card bg="bg-teal-50 dark:bg-teal-800" color="text-teal-500"/>
                </div>
                <div>
                    <amount-card title="Spending" bg="bg-amber-50 dark:bg-red-800" color="text-amber-500"/>
                </div>
                <div>
                    <amount-card title="Investment" bg="bg-blue-50 dark:bg-blue-800" color="text-blue-500"/>
                </div>
                <div>
                    <amount-card title="Saving" bg="bg-purple-50 dark:bg-purple-800" color="text-purple-500"/>
                </div>
                
            </div>
            <div class="w-full h-full min-h-[200px]">
                <card color="bg-[#179A92]" customClass="h-full">
                    <spending-chart/>
                </card>
    
        
            </div>
    
        </div>
        <div class="w-full grid lg:grid-cols-3 grid-cols-1 gap-4 px-6 pb-6">
            <div class="col-span-1">
                <RecentTransactionCard />
            </div>
            <!-- <div class="col-span-2">
                <SpendingCategoryCard />
            </div> -->
    
        </div>
    </div>
</template>

<script>
import AmountCard from '../../components/Card/AmountCard.vue';
import Card from "../../components/Card/index.vue"
import RecentTransactionCard from '../../components/Card/RecentTransactionCard.vue';
import SpendingChart from '../../components/Card/SpendingChart.vue';
import SpendingCategoryCard from '../../components/Card/SpendingCategoryCard.vue';
import PageHeader from '../../components/Header/PageHeader.vue';
export default {
    components: {
        AmountCard,
        Card,
        SpendingChart,
        RecentTransactionCard,
        SpendingCategoryCard,
        PageHeader
    }

}
</script>

<style>

</style>