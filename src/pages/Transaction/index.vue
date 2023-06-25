<template>
  <div>{{ currentRoute }}</div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import {getTodos, addTodo} from "../../firebase"



export default {
  setup(){
    const router = useRouter
    return {
      router,
    }

  },
  data: () => ({
    todos: []

  }),
  computed: {
    currentRoute(){
      return this.router().currentRoute.value.path
    }
  },
  methods: {
    async fetchData(){
      try{
        let res = await getTodos()
        console.log(res);
      }catch(err){

      }
    }
  },
  created(){
    this.fetchData()
    addTodo({
      name: "TEssss",
      status: false
    })
  }

}
</script>

<style>

</style>