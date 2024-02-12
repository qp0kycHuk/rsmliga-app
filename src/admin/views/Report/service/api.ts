import { rootApi } from '@admin/service/api'
import { REPORT_PER_PAGE } from '../const'
import { useQuery } from 'react-query'
import { fetchReportDocuments } from './documents'
import { dateToSQLFormatString } from '@utils/helpers/dates'
import { AxiosRequestConfig } from 'axios'

export const REPORTS_KEY = 'reports'

export async function fetchReports(
  params: IFetchParams,
  config?: AxiosRequestConfig<any>
): Promise<IFetchResponse> {
  const {
    page = 1,
    itemsPerPage = REPORT_PER_PAGE,
    search = '',
    sezon = '',
    turnier = '',
    location = '',
    status = '',
  } = params
  const { data } = await rootApi.get<IFetchResponse>('/reports_handler.php', {
    params: {
      action: 'getlist',
      PAGEN_1: page,
      nPageSize: itemsPerPage,
      search,
      sezon,
      turnier,
      status,
      location: location || null,
    },
    ...config,
  })

  return data
}

export async function upsertReport(data: IEditableReport) {
  const formData = new FormData()

  if (data.id) {
    formData.append('id', data.id as string)
    formData.append('action', 'edit')
  } else {
    formData.append('action', 'save')
    formData.append('season_id', (data.season_id as string) || '')
    formData.append('competition_id', (data.competition_id as string) || '')
    formData.append('stage_id', (data.stage_id as string) || '')
    formData.append('area_id', (data.area_id as string) || '')
  }

  formData.append('comment', data.comment || '')
  formData.append('location', data.location || '')
  formData.append('area', (data.area_id as string) || '')
  formData.append('status', (data.newStatus as string) || '')

  if (data.date) {
    formData.append('date', dateToSQLFormatString(new Date(data.date)) || '')
  }

  data.group_photos?.forEach((item) => {
    if (item.file) {
      formData.append('group_photos[]', item.file)
    } else if (item.path) {
      formData.append('group_photos[]', item.path)
    }
  })

  data.competition_photo?.forEach((item) => {
    if (item.file) {
      formData.append('competition_photo[]', item.file)
    } else if (item.path) {
      formData.append('competition_photo[]', item.path)
    }
  })

  data.teams_photo?.forEach((item) => {
    formData.append('teams_photo_name[]', item.description)

    if (item.file) {
      formData.append('teams_photo[]', item.file)
    } else if (item.path) {
      formData.append('teams_photo[]', item.path)
    }
  })

  const schemaData = await fetchReportDocuments()

  schemaData.items.map((schema) => {
    data.documents?.['doc_' + schema.id]?.map((item) => {
      if (item.file) {
        formData.append('doc_' + schema.id + (schema.multi ? '[]' : ''), item.file)
      } else if (item.path) {
        formData.append('doc_' + schema.id, item.path)
      }

      if (schema.multi) {
        formData.append('doc_' + schema.id + '_numbers[]', item.number || '')
      }
    })
  })

  data.file_del?.forEach((fid) => {
    formData.append('file_del[]', fid as string)
  })

  return await rootApi.post<IItemResponse<IReport>>('/reports_handler.php', formData)
}

export async function deleteReport(id: EntityId) {
  const { data } = await rootApi.get<IFetchResponse>('/reports_handler.php', {
    params: {
      action: 'delete',
      id,
    },
  })

  return data
}

export function useFetchReports(params: IFetchParams) {
  return useQuery([REPORTS_KEY, params], ({ signal }) => fetchReports(params, { signal }), {
    refetchOnWindowFocus: false,
  })
}

interface IFetchResponse extends IListResponse<IReport> {
  NavPageCount: number
}
