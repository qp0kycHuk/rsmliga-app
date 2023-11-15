import { rootApi } from '@admin/service/api'
import { useQuery } from 'react-query'

export async function fetchStatistic({
  id = '',
}: IParams): Promise<IListResponse<StatisticTournier>> {
  const { data } = await rootApi.get<IListResponse<StatisticTournier>>('/statistics_handler.php', {
    params: {
      action: 'get_judge_statistic',
      judge_card_id: id,
    },
  })

  return data
}

export function useFetchStatistic(params: IParams) {
  return useQuery(['delegates-statistic', params], fetchStatistic.bind(null, params), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
}

interface IParams {
  id: EntityId
}

export async function fetchStatisticDetail({
  delegateId = '',
  tourneyId = '',
}: IDetailParams): Promise<IListResponse<StatisticGame>> {
  const { data } = await rootApi.get<IListResponse<StatisticGame>>('/statistics_handler.php', {
    params: {
      action: 'get_judge_seazon_statistic',
      judge_card_id: delegateId,
      turnier: tourneyId,
    },
  })

  return data
}

export function useFetchStatisticDetail(params: IDetailParams) {
  return useQuery(['delegates-statistic-detail', params], fetchStatisticDetail.bind(null, params), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
}

interface IDetailParams {
  delegateId: EntityId
  tourneyId: EntityId
}
