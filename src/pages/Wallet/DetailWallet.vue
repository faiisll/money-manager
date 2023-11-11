<template>
  <transition name="page-opacity" mode="out-in">
    <div v-if="show" class="w-full h-full bg-white dark:bg-neutral-900 absolute p-4">
      <div  v-if="localWallet" class="w-full flex justify-between pb-4">
        <ConfirmDelete
        desc="Are you sure you want to delete this wallet from the GoFin platform?"
        :loading="loading"
        @close="showConfirm = false"
        @cancel="showConfirm = false"
        @proceed="handleDelete(localWallet.id)"
        :show="showConfirm" />

        <div class="flex flex-col">
          <div class="flex gap-2 items-center">
            <span class="text-lg dark:text-neutral-400">{{ localWallet.name }}</span>
            <Spinner v-if="loading" :size="16" />
          </div>
          <h2 class="text-2xl font-bold dark:text-neutral-200">IDR {{ moneyFormat(localWallet.balance) }}</h2>
        </div>
        <div class="flex gap-3">
          <button @click="showEdit" :disabled="loading" role="button" class="w-8 h-8 p-1 bg-white dark:bg-neutral-800 rounded-xl dark:border-0 border border-neutral-300 flex justify-center items-center">
            <span class="i-heroicons-pencil dark:text-neutral-200 text-2xl"></span>
          </button>
          <button v-if="localWallet.isDefault !== '1'" :disabled="loading" role="button" @click="showConfirm = true" class="w-8 h-8 bg-white dark:bg-neutral-800 rounded-xl dark:border-0 border border-neutral-300 flex justify-center items-center">
            <span class="i-heroicons-trash dark:text-neutral-200 text-2xl"></span>
          </button>
          <button :disabled="loading" role="button" @click="$emit('close')" class="w-8 h-8 bg-white dark:bg-neutral-800 rounded-xl dark:border-0 border border-neutral-300 flex justify-center items-center">
            <span class="i-heroicons-x-mark-solid dark:text-neutral-200 text-2xl"></span>
          </button>

        </div>
      </div>
      
      <div class="w-full mb-4 flex justify-end items-end">
        <div class="md:w-60 w-full lg:w-72">
          <VueDatePicker v-model="month" month-picker :dark="isDark">
            <template #input-icon>
              <div class="w-8 h-8 flex items-center justify-center pl-1">
                <span class="i-heroicons-calendar text-xl"></span>
              </div>
            </template>
          </VueDatePicker>
        </div>
      </div>


      <div class="w-full">
        <Table :data="transactions" :fields="fields" title="Wallet Transaction">
          <template #cell(name)="{ value, item }">
            <div class="flex items-center">
              <div class="p-2 border dark:border-gray-600 flex rounded-lg mr-4">
                  <span class="i-heroicons-shopping-cart"></span>
              </div>

              <span>{{ value }}</span>
            </div>
          </template>
          <template #cell(action)="{ value, item }">
            <div class="flex gap-2 shrink-0">
                <div class="flex p-2 border dark:border-neutral-600 rounded-lg" role="button">
                    <span class="i-heroicons-pencil"></span>
                </div>
                <div class="flex p-2 border dark:border-neutral-600 rounded-lg" role="button">
                    <span class="i-heroicons-trash"></span>
                </div>
            </div>
          </template>
        </Table>

      </div>

      
    </div>
  </transition>
</template>

<script>
import BalanceCard from '@/components/Card/BalanceCard.vue';
import RecentTransactionCard from '@/components/Card/RecentTransactionCard.vue';
import {useDark} from "@vueuse/core"
import { ref } from 'vue';
import { moneyFormat } from '@/helpers';
import { deleteWallet } from '@/api';
import { mapActions, mapState } from "pinia";
import { useWalletStore } from '@/store';
import Spinner from "@/components/Spinner/miniSpinner.vue"
import { notify } from 'notiwind'
export default {
    props: {
      show: {
        type: Boolean,
        default: false
      },
      wallet: {
        default: null
      },
    },
    components: {
        BalanceCard,
        RecentTransactionCard,
        Spinner,
    },
    setup(){
      let isDark = useDark()

      return {
          isDark,
      }
    },
    data: () => ({
      month: {
        month: new Date().getMonth(),
        year: new Date().getFullYear()
      },
      loading: false,
      showConfirm: false,
      fields: [
        {key: "name", title: "Name"},
        {key: "amount", title: "Amount"},
        {key: "date", title: "Date"},
        {key: "action"},
      ],
      transactions: [
        {name: "Buy Milk", amount: 10000}
      ]
    }),
    computed: {
      ...mapState(useWalletStore, ["getSingleWalletbyId"]),
      localWallet(){
        if(this.wallet.id) return this.getSingleWalletbyId(this.wallet.id)
        return false

      }

    },
    watch: {
      month: {
        deep: true,
        handler(val){
          if(val === null) this.month = this.setToday()

        }
      }

    },
    methods: {
      ...mapActions(useWalletStore, ['removeLocalWallets']),
      moneyFormat(val){
          return moneyFormat(val)
      },
      showEdit(){
        // console.log("click");
        this.$emit('onEdit', {wallet: this.wallet, show: true})
      },
      setToday() {
        return {
          month: new Date().getMonth(),
          year: new Date().getFullYear()
        }

      },
      handleDelete(id){
        if(id){
          this.loading = true
          deleteWallet(id).then(res => {
            this.showConfirm = false
            this.$emit('close')
            this.removeLocalWallets(id)
            notify({
              group: "success",
              title: "Success",
              text: res.data.message
            }, 5000)
          }).catch(err => {
            // console.log(err);
            notify({
                  group: "danger",
                  title: "Failed",
                  text: err.message
              }, 5000)
          }).finally(() => {
            this.loading = false
          })

        }

      }
    }

}
</script>

<style>

</style>