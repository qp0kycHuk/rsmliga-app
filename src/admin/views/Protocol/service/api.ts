import { rootApi } from '@admin/service/api'
import { AxiosRequestConfig } from 'axios'
import { useQuery } from 'react-query'

export async function fetchProtocol(
  { id = '' }: IParams,
  config?: AxiosRequestConfig<any>
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
