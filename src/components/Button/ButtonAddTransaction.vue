<template>
    <div @click="toggleShow(true)" class="p-4 flex bg-emerald-500 fixed bottom-10 right-10 text-white rounded-lg shadow-lg cursor-pointer transition-all hover:-translate-y-2 z-50">
        <span class="i-heroicons-plus-solid"></span>
    </div>
    <ModalAddTransaction :show="showModal" @close="toggleShow(false)" />
  
</template>

<script>
import ModalAddTransaction from '../Modal/ModalAddTransaction.vue';
export default {
    components: {
        ModalAddTransaction
    },
    data: () => ({
        showModal: false
    }),
    methods: {
        toggleShow(val){
            this.showModal = val
        }
    }

}
</script>

<style>

</style>