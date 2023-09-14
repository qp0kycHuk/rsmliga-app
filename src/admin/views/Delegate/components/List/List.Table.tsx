import { Table, Row, Cell } from '@admin/index'
import { ListItem } from './List.Item'

interface IListTableProps {
  items: IDelegate[]
  className?: string
}

export function ListTable({ items, className }: IListTableProps) {
  if (!items || items.length == 0) {
    return <div className={className}>Здесь ничего нет</div>
  }

  return (
    <Table className={className}>
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
      {items?.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </Table>
  )
}
