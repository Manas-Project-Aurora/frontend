import type { VacancyListItem } from "~/types/vacancy";

interface VacancyDetailRequestParams {
    id: number
}

export const useVacancyDetail = ({id} : VacancyDetailRequestParams) => {
    const runtimeConfig = useRuntimeConfig();

    const url = `${runtimeConfig.public.apiBaseUrl}/v1/vacancies/${id}/`
    return useFetch<VacancyListItem>(url, {
        method: "GET",
        credentials: "include",
    })
}