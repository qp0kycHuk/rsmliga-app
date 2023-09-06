import { DELEGATES_PER_PAGE } from '../const'
import { rootApi } from '@admin/service/api'

export async function fetchDelegates({
  page = 1,
  itemsPerPage = DELEGATES_PER_PAGE,
  search = '',
  sezon = '',
  turnier = '',
  stage = '',
}: IFetchParams): Promise<IFetchResponse> {
  const { data } = await rootApi.get<IFetchResponse>('/list_of_judges.php', {
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
