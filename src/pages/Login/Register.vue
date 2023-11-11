<template>
    <div class="w-full h-full py-28 flex justify-center items-center">
        <div class="lg:w-2/3 lg:max-w-xl md:w-4/5 sm:w-full md:max-w-lg sm:max-w-md py-2 lg:px-10 md:px-10 px-10 bg-white shadow-md rounded-xl dark:bg-neutral-800 border border-emerald-200 dark:border-emerald-800">
            <div class="pt-20">
                <h1 class="font-semibold text-lg mb-2 dark:text-neutral-100">Sign up for free!</h1>
                <small class="text-neutral-500">Start managing your finance faster & better.</small>
            </div>
            <Form @submit="handleRegister" v-slot="{ values, errors }">
                <div class="w-full flex flex-col pt-10 gap-3 pb-20">
                    <div class="w-full flex flex-col gap-1">
                        <Input
                            rules="required"
                            prefixIcon="i-heroicons-envelope"
                            placeholder="Type your email here"
                            type="email"
                            v-model="regisForm.email"
                            name="email"
                            :state="errors.email ? 'danger' : 'default'"
                        />
                        
                        <div v-if="errors.email" class="flex gap-1 text-sm text-red-600 dark:text-red-400 items-center">
                            <span class="i-heroicons-information-circle"></span>
                            <small>{{ errors['email'] }}</small>
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-1">
                        <Input
                            rules="required"
                            prefixIcon="i-heroicons-user-circle"
                            placeholder="Type your name here"
                            type="text"
                            v-model="regisForm.name"
                            name="name"
                            :state="errors.name ? 'danger' : 'default'"
                        />
                        
                        <div v-if="errors.name" class="flex gap-1 text-sm text-red-600 dark:text-red-400 items-center">
                            <span class="i-heroicons-information-circle"></span>
                            <small>{{ errors['name'] }}</small>
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-1">
                        <Input
                            rules="required"
                            prefixIcon="i-heroicons-lock-closed"
                            :suffixIcon="!showPassword ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'"
                            placeholder="Type your password here"
                            :type="!showPassword ? `password` : `text`"
                            @onClickSuffix="showPassword = !showPassword"
                            v-model="regisForm.password"
                            name="password"
                            :state="errors.password ? 'danger' : 'default'"
                        />

                        <div v-if="errors.password" class="flex gap-1 text-sm text-red-600 dark:text-red-400 items-center">
                            <span class="i-heroicons-information-circle"></span>
                            <small>{{ errors['password'] }}</small>
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-1 mb-2">
                        <Input
                            rules="required|confirmed:@password"
                            prefixIcon="i-heroicons-lock-closed"
                            :suffixIcon="!showConfirmPassword ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'"
                            placeholder="Confirm your password here"
                            :type="!showConfirmPassword ? `password` : `text`"
                            @onClickSuffix="showConfirmPassword = !showConfirmPassword"
                            v-model="regisForm.confirmPassword"
                            name="confirmPassword"
                            :state="errors.confirmPassword ? 'danger' : 'default'"
                        />
                        <div v-if="errors.confirmPassword" class="flex gap-1 text-sm text-red-600 dark:text-red-400 items-center">
                            <span class="i-heroicons-information-circle"></span>
                            <small>{{ errors['confirmPassword'] }}</small>
                        </div>
                    </div>
                    <Button size="sm" type="submit" :disabled="authStore.loading">
                        {{authStore.loading ? "Submiting..." : "Submit"}}
                    </Button>
                    <div class="text-center text-xs pt-2">
                        <span class="text-neutral-400">Already have an account ? <span @click="moveLogin()" role="button" class="text-emerald-700">Login</span></span>
                    </div>



                </div>
            </Form>
      
        </div>

    </div>
</template>

<script>
import Input from '../../components/Input/index.vue';
import Button from "../../components/Button/index.vue"
import { Form} from 'vee-validate';
import { mapActions, mapStores } from 'pinia'
import { useAuthStore } from '@/store';
import { notify } from 'notiwind'
import { handlingError } from '@/helpers/response';
export default {
    components: {
        Input,
        Button,
        Form
    },
    data: () => ({
        showPassword: false,
        showConfirmPassword: false,
        password: "",
        regisForm: {
            email: "",
            password: "",
            confirmPassword: "",
            name: ""
        }
    }),
    computed: {
        ...mapStores(useAuthStore)

    },
    methods: {
        moveLogin(){
            this.$router.push("/auth")
        },
        handleRegister(){
            this.authStore.register(this.regisForm)
            .then(() => {
                this.$router.push("/auth")
                notify({
                    group: "success",
                    title: "Success",
                    text: "You're successfully registered."
                }, 5000)
                this.$router.push("/")
            }).catch(err => {
                console.log(err.response);
                if(err.response.data){
                    notify({
                        group: "danger",
                        title: "Failed",
                        text: handlingError(err.response.data)
                    }, 5000)
                    
                }else{
                    notify({
                        group: "danger",
                        title: "Failed",
                        text: err.message ? err.message : "Something whent wrong!"
                    }, 5000)

                }

            })
        }
    },
    beforeRouteLeave(){
        this.showPassword = false
    }

}
</script>

<style>

</style>