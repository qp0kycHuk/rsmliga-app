import { AdminSelect } from '@admin/components/AdminSelect'
import { Empty } from '@admin/components/Empty'
import { Cell, Row, Table } from '@admin/index'
import { useFetchSeasons } from '@admin/service/seasons'
import { useState } from 'react'
import { useFetchStatistic } from '../../../service/statistic'
import { Item } from './Statistic.Item'

interface IStatisticProps {
  delegate: IDelegate
}

export function Statistic({ delegate }: IStatisticProps) {
  const [seasonId, setSeasonId] = useState<EntityId>()
  const { data } = useFetchStatistic({
    id: delegate.id,
  })

  const { data: seasonsData, isLoading } = useFetchSeasons()

  const filteredItems =
    (seasonId ? data?.items.filter((item) => item.sezon_id == seasonId) : data?.items) || []

  return (
    <>
      <div className="flex mb-6">
        <AdminSelect
          itemsClassName="max-h-80 overflow-auto"
          label="Сезон"
          placeholder="Любой"
          value={seasonId}
          items={seasonsData?.ids || []}
          onChange={(value) => setSeasonId(value)}
          renderItem={(id) => seasonsData?.entites[id]?.NAME || ''}
        />
      </div>

      <Table>
        <Row className="text-sm font-medium text-center">
          <Cell head className="w-28">
            Сезон
          </Cell>
          <Cell head className="w-[280px] max-w-[280px]">
            Соревнование
          </Cell>
          <Cell head className="w-28">
            Этап
          </Cell>
          <Cell head className="w-28">
            Кол-во игр <br /> (всего)
          </Cell>
          <Cell head className="w-28">
            Судья
          </Cell>
          <Cell head className="w-28">
            Помощник судьи
          </Cell>
          <Cell head className="w-28">
            Делегат
          </Cell>
          <Cell head>
            Предупреждения/ <br /> Удаления
          </Cell>
        </Row>
        {filteredItems.map((item) => (
          <Item delegate={delegate} key={item.id} item={item} />
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
