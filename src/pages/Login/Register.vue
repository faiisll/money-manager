<template>
    <div class="w-full h-full py-28 flex justify-center items-center">
        <div class="w-1/3 py-2 px-40 bg-white shadow-md rounded-xl dark:bg-neutral-800 border border-emerald-200 dark:border-emerald-800">
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
            confirmPassword: ""
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
                this.$router.push("/")
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