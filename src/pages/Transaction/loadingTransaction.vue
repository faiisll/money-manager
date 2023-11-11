<template>
  <Table  class="mb-4" :fields="fields" :data="dummy" title="0">

    <template #tableTitle="{value}">
    <div class="w-full flex justify-between items-center">
        <div class="w-36 h-5"><Skeleton /></div>
        <div class="w-48 h-5"><Skeleton /></div>
    </div>
</template>


<!-- cateogry and name field  -->
<template #cell(name)="{ value, item }">
    <div class="w-48 h-5"><Skeleton /></div>
</template>
<template #cell(desc)="{ value, item }">
    <div class="w-48 h-5"><Skeleton /></div>
</template>
<template #cell(walletId)="{ value, item }">
    <div class="w-48 h-5"><Skeleton /></div>
</template>

<template #cell(amount)="{ value }">
    <div class="w-48 h-5"><Skeleton /></div>
</template>
<template #cell(action)="{ value }">
    <div class="w-48 h-5"><Skeleton /></div>
</template>
</Table>
</template>

<script>

import Skeleton from "@/components/Skeleton/index.vue"
export default {
    components: {
        Skeleton
    },
    data: () => ({
        fields: [
        {key: "name", title: "Name"},
        {key: "desc", title: "Description"},
        {key: "amount", title: "Amount"},
        {key: "walletId", title: "Wallet"},
        {key: "action", title: "Action"},
        ],
        dummy: [
            {}, {}, {}, {}
        ]

    }),

}
</script>

<style>

</style>