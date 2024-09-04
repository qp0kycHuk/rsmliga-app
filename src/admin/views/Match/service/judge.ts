import { rootApi } from '@admin/service/api'

export async function upsertJudge(data: UpsertJudgePayload) {
  const formData = new FormData()

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value as string)
  }

  return await rootApi.post<{ error?: string }>('/manager/matches/matches_handler.php', formData, {
    params: {
      action: 'add_judge',
    },
  })
}

type UpsertJudgePayload = {
  id: EntityId
  judge_id: string
}
