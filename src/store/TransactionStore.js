import { defineStore } from 'pinia'
import { getTransactions, deleteTransaction } from '@/api'

export const useTransactionStore = defineStore('transaction', {
    state: () => ({
        transactions: [],
        loadingTransaction: false
    }),
    actions: {
        addLocalTransactions(category){
            let categories = this.categories
            this.categories = [...categories, category]
        },
        editLocalTransactions(transaction){
            let transactions = this.transactions
            let index =  transactions.map(e => e.id).indexOf(transaction.id);
            if(index >= 0){
                transactions[index] = transaction
                this.transactions = [...transactions]
            }
        },
        removeLocaTransactions(transaction){
            console.log(transaction);
            let transactions = this.transactions
            let arrayDate = transactions.filter(tran => tran.date)
            let indexDate = arrayDate.indexOf(transaction.date)
            if(indexDate < 0) return false

            let transactionDate = this.transactions[indexDate]
            let arrayTrans = transactionDate.transactions.map(tran => tran.id)
            let indexTrans = arrayTrans.indexOf(transaction.id)
            if(indexTrans < 0) return false

            let transactionByIndex =  transactionDate.transactions[indexTrans]
            transactionDate.amount -= transactionByIndex.anount
            transactionDate.transactions = transactionDate.transactions.filter(tran => tran.id !== transactionByIndex.id)
            transactions[indexDate] = transactionDate
            this.transactions = [...transactions]
        },
        getTransactionAct(params = {}){
            // console.log(id);
            return new Promise((resolve, reject) => {
                this.loadingTransaction = true
                getTransactions(params).then(res => {
                    resolve(res)

                    // this.editLocalTransactions(res.data.data)
                    if(res.data.data){
                        this.transactions = [...res.data.data]
                    }
                }).catch(err => {
                    reject(err)
                }).finally(() => {
                    this.loadingTransaction = false
                })

            })
            
        },
        deleteTransactionAct(id){
            return new Promise((resolve, reject) => {
                this.loadingTransaction = true
                deleteTransaction(id).then(res => {
                    resolve(res)
                    
                    // console.log(res.data.data);
                    
                }).catch(err => {
                    reject(err)
                }).finally(() => {
                    this.loadingTransaction = false
                })
    
            })

        }
    }
})