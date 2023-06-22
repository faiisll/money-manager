

<template>
  <div id="parent-all" class="flex font-raleway">
    <Sidebar />
    <Body />
    
  </div>
</template>
<script>
import Sidebar from './components/Sidebar/index.vue'
import Body from './components/Body/index.vue'

export default {
  components: {
    Sidebar,
    Body
  }

}
</script>
<style scoped>
#parent-all{
  height: 100vh;
  width: 100vw;
}

</style>
