<template>
  <div :class="variant[dataProps.variant] ? variant[dataProps.variant] : variant['prmiary']" class="w-full rounded-xl p-4  relative group" v-if="dataProps">
    
    <div class="absolute top-2 right-2 gap-1 flex opacity-0 transition-all group-hover:opacity-90">
      <button><span @click="$emit('onEdit', dataProps)" class="i-heroicons-pencil"></span></button>
      <button @click="$emit('onDelete', dataProps.id)" v-if="dataProps.isDefault === '0'"><span class="i-heroicons-trash"></span></button>
    </div>
    <span :class="dataProps.icon === 'default' ? defaultIcon : dataProps.icon" class="text-3xl"></span>
    <div class="w-full">
      <h1 class="text-sm">{{ dataProps.name }}</h1>
      <div class="flex items-center gap-1" v-if="dataProps.type == '1'">
        <span class="i-heroicons-plus-circle-20-solid"></span>
        <small >Income</small>
      </div>
      <div class="flex items-center gap-1" v-if="dataProps.type == '0'">
        <span class="i-heroicons-minus-circle-20-solid"></span>
        <small>Expense</small>
      </div>
    </div>

  </div>
  
</template>

<script>
export default {
  props: {
    dataProps: {}
    
  },
  data: () => ({
    defaultIcon: "i-heroicons-hand-thumb-up",
    variant: {
      primary: "bg-green-400 dark:bg-green-400 dark:text-green-800 text-green-900",
      red: "bg-red-400 dark:bg-red-400 dark:text-red-800 text-red-900",
      blue: "bg-blue-300 dark:bg-blue-500 dark:text-blue-200 text-blue-900",
      purple: "bg-purple-300 dark:bg-purple-400 dark:text-purple-900 text-purple-900",
      pink: "bg-pink-300 dark:bg-pink-300 dark:text-pink-600 text-pink-900",
    }
  }),
  methods: {
    handleDelete(id){

    }
  }

}
</script>

<style>

</style>