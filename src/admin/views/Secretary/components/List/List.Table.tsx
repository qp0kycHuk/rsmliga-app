import { Cell, Row, Table } from '@admin/index'
import { Item } from './List.Item'
import { Empty } from '@admin/components/Empty'

interface ITableProps {
  items: ISecretary[]
  className?: string
}

export function ListTable({ items, className }: ITableProps) {
  if (!items || items.length == 0) {
    return <Empty className={className} />
  }

  return (
    <Table className={className}>
      <Row className="text-sm font-medium">
        <Cell head></Cell>
        <Cell head>ФИО</Cell>
        <Cell head>Категория</Cell>
        <Cell head>E-mail</Cell>
        <Cell head>Телефон</Cell>
        <Cell head>Соревнование</Cell>
        <Cell head>Город/район</Cell>
      </Row>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Table>
  )
}
