<template>
    <div class="w-full p-4 rounded-xl" :class="`${bg}`">
      <div class="px-4 pt-3 pb-2 rounded-xl bg-white mb-4 w-fit">
          <span class="text-gray-900 text-xl" :class="{[icon]: true}"></span>
      </div>
      <div class="flex flex-col">
          <h3 class="text-sm font-semibold">
              <slot></slot>
          </h3>
          <h4 class="text-sm">{{ convertMoney(amount) }}</h4> 
      </div>
      <div class="ml-auto">
          
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
      props: {
          bg: {
              type: String,
              default: "bg-emerald-50"
          },
          icon: {
              type: String,
              default: "i-heroicons-shopping-bag"
          },
          amount: {
              type: Number,
              default: 120000
          }
      },
      methods: {
          convertMoney(amount = 1){
              if(amount < 1000) return amount
              let commaNumber = amount/1000
  
              return `${commaNumber} k`
          }
      }
  
  }
  </script>
  
  <style>
  
  </style>