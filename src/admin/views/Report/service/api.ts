import { rootApi } from '@admin/service/api'
import { REPORT_PER_PAGE } from '../const'
import { useQuery } from 'react-query'
import { fetchReportDocuments } from './documents'
import { dateToSQLFormatString } from '@utils/helpers/dates'
import { fetchReportStatuses } from './statuses'

export const REPORTS_KEY = 'reports'

export async function fetchReports({
  page = 1,
  itemsPerPage = REPORT_PER_PAGE,
  search = '',
  sezon = '',
  turnier = '',
  stage = '',
}: IFetchParams): Promise<IFetchResponse> {
  const { data } = await rootApi.get<IFetchResponse>('/reports_handler.php', {
    params: {
      action: 'getlist',
      PAGEN_1: page,
      nPageSize: itemsPerPage,
      search,
      sezon,
      turnier,
      stage,
    },
  })

  return data
}

export async function upsertReport(data: IEditableReport) {
  const formData = new FormData()

  formData.append('id', data.id as string)
  formData.append('action', 'edit')
  formData.append('comment', data.comment || '')
  formData.append('location', data.location || '')
  formData.append('area', (data.area_id as string) || '')

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

  const statusesData = await fetchReportStatuses()

  const checkingId = statusesData.items.find(({ XML_ID }) => XML_ID == 'checking')?.ID
  formData.append('status', (checkingId as string) || '')

  return await rootApi.post<IItemResponse<IReport>>('/reports_handler.php', formData)
}

export function useFetchReports(params: IFetchParams) {
  return useQuery([REPORTS_KEY, params], fetchReports.bind(null, params), {
    refetchOnWindowFocus: false,
  })
}

interface IFetchResponse extends IListResponse<IReport> {
  NavPageCount: number
}
