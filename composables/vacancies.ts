import type {
  VacancyListItem,
  VacancyListResponse,
  VacancyStatus,
} from "~/types/vacancy"

interface VacancyListRequestParams {
  take?: number
  skip?: number
  userIds?: number[]
  statuses?: VacancyStatus[]
}

export const useVacancyList = ({
  take,
  skip,
  userIds,
  statuses,
}: VacancyListRequestParams = {}) => {
  const runtimeConfig = useRuntimeConfig()

  const url = `${runtimeConfig.public.apiBaseUrl}/v1/vacancies/`
  return useFetch<VacancyListResponse>(url, {
    method: "GET",
    credentials: "include",
    query: { take, skip, user_ids: userIds, statuses },
  })
}

export const useVacancyDetail = (id: number) => {
  const runtimeConfig = useRuntimeConfig()

  const url = `${runtimeConfig.public.apiBaseUrl}/v1/vacancies/${id}/`
  return useFetch<VacancyListItem>(url, {
    method: "GET",
    credentials: "include",
  })
}
