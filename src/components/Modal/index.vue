<template>
    <transition>
        <div @close="close" v-if="show" class="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">
            <div @click="close" class="w-full h-full bg-neutral-950 opacity-70 absolute top-0 left-0 z-0"></div>
            <transition name="modal-slide" mode="out-in">
                <div v-if="showCard" class="bg-white dark:bg-neutral-900 dark:text-neutral-200 dark:border dark:border-emerald-500 rounded-2xl p-4 z-10"
                :class="{
                    ['w-1/2']: size === 'md',
                    ['w-1/3']: size === 'sm',
                    ['w-1/4']: size === 'xs',
                    ['w-3/4']: size === 'lg',
                    [`${size}`]: !isCustomSize
    
                }">
                    <slot></slot>
                </div>

            </transition>

        </div>
    </transition>
    
</template>

<script >
  export default {
    components: {
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'md'
        },
    },
    computed: {
        isCustomSize(){
            return ["md", "sm", "xs", "lg"].includes(this.size)
        }
    },
    watch:{
        show(val){
            if(val){
                setTimeout(() => {
                    this.showCard = true
                    
                }, 300)
            }else{
                
                this.showCard = false
            }
        }
    },
    data: () => ({
        showCard: false
    }),
    methods: {
        close(){
            this.$emit('close')
        }
    }
  }
  
  
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}


.modal-slide-enter-active,
.modal-slide-leave-active{
    transition: 300ms ease all;
}
.modal-slide-enter-from,
.modal-slide-leave-to{
    opacity: 0;
    transform: translateY(30px);
}
</style>
  