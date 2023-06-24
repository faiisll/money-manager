
<template>
  <div class="w-5/6 h-screen overflow-y-auto dark:bg-neutral-900 transition-all">
    <div class="w-full border-b dark:border-b-neutral-800 px-6 py-7 flex gap-4 items-center justify-end relative">
        <DarkModeToggler />
        <ProfileMenu />
    </div>
    <div class="w-full p-6">
        <h1 class="text-3xl dark:text-slate-200">Welcome back</h1>
        <small class="text-md text-gray-500 dark:text-slate-400">Be responsible for the money we have</small>
    </div>

    <div class="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 px-6 mb-6">
        <div class="grid grid-cols-2 gap-4">
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
        <div class="col-span-2">
            <SpendingCategoryCard />
        </div>

    </div>

  </div>
</template>
<script>
import AmountCard from '../Card/AmountCard.vue';
import Card from "../Card/index.vue"
import RecentTransactionCard from '../Card/RecentTransactionCard.vue';
import SpendingChart from '../Card/SpendingChart.vue';
import SpendingCategoryCard from '../Card/SpendingCategoryCard.vue';
import ProfileMenu from '../Menu/ProfileMenu.vue';
import DarkModeToggler from "../DarkModeToggler/index.vue"
export default { 
    components: {
        AmountCard,
        Card,
        SpendingChart,
        RecentTransactionCard,
        SpendingCategoryCard,
        ProfileMenu,
        DarkModeToggler
    }

}
</script>

<style>

</style>