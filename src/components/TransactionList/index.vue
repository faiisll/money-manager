<template>
  <div class="w-full flex flex-col dark:bg-neutral-800 border dark:border-0 rounded-lg p-4">
        <div class="w-full flex justify-between pt-2 border-b border-b-neutral-300 dark:border-b-neutral-700 pb-4 mb-2">
          <span class="text-neutral-400">
            11 April, 23
          </span>
          <span class="text-rose-400 font-semibold">-IDR 44.000</span>
        </div>

        <template v-for="t in data" :key="t.id">
            <transaction-item :value="t"/>

        </template>
      </div>
</template>

<script>
import TransactionItem from './TransactionItem.vue';
export default {
    components: {
        TransactionItem
    },
    props: {
        data: Array
    }

}
</script>

<style>

</style>