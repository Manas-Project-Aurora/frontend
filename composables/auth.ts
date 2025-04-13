import type { User } from "~/types/user"

export const useAuth = () => {
  const runtimeConfig = useRuntimeConfig()

  const user = useState<User | null>(() => null)
  const isLoggedIn = computed((): boolean => user.value !== null)

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const responseData = await $fetch<User>(
        `${runtimeConfig.public.apiBaseUrl}/v1/auth/token/`,
        {
          method: "POST",
          body: {
            email,
            password,
          },
          credentials: "include",
        }
      )
      user.value = responseData
    } catch (error) {
      return false
    }
    return true
  }

  const register = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const responseData = await $fetch<User>(
        `${runtimeConfig.public.apiBaseUrl}/v1/auth/register/`,
        {
          method: "POST",
          body: {
            email,
            password,
          },
          credentials: "include",
        }
      )
      user.value = responseData
    } catch (error) {
      return false
    }
    return true
  }

  const logout = async (): Promise<boolean> => {
    try {
      await $fetch(`${runtimeConfig.public.apiBaseUrl}/v1/auth/logout/`, {
        method: "POST",
        credentials: "include",
      })
      user.value = null
    } catch (error) {
      return false
    }
    return true
  }

  const getMe = async (): Promise<User | null> => {
    try {
      const user = await $fetch<User>(
        `${runtimeConfig.public.apiBaseUrl}/v1/auth/me/`,
        {
          method: "GET",
          credentials: "include",
        }
      )
      return user
    } catch (error) {
      return null
    }
  }
  const refreshToken = async (): Promise<boolean> => {
    try {
      const responseData = await $fetch<User>(
        `${runtimeConfig.public.apiBaseUrl}/v1/auth/token/refresh/`,
        {
          method: "POST",
          credentials: "include",
        }
      )
      user.value = responseData
    } catch (error) {
      return false
    }
    return true
  }

  return {
    user,
    login,
    register,
    logout,
    getMe,
    refreshToken,
    isLoggedIn,
  }
}
