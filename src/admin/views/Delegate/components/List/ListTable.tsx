import { Table, Row, Cell } from '@admin/index'
import { ListTableItem } from './ListTableItem'

interface IListTableProps {
  items: IDelegate[]
}

export function ListTable({ items }: IListTableProps) {
  return (
    <Table>
      <Row>
        <Cell head className="text-sm font-medium text-center">
          №
        </Cell>
        <Cell head className="text-sm font-medium">
          ID
        </Cell>
        <Cell head className="text-sm font-medium">
          ФИО
        </Cell>
        <Cell head className="text-sm font-medium">
          Соревнование
        </Cell>
        <Cell head className="text-sm font-medium">
          Категория
        </Cell>
        <Cell head className="text-sm font-medium">
          Населенный пункт
        </Cell>
        <Cell head className="text-sm font-medium">
          Дата рождения
        </Cell>
        <Cell head className="text-sm font-medium">
          Матчей проведено
        </Cell>
        <Cell head className="text-sm font-medium">
          {/* for button */}
        </Cell>
      </Row>
      {items.map((item, index) => (
        <ListTableItem key={item.id} item={item} index={index} />
      ))}
    </Table>
  )
}
