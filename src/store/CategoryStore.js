import { defineStore } from 'pinia'
import { getCategories, deleteCategory, postCategory, patchCategory } from '@/api'

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
        loadingCategory: false
    }),
    getters: {
        getCategoryById(state){
            return (id) => {
                let index =  state.categories.map(e => e.id).indexOf(Number(id));
    
                if(index >= 0){
                    return state.categories[index]
                }

                return null

            }

        }

    },
    actions: {
        addLocalCategories(category){
            let categories = this.categories
            this.categories = [...categories, category]
        },
        editLocalCategories(category){
            let categories = this.categories
            let index =  categories.map(e => e.id).indexOf(category.id);
            if(index >= 0){
                categories[index] = category
                this.categories = [...categories]
            }
        },
        removeLocaCategories(id){
            let categories = this.categories.filter(cat => cat.id !== id)
            this.categories = [...categories]
        },
        patchCategoryAct({id, body}){
            // console.log(id);
            return new Promise((resolve, reject) => {
                this.loadingCategory = true
                patchCategory({id, body}).then(res => {
                    resolve(res)

                    this.editLocalCategories(res.data.data)
                }).catch(err => {
                    reject(err)
                }).finally(() => {
                    this.loadingCategory = false
                })

            })

        },
        postCategoryAct(body){
            return new Promise((resolve, reject) => {
                this.loadingCategory = true
                postCategory(body).then(res => {
                    resolve(res)

                    if(res.data.data){
                        this.categories.push(res.data.data)
                    }
                    this.removeLocaCategories(id)
                }).catch(err => {
                    reject(err)
                }).finally(() => {
                    this.loadingCategory = false
                })

            })

        },
        deleteCategoryAct(id){
            return new Promise((resolve, reject) => {
                this.loadingCategory = true
                deleteCategory(id).then(res => {
                    resolve(res)
                    this.removeLocaCategories(id)
                }).catch(err => {
                    reject(err)
                }).finally(() => {
                    this.loadingCategory = false
                })

            })
            

        },
        getCategoriesAct(setStore = true){
            return new Promise((resolve, reject) => {
                this.loadingCategory = true
                getCategories().then(res => {
                    resolve(res)
                    if(setStore && res.data.data.data){
                        this.categories = [...res.data.data.data]
                    }
                }).catch(err => {
                    reject(err)
                }).finally(() => {
                    this.loadingCategory = false
                })

            })

        }
    }
})