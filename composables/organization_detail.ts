import type { OrganizationListItem } from "~/types/organization";

interface OrganizationDetailRequestParams {
  id: number;
}

export const useOrganizationDetail = ({ id }: OrganizationDetailRequestParams) => {
  const runtimeConfig = useRuntimeConfig();

  const url = `${runtimeConfig.public.apiBaseUrl}/v1/organization/${id}`;
  return useFetch<OrganizationListItem>(url, {
    method: "GET",
    credentials: "include",
  });
};
