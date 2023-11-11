<template>
    <Modal size="w-80" :show="show" @close="onClose" >
        <div class="w-full px-2 w- relative py-4">
            <div class="w-full flex justify-between mb-2 items-center">
                <h1 v-if="mode === 'add'" class="font-semibold">Add Category</h1>
                <h1 v-else class="font-semibold">Edit Category</h1>
                <div role="button" @click="onClose" class="w-8 h-8 bg-white dark:bg-neutral-800 rounded-xl dark:border-0 border border-neutral-300 flex justify-center items-center">
                    <span class="i-heroicons-x-mark-solid dark:text-neutral-200 text-2xl"></span>
                </div>
                
            </div>
            <div class="w-full flex flex-col pt-6">
                <!-- <div class="flex w-full justify-between pb-6 pt-2">
                    <h1 class="text-sm font-bold">Add Wallet</h1>
                </div> -->

                <Form @submit="handleSubmit" v-slot="{ values, errors }">
                    <div class="w-full flex flex-col gap-3">
                        <div class="w-full flex flex-wrap item">
                            <div class="mr-2">
                                <IconPicker class="shadow-lg" :iconValue="categoryForm.icon" @selectIcon="handleSelectIcon" />
                            </div>
                            
                            <div class="w-full flex flex-col gap-1 flex-1">
                                <Input
                                    name="name"
                                    placeholder="Type your category name"
                                    type="text"
                                    v-model="categoryForm.name"
                                    rules="required"
                                    :state="errors.name ? 'danger' : 'default'"
                                    class="shadow-lg"
                                />
                                <div v-if="errors.name" class="flex gap-1 text-sm text-red-600 dark:text-red-400 items-center">
                                    <span class="i-heroicons-information-circle"></span>
                                    <small>{{ errors['name'] }}</small>
                                </div>
                            </div>
                        </div>

                        <RadioGroup v-model="categoryForm.type" class="flex gap-2 w-full" name="type">
                            <RadioGroupOption v-slot="{ checked }" value="1" class="flex-1" >
                                <div class="w-full flex justify-center p-2 rounded-lg cursor-pointer " :class="checked ? 'bg-blue-500 shadow text-white' : 'dark:bg-neutral-500 bg-neutral-200 hover:bg-blue-200 dark:hover:bg-blue-900'">
                                    <div class="flex flex-0 w-fit items-center">
                                        <span class="i-heroicons-arrow-down-on-square text-lg mr-1"></span>
                                        <span>Income</span>
                                    </div>
                                </div>
                            </RadioGroupOption>
                            <RadioGroupOption v-slot="{ checked }" value="0" class="flex-1">
                                <div class="w-full p-2 rounded-lg flex justify-center cursor-pointer" :class="checked ? 'bg-rose-500 text-white' : 'dark:bg-neutral-500 bg-neutral-200 hover:bg-rose-200 dark:hover:bg-rose-900'">
                                    <div class="flex flex-0 w-fit items-center">
                                        <span class="i-heroicons-arrow-up-on-square text-lg mr-1"></span>
                                        <span>Expense</span>
                                    </div>
                                </div>
                            </RadioGroupOption>
                        </RadioGroup>

                        <div class="text-center">
                            <span class="text-sm">Select Color</span>
                        </div>
                        <VariantPicker @selectColor="handleSelectColor" :value="categoryForm.variant" />

                        <Button :disabled="loadingCategory" type="submit" size="sm">
                            <span v-if="!loadingCategory">Submit</span>
                            <span v-else>Submiting...</span>
                        </Button>
                    </div>
                </Form>

                
            </div>
        </div>
    </Modal>
  
</template>

<script>
import Modal from "./index.vue"
import IconPicker from "@/components/IconPicker/index.vue"
import VariantPicker from "@/components/VariantPicker/index.vue"
import { mapActions, mapState } from "pinia"
import { useCategoryStore } from "@/store"
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
} from '@headlessui/vue'
export default {
    components: {
        Modal,
        IconPicker,
        RadioGroup,
        RadioGroupLabel,
        RadioGroupOption,
        VariantPicker
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
        categoryForm: {
            name: "",
            type: "0",
            variant: "red",
            icon: null
        },
        mode: "add"
    }),
    computed: {
        ...mapState(useCategoryStore, ['loadingCategory'])
    },
    watch: {
        dataEdit(val){
            if(val === null) this.mode = "add"
            else {
                this.mode = "edit"
                this.setEditData()
            }

        }

    },
    methods: {
        ...mapActions(useCategoryStore, ['postCategoryAct', 'patchCategoryAct']),
        onClose(){
            this.$emit('close')
            this.categoryForm = {
                name: "",
                type: "0",
                variant: "primary",
                icon: null
            }
        },
        setEditData(){
            let {name, type, icon, variant} = this.dataEdit

            this.categoryForm = {
                name,type,variant,icon
            }
            // console.log(this.categoryForm);

            this.handleSelectIcon(icon)

        },
        handleSelectIcon(val){
            // console.log(val);
            this.categoryForm.icon = val
        },
        handleSelectColor(val){
            this.categoryForm.variant = val
        },
        handleSubmit(){
            if(this.mode === "add"){
                this.handleAdd()
            }else{
                this.handleEdit()
            }
            
            
        },
        handleAdd(){
            this.postCategoryAct(this.categoryForm).then((res) => [
                this.onClose()
            ])
        },
        handleEdit(){
            // console.log(this.dataEdit.id);
            let {id} = this.dataEdit
            let body = {...this.categoryForm}
            this.patchCategoryAct({id, body})
            .then(res => {
                this.onClose()

            })

        }
    }


}
</script>

<style>

</style>