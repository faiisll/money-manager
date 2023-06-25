<template>
    <div
    class="flex bg-neutral-100 dark:bg-neutral-700 px-3 py-2 rounded-lg w-full items-center relative"
    :class="{
        ['border border-red-600 dark:border-red-500'] : state === 'danger',
        ['border border-green-600']: state === 'success'
    }">
        <div @click="clickOutside" class="w-full h-full absolute z-0 cursor-text"></div>
        <div v-if="prefixIcon" class="p-2 bg-white dark:bg-neutral-300 rounded-lg shrink-0 z-10">
            <span class="flex text-emerald-600" :class="{[prefixIcon] : Boolean(prefixIcon)}"></span>
        </div>
        <div class="grow px-2 z-10">
            <Field v-model="input" :rules="rules" @input="$emit('update:modelValue', $event.target.value)" :name="name" v-slot="{ field }">
                <input
                ref="mainInput"
                :type="type"
                v-bind="field"
                :placeholder="placeholder"
                class="w-full text-neutral-700 dark:text-neutral-200 bg-transparent focus:outline-none text-sm" />
            </Field>
        </div>
        <div v-if="suffixIcon" role="button" class="p-2 shrink-0 z-10" @click="handleClickSuffix">
            <span class="flex text-emerald-600" :class="{[suffixIcon]: Boolean(suffixIcon)}"></span>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { Field } from 'vee-validate';
import { defineRule } from 'vee-validate';

defineRule('required', value => {
  if (!value || !value.length) {
    return 'This field is required';
  }

  return true;
});

defineRule('confirmed', (value, [target]) => {
  if (value === target) {
    return true;
  }

  return 'Passwords must match';
});
export default {
    components: {
        Field
    },
    setup() {
        const input = ref("");
        return { input };
    },
    props: {
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            default: ""
        },
        prefixIcon: {
            type: String
        },
        suffixIcon:{
            type: String
        },
        type: {
            type: String,
            default: "text"
        },
        errors: {
            type: Array,
            default: () => ([])
        },
        state : {
            type: String,
            default: "default",
            validator(value) {
                // The value must match one of these strings
                return ['success', 'default', 'danger'].includes(value)
            }
        },
        rules: {
            type: [String, Object]
        }
    },
    methods: {
        handleClickSuffix(){
            this.$emit('onClickSuffix')
        },
        clickOutside(){
            let input = this.$refs.mainInput
            input.focus()
            // console.log(input);

        }
    }

}
</script>

<style>

</style>