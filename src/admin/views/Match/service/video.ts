import { rootApi } from '@admin/service/api'

export async function upsertVideo(data: UpsertVideoPayload) {
  const formData = new FormData()

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value as string)
  }

  return await rootApi.post<{ error?: string }>('/manager/matches/matches_handler.php', formData, {
    params: {
      action: 'edit_video',
    },
  })
}

export async function deleteVideo(data: DeleteVideoPayload) {
  const formData = new FormData()

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value as string)
  }

  return await rootApi.post<{ error?: string }>('/manager/matches/matches_handler.php', formData, {
    params: {
      action: 'delete_video',
    },
  })
}
