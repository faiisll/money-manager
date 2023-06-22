<template>
  <div class="w-5/6 h-screen overflow-y-auto p-6">
    <div class="w-full mb-6">
        <h1 class="text-3xl">Welcome back</h1>
        <small class="text-md text-gray-500">Welcomeback to dashboard</small>
    </div>

    <div class="w-full grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div class="grid grid-cols-2 gap-4">
            <div>
                <amount-card bg="bg-orange-100" color="text-yellow-500"/>
            </div>
            <div>
                <amount-card bg="bg-green-50" color="text-green-500"/>
            </div>
            <div>
                <amount-card bg="bg-blue-50" color="text-blue-500"/>
            </div>
            <div>
                <amount-card bg="bg-purple-50" color="text-purple-500"/>
            </div>
            
        </div>
        <div class="w-full h-full min-h-[200px]">
            <card color="bg-emerald-900" customClass="h-full">

            </card>

    
        </div>

    </div>
    <div class="w-full grid lg:grid-cols-2 grid-cols-1 gap-4">

    </div>

  </div>
</template>

<script>
import AmountCard from '../Card/AmountCard.vue';
import Card from "../Card/index.vue"
export default {
    components: {
        AmountCard,
        Card
    }

}
</script>

<style>

</style>