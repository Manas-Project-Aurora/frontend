import type { OrganizationListResponse, OrganizationListItem } from "~/types/organization"

interface OrganizationListRequestParams {
  take?: number
  skip?: number
}

export const useOrganizationList = ({
  take,
  skip,
}: OrganizationListRequestParams = {}) => {
  const runtimeConfig = useRuntimeConfig()

  const url = `${runtimeConfig.public.apiBaseUrl}/v1/organizations/`
  return useFetch<OrganizationListResponse>(url, {
    method: "GET",
    credentials: "include",
    query: { take, skip },
  })
}

export const useOrganizationDetail = (id: number) => {
  const runtimeConfig = useRuntimeConfig()

  const url = `${runtimeConfig.public.apiBaseUrl}/v1/organizations/${id}/`
  return useFetch<OrganizationListItem>(url, {
    method: "GET",
    credentials: "include",
  })
}
