export enum CommunityResourceColor {
  BLUE = "blue",
  LIGHT_BLUE = "light-blue",
  GREEN = "green",
  VIOLET = "violet",
  RED = "red",
  CONTRAST = "contrast",
}

export interface CommunityResource {
  id: number
  name: string
  group_id: number
  group_name: string
  url: string
  color: CommunityResourceColor
  created_at: string
  updated_at: string
}

export interface CommunityResourceGroup {
  id: number
  name: string
  resources: CommunityResource[]
}
