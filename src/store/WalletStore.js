import { defineStore } from 'pinia'
import { getWallets, postWallet, deleteWallet } from '@/api'

export const useWalletStore = defineStore('wallet', {
    state: () => ({
        wallets: [],
        loadingWallet: false
    }),
    getters: {
        getSingleWalletbyId(state){
            return (id) => {
                let index =  state.wallets.map(e => e.id).indexOf(id);
    
                if(index >= 0){
                    return state.wallets[index]
                }

                return null

            }

        }

    },
    actions: {
        addLocalWallets(wallet){
            let wallets = this.wallets
            this.wallets = [...wallets, wallet]
        },
        editLocalWallets(wallet){
            let wallets = this.wallets
            let index =  wallets.map(e => e.id).indexOf(wallet.id);
            if(index >= 0){
                wallets[index] = wallet
                this.wallets = [...wallets]
            }
        },
        removeLocalWallets(id){
            let wallets = this.wallets.filter(wallet => wallet.id !== id)
            this.wallets = [...wallets]
        },
        getWalletsAct(setStore = true){
            return new Promise((resolve, reject) => {
                this.loadingWallet = true
                getWallets().then(res => {
                    resolve(res)
                    if(setStore && res.data.data.data){
                        this.wallets = [...res.data.data.data]
                    }
                }).catch(err => {
                    reject(err)
                }).finally(() => {
                    this.loadingWallet = false
                })

            })

        }
    }
})