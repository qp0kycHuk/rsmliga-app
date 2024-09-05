import { rootApi } from '@admin/service/api'
import { dateToSQLFormatString } from '@utils/helpers/dates'
import { AxiosRequestConfig } from 'axios'
import { useQuery } from 'react-query'

export async function fetchProtocol(
  { id = '' }: IParams,
  config?: AxiosRequestConfig<unknown>
): Promise<IItemResponse<Protocol>> {
  const { data } = await rootApi.get<IItemResponse<Protocol>>('/protocol_handler.php', {
    params: {
      action: 'get_protocol',
      match_id: id,
    },
    ...config,
  })

  return data
}

export function useFetchProtocol(params: IParams) {
  return useQuery(['match-protocol', params], ({ signal }) => fetchProtocol(params, { signal }), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    cacheTime: 0,
  })
}

interface IParams {
  id: EntityId
}

export async function upsertProtocol(data: EditableProtocol, matchId: EntityId) {
  console.log('upsertProtocol')

  const formData = new FormData()

  formData.append('match_id', matchId.toString() || '')
  formData.append('games', data.competition_id?.toString() || '')
  formData.append('stage', data.stage_id?.toString() || '')
  formData.append('conference', data.conference_id?.toString() || '')
  formData.append('tour', data.tour?.toString() || '')
  formData.append('division', data.division?.toString() || '')
  formData.append('city', data.area_id?.toString() || '')
  formData.append('location', data.location || '')
  formData.append('date', dateToSQLFormatString(new Date(data.date || '')))
  formData.append('time', data.time || '')
  formData.append('team_color_palitra[]', data.team_1_info?.color || '')
  formData.append('team_color_palitra[]', data.team_2_info?.color || '')
  formData.append('judge', data.judge_id?.toString() || '')
  formData.append('delegate', data.delegate_id?.toString() || '')
  formData.append('assistant_1', data.helper_1_id?.toString() || '')
  formData.append('assistant_2', data.helper_2_id?.toString() || '')
  formData.append('score_first_time[]', (data.score_first_half?.team_1 as string) || '0')
  formData.append('score_first_time[]', (data.score_first_half?.team_2 as string) || '0')
  formData.append('score[]', (data.total_score?.team_1 as string) || '0')
  formData.append('score[]', (data.total_score?.team_2 as string) || '0')
  formData.append('score_end_game[]', (data.score_overtime?.team_1 as string) || '0')
  formData.append('score_end_game[]', (data.score_overtime?.team_2 as string) || '0')
  formData.append('other_remarks', data.other_remarks || '')

  // попытки
  for (const member of data.team_1_info?.members || []) {
    formData.append('team1_UF_TRY[' + member.id + ']', member.try.toString())
  }

  for (const member of data.team_2_info?.members || []) {
    formData.append('team2_UF_TRY[' + member.id + ']', member.try.toString())
  }

  // предупреждения
  for (const warning of data.warnings || []) {
    formData.append('warnUF_NAME[]', warning.name)
    formData.append('warnUF_TEAM[]', warning.team)
    formData.append('warnUF_TEXT[]', warning.text)
  }

  // удаления
  for (const item of data.deletes || []) {
    formData.append('remUF_NAME[]', item.name)
    formData.append('remUF_TEAM[]', item.team)
    formData.append('remUF_TEXT[]', item.text)
  }

  // травмы
  for (const trauma of data.trauma || []) {
    formData.append('trUF_NAME[]', trauma.name)
    formData.append('trUF_TIMING[]', trauma.time)
    formData.append('trUF_DIAGNOSIS[]', trauma.text)
    formData.append('trUF_HELP[]', trauma.help)
  }

  return await rootApi.post<{ id: EntityId; error?: string }>('/protocol_handler.php', formData, {
    params: {
      action: 'add_protocol',
    },
  })
}

export async function deleteProtocol(data: DeleteProtocolayload) {
  const formData = new FormData()

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value as string)
  }

  return await rootApi.post<{ error?: string }>('/protocol_handler.php', formData, {
    params: {
      action: 'delete_protocol',
    },
  })
}