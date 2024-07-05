import { rootApi } from '@admin/service/api'
import { useQuery } from 'react-query'

export async function fetchProtocol({ id = '' }: IParams): Promise<IItemResponse<Protocol>> {
  const { data } = await rootApi.get<IItemResponse<Protocol>>('/protocol_handler.php', {
    params: {
      action: 'get_protocol',
      match_id: id,
    },
  })

  return data
}

export function useFetchProtocol(params: IParams) {
  return useQuery(['match-protocol', params], fetchProtocol.bind(null, params), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
}

interface IParams {
  id: EntityId
}
