import { rootApi } from '@admin/service/api'
import { REPORT_PER_PAGE } from '../const'
import { useQuery } from 'react-query'

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

export async function upsertReport(data: IReport) {
  const formData = new FormData()

  formData.append('id', data.id as string)
  formData.append('action', 'edit')
  formData.append('comment', data.comment)
  formData.append('location', data.location)

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

  return await rootApi.post('/reports_handler.php', formData)
}

export function useFetchReports(params: IFetchParams) {
  return useQuery([REPORTS_KEY, params], fetchReports.bind(null, params), {
    refetchOnWindowFocus: false,
  })
}

interface IFetchResponse extends IListResponse<IReport> {
  NavPageCount: number
}
