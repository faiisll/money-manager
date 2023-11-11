<template>
    <div class="w-full h-full">
        <PageHeader desc="Coming soon...">
            Setting
        </PageHeader>

        <Table :fields="config" :data="data">
            <template #head(a)="{ value, item }"><p>Replaced</p></template>
            <template #cell(a)="{ value, item }"><p>Replaced {{ value }} {{ item }}</p></template>
        </Table>
        
    </div>
</template>

<script>
import PageHeader from '@/components/Header/PageHeader.vue';
export default {
    components: {
        PageHeader
    },
    data: () => ({
        config: [
            {key: "a", title: "Head A"},
            {key: "b", title: "Head B"},
            {key: "action", title: "Action"},
        ],
        data: [
            {a: "tess 1", b: "tess 1 b"},
            {a: "tess 2"},

        ]
    })

}
</script>

<style>

</style>