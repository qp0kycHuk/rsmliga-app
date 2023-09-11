import { Table, Row, Cell } from '@admin/index'
import { ReportTableItem } from './List.Table.Item'

interface Iprops {
  items: IReport[]
}

export function ListTable({ items }: Iprops) {
  return (
    <Table>
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
