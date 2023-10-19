import { Table, Row, Cell } from '@admin/index'
import { ReportTableItem } from './List.Table.Item/Item'
import { Empty } from '@admin/components/Empty'
import { useUserAccess } from '@admin/hooks/useUserAccess'
import { adminEditGroups } from '../../const'

interface Iprops {
  items: IReport[]
  className?: string
}

export function ListTable({ items, className }: Iprops) {
  const { isAccess: isAdminAccess } = useUserAccess(adminEditGroups)

  if (!items || items.length == 0) {
    return <Empty className={className} />
  }

  return (
    <Table className={className}>
      <Row>
        <Cell head className="text-sm font-medium">
          Сезон
        </Cell>
        <Cell head className="text-sm font-medium">
          Соревнование
        </Cell>
        <Cell head className="text-sm font-medium">
          Этап
        </Cell>
        <Cell head className="text-sm font-medium">
          Город/Район/Конференция
        </Cell>
        <Cell head className="text-sm font-medium">
          Место проведения
        </Cell>
        <Cell head className="text-sm font-medium">
          Дата проведения
        </Cell>
        <Cell head className="text-sm font-medium">
          Отчет
        </Cell>
        {isAdminAccess && <Cell head></Cell>}
      </Row>
      {items.map((item, index) => (
        <ReportTableItem key={index} item={item} />
      ))}
    </Table>
  )
}
