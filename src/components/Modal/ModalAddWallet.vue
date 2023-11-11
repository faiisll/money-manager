<template>
    <Modal size="w-80" :show="show" @close="onClose" >
        <div class="w-full px-2 w- relative py-4">
            <div class="w-full flex justify-between mb-4 items-center">
                <h1 v-if="mode === 'add'" class="font-semibold">Add Wallet</h1>
                <h1 v-else class="font-semibold">Edit Wallet</h1>
                <div role="button" @click="onClose" class="w-8 h-8 bg-white dark:bg-neutral-800 rounded-xl dark:border-0 border border-neutral-300 flex justify-center items-center">
                    <span class="i-heroicons-x-mark-solid dark:text-neutral-200 text-2xl"></span>
                </div>
                
            </div>
            <div class="w-full">
                <BalanceCardVue :balance="isNaN(walletForm.balance) ? 0 : Number(walletForm.balance)">
                    {{ walletForm.name }}
                </BalanceCardVue> 
            </div>
            <div class="w-full flex flex-col pt-6">
                <!-- <div class="flex w-full justify-between pb-6 pt-2">
                    <h1 class="text-sm font-bold">Add Wallet</h1>
                </div> -->

                <Form @submit="handleSubmit" v-slot="{ values, errors }">
                    <div class="w-full flex flex-col gap-3">
                        <div class="w-full flex flex-col gap-1">
                            <Input
                                name="name"
                                prefixIcon="i-heroicons-wallet-solid"
                                placeholder="Type your wallet name"
                                type="text"
                                v-model="walletForm.name"
                                rules="required"
                                :state="errors.name ? 'danger' : 'default'"
                            />
                            <div v-if="errors.name" class="flex gap-1 text-sm text-red-600 dark:text-red-400 items-center">
                                <span class="i-heroicons-information-circle"></span>
                                <small>{{ errors['name'] }}</small>
                            </div>
                        </div>
                        <div class="w-full flex flex-col gap-1 mb-4">
                            <Input
                                name="balance"
                                prefixIcon="i-heroicons-banknotes"
                                placeholder="Input initial balance amount"
                                type="text"
                                v-model="walletForm.balance"
                                rules="numeric"
                                :state="errors.balance ? 'danger' : 'default'"
                            />
                            <div v-if="errors.balance" class="flex gap-1 text-sm text-red-600 dark:text-red-400 items-center">
                                <span class="i-heroicons-information-circle"></span>
                                <small>{{ errors['balance'] }}</small>
                            </div>
                        </div>

                        <Button :disabled="loading" type="submit" size="sm">
                            {{loading ? "Submiting..." : "Submit"}}
                        </Button>
                    </div>
                </Form>

                
            </div>
            <!-- <div>{{ dataEdit }}</div> -->
        </div>
    </Modal>
  
</template>

<script>
import Modal from "./index.vue"
import { notify } from 'notiwind'
import BalanceCardVue from "../Card/BalanceCard.vue";
import { postWallet, patchWallet } from '@/api'
import { mapActions } from "pinia";
import { useWalletStore } from '@/store';
export default {
    components: {
        Modal,
        BalanceCardVue
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        dataEdit: {
            default: null
        }
    },
    data: () => ({
        walletForm: {
            name: "",
            balance: 0
        },
        loading: false, 
        mode: "add"
    }),
    watch: {
        dataEdit(val){
            if(val === null) this.mode = "add"
            else {
                this.mode = "edit"
                let {name, balance} = this.dataEdit
                this.walletForm.name = name
                this.walletForm.balance = balance
            }
        }

    },
    methods: {
        ...mapActions(useWalletStore, ['addLocalWallets', 'editLocalWallets']),
        handleSubmit(){
            if(this.dataEdit === null){
                this.addWallet()
            }else{
                this.editWallet()
            }
        },
        addWallet(){
            this.loading = true
            postWallet(this.walletForm).then(res => {
                // console.log(res);
                let newWallet = res.data.data
                if(newWallet){
                    this.addLocalWallets(newWallet)
                    this.onClose()
                }
    
                notify({
                    group: "success",
                    title: "Success",
                    text: res.data.message
                }, 5000)
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                
                this.loading = false
            })

        },
        editWallet(){
            this.loading = true
            patchWallet(this.dataEdit.id, this.walletForm).then(res => {
                // console.log(res);
                let edited = res.data.data
                if(edited){
                    this.editLocalWallets(edited)
                    // console.log(edited);
                    // this.addLocalWallets(newWallet)
                }
                
                this.onClose()
                notify({
                    group: "success",
                    title: "Success",
                    text: res.data.message
                }, 5000)
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                
                this.loading = false
            })

        },
        onClose(){
            this.$emit('close')
            this.walletForm = {
                name: "",
                balance: 0
            }
        }
    }


}
</script>

<style>

</style>