<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-center text-gray-700">Login</h2>
      <form @submit.prevent="handleLogin" class="mt-4">
        <InputField
          id="email"
          label="Email"
          type="email"
          v-model="email"
          :error="emailError"
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          v-model="password"
          :error="passwordError"
        />
        <InputField
          id="password-confirm"
          label="Confirm the password"
          type="password"
          v-model="confirm_password"
          :error="errors.confirm_password"
        />
        <button
          type="submit"
          text
          class="w-full mt-4 px-4 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-500 hover:cursor-pointer"
        >
          Login
        </button>
      </form>
      <p class="mt-4 text-center text-gray-600">
        Already have an account?
        <router-link to="login" class="text-blue-500 hover:underline"
          >Login here</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from "vee-validate"
import { toTypedSchema } from "@vee-validate/zod"
import { z } from "zod"

// Define Zod schema for login
const loginSchema = toTypedSchema(
  z
    .object({
      email: z.string().email("Неправильный почта"),
      password: z.string().min(6, "Длина пароля не должно быть меньше шести"),
      confirm_password: z
        .string()
        .min(6, "Длина подтверждение пароля не должно быть меньше шести"),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "Пароли не совподают",
      path: ["confirm_password"],
    })
)

type LoginFormValues = z.infer<typeof loginSchema>

const { handleSubmit, errors } = useForm<LoginFormValues>({
  validationSchema: loginSchema,
})

const { value: email, errorMessage: emailError } = useField<string>("email")
const { value: password, errorMessage: passwordError } =
  useField<string>("password")
const { value: confirm_password } = useField("confirm_password")

const handleLogin = handleSubmit((values: LoginFormValues) => {
  console.log("Login data:", values)
  // HANDLE LOGIN LOGIC (API CALL!!!!)
})
</script>
