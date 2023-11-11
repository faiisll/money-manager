<template>
  <div class="w-full h-full flex flex-col overflow-hidden">
    <PageHeader desc="Every small things matters.">
      Transactions List
    </PageHeader>
    <div class="w-full flex-1 flex flex-col px-6 overflow-y-auto text-neutral-700 dark:text-neutral-300">
      <ConfirmDelete
        desc="Are you sure want to delete this transaction ?"
        :loading="loadingTransaction"
        :useWarning="false"
        @close="showConfirm = false"
        @cancel="showConfirm = false"
        @proceed="handleDelete(selectedCell.id ? selectedCell.id : '')"
        :show="showConfirm" />



      <div class="w-full mb-4 flex justify-end items-end">
        <div class="md:w-60 w-full lg:w-72">
          <VueDatePicker v-model="date" month-picker :dark="isDark">
            <template #input-icon>
              <div class="w-8 h-8 flex items-center justify-center pl-1">
                <span class="i-heroicons-calendar text-xl"></span>
              </div>
            </template>
          </VueDatePicker>
        </div>
      </div>
      <div class="w-full overflow-y-auto">

        <!-- empty state -->
        <empty v-if="!loadingTransaction && !transactions.length" />

        <!-- loading state -->
        <loadingTransaction v-if="loadingTransaction" />


        <!-- table transaction -->
        <template v-else v-for="day in transactions" :key="day.date">
          <Table class="mb-4" :fields="fields" :data="day.transactions" :title="day.date">
  
            <template #tableTitle="{value}">
              <div class="w-full flex justify-between items-center">
                <span>{{ dateFormat(value) }}</span>
                <span :class="{['text-green-500']: day.totalAmount >= 0, ['text-red-500']: day.totalAmount < 0}">
                  {{moneyFormat(day.totalAmount)}}
                </span>
              </div>
            </template>
  
  
            <!-- cateogry and name field  -->
            <template #cell(name)="{ value, item }">
              <div class="flex items-center">
                <div class="p-2 border dark:border-gray-600 flex rounded-lg mr-4">
                  <span :class="getById(item.categoryId, 'category').icon"></span>
                </div>
  
                <span>{{ (value) }}</span>
              </div>
            </template>
  
            <template #cell(amount)="{ value, item }">
              <span :class="{['text-green-500']: value >= 0, ['text-red-500']: value < 0}">{{ moneyFormat(value) }}</span>
            </template>
            <template #cell(walletId)="{ value, item }">
              <span >{{ getSingleWalletbyId(item.walletId)}}</span>
            </template>
            <template #cell(action)="{ value, item }">
              <div class="flex gap-2 shrink-0">
                <div class="flex p-2 border dark:border-neutral-600 rounded-lg" role="button">
                    <span class="i-heroicons-pencil"></span>
                </div>
                <div @click="deleteCell(item)" class="flex p-2 border dark:border-neutral-600 rounded-lg" role="button">
                    <span class="i-heroicons-trash"></span>
                </div>
            </div>
            </template>
          </Table>
        </template>

      </div>
      
      <!-- <TransactionList :data="transactions" /> -->


    </div>

  </div>
</template>

<script>
import PageHeader from '@/components/Header/PageHeader.vue';
import TransactionList from '@/components/TransactionList/index.vue'
import {useDark} from "@vueuse/core"
import dateMixin from "@/plugins/mixin/dateMixin.js"
import { mapActions, mapState } from 'pinia';
import { useTransactionStore, useWalletStore, useCategoryStore} from "@/store"
import { moneyFormat, dateFormat } from '@/helpers';
import loadingTransaction from './loadingTransaction.vue';
import empty from './empty.vue';

export default {
  mixins: [dateMixin],
  components: {
    PageHeader,
    TransactionList,
    loadingTransaction,
    empty
  },
  setup(){
      let isDark = useDark()

      return {
          isDark,
      }
  },
  data: () => ({
    fields: [
      {key: "name", title: "Name"},
      {key: "desc", title: "Description"},
      {key: "amount", title: "Amount"},
      {key: "walletId", title: "Wallet"},
      {key: "action", title: "Action"},
    ],
    showConfirm: false,
    selectedCell: null

  }),
  computed: {
    ...mapState(useTransactionStore, ['transactions', 'loadingTransaction']),
    ...mapState(useWalletStore, ['getSingleWalletbyId']),
    ...mapState(useCategoryStore, ['getCategoryById']),
  },
  watch: {
    date(){
      this.fetchTransaction()

    }
  },
  methods: {
    ...mapActions(useTransactionStore, ['getTransactionAct', 'deleteTransactionAct']),
    fetchTransaction(){
      this.getTransactionAct({groupBy: "date", limit: 1000, dateFrom: this.firstDateFormated, dateTo: this.lastDateFormated}).then((res) => {
      // console.log(res);
      })
    },
    dateFormat(val){
      return dateFormat(val)
    },
    deleteCell(val){
      this.selectedCell = val
      this.showConfirm = true
    },
    getById(id, type = "wallet"){
      let data = null
      if(type === "wallet") data =  this.getSingleWalletbyId(id)
      if(type === "category") data = this.getCategoryById(id)
      return data
    },
    moneyFormat(val){
      return moneyFormat(val)
    },
    async handleDelete(id){
      await this.deleteTransactionAct(id)
      this.fetchTransaction()
      this.showConfirm = false

    }
    
  },
  created(){
    this.fetchTransaction()
    
  }

}
</script>

<style>

</style>