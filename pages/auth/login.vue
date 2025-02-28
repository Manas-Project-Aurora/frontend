<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-center text-gray-700">Login</h2>
            <form @submit.prevent="handleLogin" class="mt-4">
                <InputField id="email" label="Email" type="email" v-model="email" :error="emailError" />
                <InputField id="password" label="Password" type="password" v-model="password" :error="passwordError" />
                <button type="submit" text class="w-full mt-4 px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-500 hover:cursor-pointer">Login</button>
            </form>
            <p class="mt-4 text-center text-gray-600">
                Don't you have an account
                <router-link to="/auth/register" class="text-blue-500 hover:underline">Register here</router-link>

            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useForm, useField} from "vee-validate";
    import { toTypedSchema }from "@vee-validate/zod";
    import { z } from "zod"; 

    // Desine type for login schema of ZOD
    const loginSchema = toTypedSchema(
    z.object({
        email: z.string().email('Invalid email').min(1, 'Email is required'),
        password: z.string().min(6, 'Password must be at least 6 characters').min(1, 'Password is required'),
      })
    );

    // Infer Typescript types from Zod schema
    type LoginFormValues = z.infer<typeof loginSchema>;
    
    // Initialize VeeValidate form
    const { handleSubmit } = useForm<LoginFormValues>({validationSchema: loginSchema})

    // Define fields with TypeSript types
    const { value: email, errorMessage: emailError } = useField<string>("email");
    const { value: password, errorMessage: passwordError } = useField<string>("password");

    // From submit function with strict typing
    const handleLogin = handleSubmit((values: LoginFormValues) => {
        console.log("Login data:", values)
        
        // HANDLE LOGIN LOGIC (API CALL!!!!)
    })
</script>