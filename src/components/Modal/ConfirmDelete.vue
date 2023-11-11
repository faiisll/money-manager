<template>
    <transition name="page-opacity">
        <div v-if="modalShow" class="fixed top-0 left-0 w-full h-full z-99 flex justify-center items-center">
            <div @click="close" class="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-60"></div>
    
            <div class="w-full max-w-[500px] py-7 px-4 z-20 bg-white dark:bg-neutral-900 rounded-lg">
                <div class="w-full text-center font-semibold mb-4">
                    <h1 class="text-xl dark:text-neutral-200">{{ title }}</h1>
                    <p class="text-lg font-light text-gray-600 dark:text-gray-500">{{ desc }}</p>
                </div>
    
                <div v-if="useWarning" class="w-full py-4 px-4 rounded-lg bg-orange-100 text-orange-800 text-sm mb-4">
                    <div class="flex items-center gap-1 mb-2">
                        <span class="i-heroicons-exclamation-triangle-20-solid"></span>
                        <h3 class="font-bold">Warning</h3>
                    </div>
    
                    <p>{{ textWarning }}</p>
                </div>
    
                <div class="w-full flex gap-2 justify-center">
                    <Button :disabled="loading" size="sm" @click="negativeButtonClick" variant="outline-default">No, Cancel</Button>
                    <Button :disabled="loading" size="sm" @click="positiveButtonClick" variant="danger">
                        <span v-if="!loading">Yes, Confirm delete</span>
                        <span v-else>Deleting...</span>
                    </Button>
                </div>
            </div>
    
        </div>

    </transition>

</template>

<script>
import Button from "@/components/Button/index.vue"
export default {
    components: {
        Button
    },
    props: {
        title: {
            default: "Confirm Delete"
        },
        desc: {
            default: "Are you sure you want to delete this from the GoFin platform?"
        },
        useWarning: {
            default: true
        },
        textWarning: {
            default: "By deleting this item, associated items will also be permanently deleted."
        },
        show: {
            default: false
        },
        loading: {
            default: false
        }
    },
    data: () => ({
        modalShow: false
    }),
    watch: {
        show(val){
            this.modalShow = val
        }
    },
    methods: {
        close() {
            this.$emit("close");
        },
        positiveButtonClick() {
            this.$emit("proceed");
        },
        negativeButtonClick() {
            this.$emit("cancel");
        },
    },

}
</script>

<style lang="scss" scoped>
.z-99{
    z-index: 99;
}

</style>