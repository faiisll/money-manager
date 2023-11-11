<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg dark:border-0 border">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            <slot v-if="slot.hasOwnProperty('tableTitle')" name="tableTitle" :value="title" ></slot>
            <span v-else>{{ title }}</span>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <template v-for="row in fields" :key="row.key">
                    <th v-if="slot.hasOwnProperty(`head(${row.key})`)"  scope="col" class="px-6 py-3">
                        <slot
                        :name="`head(${row.key})`"
                        :value="row.hasOwnProperty('title') ? row.title : row.key"
                        :item="row"
                        >
                            {{ row.hasOwnProperty('title') ? row.title : row.key }}
                        </slot>
                    </th>
                    <th v-else scope="col" class="px-6 py-3">
                        {{ row.hasOwnProperty('title') ? row.title : row.key }}
                    </th>
                </template>
            </tr>
        </thead>
        <tbody>
            
            <tr v-for="(row, index) in data" :key="'row-'+index" class="bg-white border-b transition-all dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:bg-gray-100">
                <template v-for="cell in fields" :key="`cell-${cell.key}${index}`">
                    <th @click="handleClickCell(row)" v-if="slot.hasOwnProperty(`cell(${cell.key})`)" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <slot
                        :name="`cell(${cell.key})`"
                        :value="row[cell.key]"
                        :item="row" >
                        {{ row[cell.key] }}
                        </slot>
                    </th>
                    <th @click="handleClickCell(row)" v-else scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ row[cell.key] }}
                    </th>
                </template>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import { useSlots } from 'vue'
export default {
    setup(){
        const slot = useSlots()

        return {
            slot
        }

    },
    props: {
        title: {
            type: String,
            default: "Table"
        },
        fields: {
            type: Array
        },
        data: {
            type: Array
        }
    },
    methods: {
        handleClickCell(e){
            // console.log(e, "clicked");
            this.$emit('clickCell', e)
        }
    }

}
</script>

<style>

</style>