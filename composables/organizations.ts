import type { OrganizationListResponse } from "~/types/organization"

export const useOrganizationList = () => {
  const runtimeConfig = useRuntimeConfig()

  const url = `${runtimeConfig.public.apiBaseUrl}/v1/organizations/`
  return useFetch<OrganizationListResponse>(url, {
    method: "GET",
    credentials: "include",
  })
}
