import { rootApi } from '@admin/service/api'
import { REPORT_PER_PAGE } from '../const'
import { useQuery } from 'react-query'

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

export function useFetchReports(params: IFetchParams) {
  return useQuery(['reports', params], fetchReports.bind(null, params), {
    refetchOnWindowFocus: false,
  })
}

interface IFetchResponse extends IListResponse<IReport> {
  NavPageCount: number
}
