import type { ApiResponsePagePagination } from "./common"

export enum VacancyStatus {
  ACTIVE = "active",
  PENDING = "pending",
  SUSPENDED = "suspended",
}

export enum VacancyType {
  FULL_TIME = "full_time",
  PART_TIME = "part_time",
  INTERNSHIP = "internship",
  REMOTE = "remote",
  PROJECT_BASED = "project_based",
}

export enum VacancySalaryType {
  MONTHLY = "monthly",
  HOURLY = "hourly",
  PROJECT_BASED = "project_based",
}

export interface VacancyListItem {
  id: number
  title: string
  description: string
  organization_id: number
  organization_name: string
  salary_from: number | null
  salary_to: number | null
  status: VacancyStatus
  type: VacancyType
  salary_type: VacancySalaryType
  created_at: string
  updated_at: string
}

export interface VacancyListResponse {
  vacancies: VacancyListItem[]
  pagination: ApiResponsePagePagination
}
