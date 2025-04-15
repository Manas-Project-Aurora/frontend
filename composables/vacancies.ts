import type { VacancyListResponse } from "~/types/vacancy"

interface VacancyListRequestParams {
  take?: number
  skip?: number
  userIds?: number[]
}

export const useVacancyList = ({
  take,
  skip,
  userIds,
}: VacancyListRequestParams = {}) => {
  const runtimeConfig = useRuntimeConfig()

  const url = `${runtimeConfig.public.apiBaseUrl}/v1/vacancies/`
  return useFetch<VacancyListResponse>(url, {
    method: "GET",
    credentials: "include",
    query: { take, skip, user_ids: userIds },
  })
}
