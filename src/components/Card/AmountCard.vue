<template>
    <card :color="bg">
        <div class="flex justify-between items-center">
            <h2 class="font-medium">{{ title }}</h2>

            <div class="p-2 bg-white rounded-2xl flex items-center" role="button">
                <span class="i-heroicons-arrow-up-right-20-solid text-2xl"></span>
            </div>
        </div>
        <div class="w-full pt-2">
            <h3 class="text-xl font-semibold">Rp 6.700.000</h3>
            <h4 class="pb-4 pt-2 text-xs" :class="`${color}`">78% then last month</h4>
        </div>

    </card>
</template>

<script>
import Card from "./index.vue"
export default {
    components: {
        Card
    },
    props: {
        bg: {
            type: String,
            default: "bg-white"
        },
        color: {
            type: String,
            default: "text-red-500"
        },
        title: {
            type: String,
            default: "Balance"
        }
    }

}
</script>

<style>

</style>