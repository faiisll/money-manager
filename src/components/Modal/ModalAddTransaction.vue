<template>
    <Modal size="w-80" :show="show" @close="onClose" >
        <div class="w-full px-2 relative py-4">
            <div class="w-full flex justify-between mb-2 items-center">
                <h1 class="font-semibold">Add Transaction</h1>
                <div role="button" @click="onClose" class="w-8 h-8 bg-white dark:bg-neutral-800 rounded-xl dark:border-0 border border-neutral-300 flex justify-center items-center">
                    <span class="i-heroicons-x-mark-solid dark:text-neutral-200 text-2xl"></span>
                </div>
                
            </div>
            <div class="w-full flex flex-col pt-6">
                <Form  v-slot="{ values, errors }">
                    <div class="w-full flex flex-col gap-3">
                        <div class="w-full flex flex-col gap-1 flex-1">
                            <Input
                                name="name"
                                placeholder="Type the transaction name"
                                type="text"
                                v-model="transactionForm.name"
                                rules="required"
                                :state="errors.desc ? 'danger' : 'default'"
                                class="shadow-lg"
                                :errors="errors"
                            />
                        </div>
                        <div class="w-full flex flex-col gap-1 flex-1">
                            <Input
                                name="desc"
                                placeholder="Type the transaction description"
                                type="text"
                                v-model="transactionForm.desc"
                                rules=""
                                :state="errors.desc ? 'danger' : 'default'"
                                class="shadow-lg"
                            />
                        </div>
                        <div class="w-full flex flex-col gap-1 flex-1">
                            <Input
                                name="amount"
                                placeholder="Type the transaction amount"
                                type="text"
                                v-model="transactionForm.amount"
                                rules=""
                                :state="errors.desc ? 'danger' : 'default'"
                                class="shadow-lg"
                            />
                        </div>
                        <div class="w-full flex flex-col gap-1 flex-1">
                           <CategoryPicker v-model="transactionForm.categoryId" />
                        </div>

                        <Button type="submit" size="sm">
                            Submit
                        </Button>
                    </div>
                </Form>

                
            </div>
        </div>
    </Modal>
  
</template>

<script>
import CategoryPicker from '../Picker/CategoryPicker.vue'
import Modal from "./index.vue"
export default {
    components: {
        Modal,
        CategoryPicker
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        transactionForm: {
            name: "",
            categoryId: null,
            walletId: null,
            amount: 0,
            desc: ""
        }
    }),
    methods: {
        onClose(){
            this.$emit('close')
            this.transactionForm = {
                name: "",
                categoryId: null,
                walletId: null,
                amount: 0,
                desc: ""
            }
        },
    }


}
</script>

<style>

</style>