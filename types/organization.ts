import type { ApiResponsePagePagination } from "./common"

export enum OrganizationContactType {
  EMAIL = "email",
  PHONE = "phone",
  TELEGRAM = "telegram",
  WEBSITE = "website",
}

export interface OrganizationContact {
  type: OrganizationContactType
  value: string
  created_at: string
  updated_at: string
}

export interface OrganizationListItem {
  id: number
  name: string
  description: string | null
  logo_url: string | null
  created_at: string
  updated_at: string
  contacts: OrganizationContact[]
  vacancy_count: number
  event_count: number
  video_count: number
}

export interface OrganizationListResponse {
  organizations: OrganizationListItem[]
  pagination: ApiResponsePagePagination
}
