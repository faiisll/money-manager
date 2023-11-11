<template>
    <div class="w-full min-h-full">
        <ModalAddCategory :dataEdit="dataEdit" :show="showModal" @close="onHide" />
        <ConfirmDelete
        desc="Are you sure you want to delete this category from the GoFin platform?"
        :loading="loadingCategory"
        @close="showConfirm = false"
        @cancel="showConfirm = false"
        @proceed="handleDelete"
        :show="showConfirm" />
        <PageHeader desc="Make spending more regular ">
            <div class="flex items-center gap-2">
                <span>Categories</span>
                <Spinner v-if="loadingCategory" />
                
            </div>
        </PageHeader>
        <div class="w-full p-4 grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-8 md:grid-cols-3 gap-4">
            
            <CategoryCardVue
            v-for="category in categories"
            :key="category.id"
            :dataProps="category"
            @onDelete="deleteCat"
            @onEdit="editCat"/>
            <AddCategoryCardVue @click="toggleModal(true)" />

        </div>
    </div>
</template>

<script>
import PageHeader from '@/components/Header/PageHeader.vue';
import CategoryCardVue from '@/components/Card/CategoryCard.vue';
import AddCategoryCardVue from '@/components/Card/AddCategoryCard.vue';
import ModalAddCategory from '@/components/Modal/ModalAddCategory.vue';
import { mapState, mapActions } from 'pinia';
import { useCategoryStore } from '@/store';
import { notify } from 'notiwind';

export default {
    components: {
        PageHeader,
        CategoryCardVue,
        AddCategoryCardVue,
        ModalAddCategory
    },
    data: () => ({
        showModal: false,
        showConfirm: false,
        loading: false,
        selectedId: null,
        dataEdit: null
    }),
    computed: {
        ...mapState(useCategoryStore, ['categories', 'loadingCategory'])

    },
    methods: {
        ...mapActions(useCategoryStore, ['getCategoriesAct', 'deleteCategoryAct']),
        editCat(val){
            this.dataEdit = val
            this.toggleModal(true)
            

        },
        toggleModal(val){
            this.showModal = val
        },
        getCategories(){
            this.getCategoriesAct()
        },
        deleteCat(id){
            this.showConfirm = true
            this.selectedId = id

        },
        handleDelete(){
            this.deleteCategoryAct(this.selectedId).then((res) => {
                this.showConfirm = false

            }).catch(err => {
                notify({
                  group: "danger",
                  title: "Failed",
                  text: err.message
              }, 5000)
                
            })
        },
        onHide(){
            this.showModal = false,
            this.dataEdit = null
        }
    },
    created(){
        this.getCategories()
    }

}
</script>

<style>

</style>