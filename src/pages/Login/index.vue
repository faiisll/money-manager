<template>
    <div class="w-full h-full py-28 flex justify-center items-center">
        <div class="lg:w-2/3 lg:max-w-xl md:w-4/5 sm:w-full md:max-w-lg sm:max-w-md py-2 lg:px-20 md:px-10 px-10 bg-white shadow-md rounded-xl dark:bg-neutral-800 border border-emerald-200 dark:border-emerald-800">
            <div class="pt-20">
                <h1 class="font-semibold text-lg mb-2 dark:text-neutral-100">Welcome Back!</h1>
                <small class="text-neutral-500">Start managing your finance faster & better.</small>
            </div>
            <Form @submit="login" v-slot="{ values, errors }">
                <div class="w-full h-48 flex" v-if="authStore.loading">
                    <Spinner />
                </div>
                <div v-show="!authStore.loading" class="w-full flex flex-col pt-10 gap-3 pb-20">
                    <div class="w-full flex flex-col gap-1">
                        <Input
                            name="email"
                            prefixIcon="i-heroicons-envelope"
                            placeholder="Type your email here"
                            type="email"
                            v-model="loginForm.email"
                            rules="required"
                            :state="errors.email ? 'danger' : 'default'"
                        />
                        <div v-if="errors.email" class="flex gap-1 text-sm text-red-600 dark:text-red-400 items-center">
                            <span class="i-heroicons-information-circle"></span>
                            <small>{{ errors['email'] }}</small>
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-1">
                        <Input
                            name="password"
                            rules="required"
                            prefixIcon="i-heroicons-lock-closed"
                            :suffixIcon="!showPassword ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'"
                            placeholder="Type your password here"
                            :type="!showPassword ? `password` : `text`"
                            @onClickSuffix="showPassword = !showPassword"
                            v-model="loginForm.password"
                            :state="errors.password ? 'danger' : 'default'"
                        />
                        <div v-if="errors.password" class="flex gap-1 text-sm text-red-600 dark:text-red-400 items-center">
                            <span class="i-heroicons-information-circle"></span>
                            <small>{{ errors['password'] }}</small>
                        </div>

                    </div>

                    <div class="flex justify-end">
                        <a href="" class="text-xs text-green-700">Forgot password ?</a>
                    </div>
                    <Button type="submit" size="sm">
                        {{authStore.loading ? 'Loading' : 'Login'}}
                    </Button>
                    <div class="text-center text-xs pt-2">
                        <span class="text-neutral-400">Don't you have an account ? <span @click="moveRegister()" role="button" class="text-emerald-700">Sign Up</span></span>
                    </div>
                    
                </div>
            </Form>
      
        </div>

    </div>
</template>

<script>
import { notify } from 'notiwind'
import { Form, Field } from 'vee-validate';
import Input from '../../components/Input/index.vue';
import Button from "../../components/Button/index.vue"
import Spinner from "@/components/Spinner/index.vue"
import { mapActions, mapStores } from 'pinia'
import { useAuthStore } from '@/store';
import { handlingError } from '@/helpers/response';
export default {
    components: {
        Input,
        Button,
        Form,
        Spinner
    },
    data: () => ({
        showPassword: false,
        password: "",
        loginForm: {
            email: "",
            password: ""
        },
    }),
    computed: {
        ...mapStores(useAuthStore)

    },
    methods: {
        moveRegister(){
            this.$router.push("/auth/register")
        },
        login(e){
            this.authStore.login(this.loginForm).then((res) => {
                notify({
                    group: "success",
                    title: "Success",
                    text: "You're logged in."
                }, 5000)
                this.$router.push("/")
            }).catch(err => {
                notify({
                    group: "danger",
                    title: "Failed",
                    text: err.data ? handlingError(err.data) : "Something whent wrong!"
                }, 5000)
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