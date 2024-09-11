import { AdminSelect } from '@admin/components/AdminSelect'
import { Empty } from '@admin/components/Empty'
import { Table, Row, Cell } from '@admin/index'
import { useFetchSeasons } from '@admin/service/seasons'
import { useFetchStages } from '@admin/service/stages'
import { useFetchTournaments } from '@admin/service/tournaments'
import { useFetchStatisticDetail } from '@admin/views/Delegate/service/statistic'

import { useState } from 'react'
import { DetailItem } from './Statistic.Detail.Item'

interface IProps {
  item: StatisticTournier
  delegate: IDelegate
}

export function Detail({ item, delegate }: IProps) {
  const [stageId, setStageId] = useState<EntityId>()
  const { data: seasonsData } = useFetchSeasons()
  const { data: tourneyData } = useFetchTournaments()
  const { data: stageData } = useFetchStages()

  const { data, isLoading } = useFetchStatisticDetail({
    delegateId: delegate.id,
    tourneyId: item.id,
  })

  const filteredItems =
    (stageId ? data?.items.filter((game) => game.stage == stageId) : data?.items) || []

  return (
    <>
      <div className="flex mb-3">
        <div className="text-2xl font-semibold">Статистика</div>
        <div className="text-right ml-auto">
          <div className="text-sm font-bold">
            {delegate.surname} {delegate.name} {delegate.patronymic}
          </div>
          <div className="text-sm max-w-md">
            <span className="font-medium">Соревнование:</span> {tourneyData?.entites[item.id].NAME}
          </div>
          <div className="text-sm max-w-md">
            <span className="font-medium">Сезон:</span> {seasonsData?.entites[item.sezon_id].NAME}
          </div>
        </div>
      </div>

      <div className="flex mb-6">
        <AdminSelect
          itemsClassName="!max-h-80 overflow-auto"
          label="Этап"
          placeholder="Любой"
          value={stageId}
          items={stageData?.ids || []}
          onChange={(value) => setStageId(value)}
          renderItem={(id) => stageData?.entites[id]?.VALUE || ''}
        />
      </div>

      <Table>
        <Row className="text-sm text-center font-medium">
          <Cell head>№</Cell>
          <Cell head>Роль</Cell>
          <Cell head>Дата</Cell>
          <Cell head>Время</Cell>
          <Cell head>Место</Cell>
          <Cell head>Этап</Cell>
          <Cell head>Стадия матча</Cell>
          <Cell head className="w-36">
            Команда А <br /> (хозяева)
          </Cell>
          <Cell head className="w-36">
            Команда А <br /> (гости)
          </Cell>
          <Cell head>Счет матча</Cell>
          <Cell head>Пред / Уд</Cell>
        </Row>
        {filteredItems.map((game, i) => (
          <DetailItem index={i + 1} key={game.match_id} game={game} />
        ))}

        {!isLoading && filteredItems.length == 0 && (
          <Row>
            <Cell colSpan={100}>
              <Empty />
            </Cell>
          </Row>
        )}
      </Table>
    </>
  )
}
