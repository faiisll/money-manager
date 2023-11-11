<template>
    <div class="w-screen h-screen fixed z-50">
        <div class="w-2/3 h-full z-10 relative">
            <Sidebar />
        </div>
        <div @click="close" class="absolute w-full h-full top-0 left-0 bg-black -z-100 opacity-50"></div>

    </div>
  
</template>

<script>
import Sidebar from "@/components/Sidebar/index.vue"
export default {
    components: {
        Sidebar
    },
    methods: {
        close(){
            this.$emit('close')
        }
    },
    watch: {
        $route(val){
            setTimeout(() => {
                this.close()
            }, 500)
        }

    },
    created(){
        // console.log(this.$route);
    }

}
</script>

<style>

</style>