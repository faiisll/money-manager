<template>
  <Listbox v-model="selectedCategory">
    <ListboxButton>{{ selectedCategory }}</ListboxButton>
    <ListboxOptions>
      <ListboxOption
        v-for="category in categories"
        :key="category.id"
        :value="category.id"
      >
        {{ category.name }}
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>

<script>
import { useCategoryStore } from '@/store'
import {mapState} from "pinia"
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
export default {
    components: {
        Listbox,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
    },
    data: () => ({
        selectedCategory: null,
    }),
    computed: {
        ...mapState(useCategoryStore, ['categories'])
    }

}
</script>

<style>

</style>