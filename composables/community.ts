import type { CommunityResource } from "~/types/community"

export const useCommunityResources = () => {
  const runtimeConfig = useRuntimeConfig()
  const url = `${runtimeConfig.public.apiBaseUrl}/v1/community/resources/`

  const communityResources = ref<CommunityResource[]>([])

  const fetchResources = async () => {
    const { community_resources } = await $fetch<{
      community_resources: CommunityResource[]
    }>(url)
    communityResources.value = community_resources
  }

  const groupIdToCommunityResources = computed(() => {
    const groupIdToCommunityResources = new Map<number, CommunityResource[]>()
    if (!communityResources.value) return groupIdToCommunityResources
    for (const communityResource of communityResources.value) {
      const groupId = communityResource.group_id
      if (!groupIdToCommunityResources.has(groupId)) {
        groupIdToCommunityResources.set(groupId, [])
      }
      groupIdToCommunityResources.get(groupId)!.push(communityResource)
    }
    return groupIdToCommunityResources
  })

  const groupIdToName = computed(() => {
    const groupIdToName = new Map<number, string>()
    if (!communityResources.value) return groupIdToName
    for (const communityResource of communityResources.value) {
      const groupId = communityResource.group_id
      if (!groupIdToName.has(groupId)) {
        groupIdToName.set(groupId, communityResource.group_name)
      }
    }
    return groupIdToName
  })

  const groupedCommunityResources = computed(() => {
    return Array.from(groupIdToCommunityResources.value.entries()).map(
      ([groupId, communityResources]) => ({
        id: groupId,
        name: groupIdToName.value.get(groupId)!,
        communityResources,
      })
    )
  })

  return {
    groupedCommunityResources,
    groupIdToCommunityResources,
    groupIdToName,
    communityResources,
    fetchResources,
  }
}
