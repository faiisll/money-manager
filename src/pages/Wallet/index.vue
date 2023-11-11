<template>
    <div class="w-full min-h-full">
        <ModalAddWallet :dataEdit="dataEdit" :show="showModal" @close="toggleModal(false)" />
        <div class="w-full min-h-full relative" >
            <DetailWallet @onEdit="showEdit" class="z-20" :wallet="selectedWallet" :show="showDetail" @close="toggleDetail(false)" />
            <PageHeader desc="Manage your money in seperate way.">
                <div class="flex items-center gap-2">
                <span>Wallets</span>
                <Spinner v-if="walletStore.loadingWallet" />
                
                </div>
            </PageHeader>
            <div class="w-full p-4 grid lg:grid-cols-3 xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-4 z-10 relative">
                <!-- {{ walletStore.wallets }} -->
                <TransitionGroup name="list">
                    <BalanceCard  v-for="wallet in walletStore.wallets" :key="wallet.id" :balance="Number(wallet.finalBalance)" @click="toggleDetail(true, wallet)">
                        {{ wallet.name }}
                    </BalanceCard>
                    <AddBalanceCardVue @click="toggleModal(true)" key="addBalance" />
                </TransitionGroup>
            </div>
    
        </div>

    </div>
</template>

<script>
import PageHeader from '@/components/Header/PageHeader.vue';
import BalanceCard from '@/components/Card/BalanceCard.vue';
import AddBalanceCardVue from '@/components/Card/AddBalanceCard.vue';
import DetailWallet from './DetailWallet.vue';
import ModalAddWallet from '@/components/Modal/ModalAddWallet.vue';
import { useWalletStore } from '@/store';
import { mapStores } from 'pinia';
export default {
    components: {
        BalanceCard,
        PageHeader,
        AddBalanceCardVue,
        DetailWallet,
        ModalAddWallet
    },
    data: () => ({
        wallets: 1,
        showDetail: false,
        showModal: false,
        selectedWallet: null,
        dataEdit: null
    }),
    computed: {
        ...mapStores(useWalletStore)

    },
    methods: {
        showEdit({wallet, show}){
            // console.log("click 2");
            this.dataEdit = wallet
            this.showModal = show
        },
        toggleModal(val){
            this.showModal = val

            if(val){

            }else{
                this.dataEdit = null
            }
        },
        toggleDetail(val, data={}){
            this.showDetail = val
            if(val){
                this.selectedWallet = data
            }else{
                this.selectedWallet = null

            }
        },
        fetchWallets(){
            this.walletStore.getWalletsAct()
            
        }
    },
    created(){
        this.fetchWallets()
    }

}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translatey(30px);
}

</style>