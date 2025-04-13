import type { VacancyListResponse } from "~/types/vacancy"

export const useVacancyList = () => {
  const runtimeConfig = useRuntimeConfig()

  const url = `${runtimeConfig.public.apiBaseUrl}/v1/vacancies/`
  return useFetch<VacancyListResponse>(url, {
    method: "GET",
    credentials: "include",
  })
}
