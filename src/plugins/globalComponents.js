import { createApp } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import Button from "@/components/Button/index.vue"
import Input from "@/components/Input/index.vue"
import { Form, Field } from 'vee-validate';
import ConfirmDelete from "@/components/Modal/ConfirmDelete.vue"
import Table from "@/components/Table/index.vue"
import Spinner from "@/components/Spinner/miniSpinner.vue"

const app = createApp();

export const registerComponents = (app) => {
    app.component('VueDatePicker', VueDatePicker);
    app.component('Button', Button);
    app.component('ConfirmDelete', ConfirmDelete);
    app.component('Table', Table);
    app.component('Input', Input);
    app.component('Form', Form);
    app.component('Field', Field);
    app.component('Spinner', Spinner);
}

export default app;