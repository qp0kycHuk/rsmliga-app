import { Table, Row, Cell } from '@admin/index'
import { ReportTableItem } from './List.Table.Item'
import { Empty } from '@admin/components/Empty'

interface Iprops {
  items: IReport[]
  className?: string
}

export function ListTable({ items, className }: Iprops) {
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
      </Row>
      {items.map((item, index) => (
        <ReportTableItem key={index} item={item} />
      ))}
    </Table>
  )
}
