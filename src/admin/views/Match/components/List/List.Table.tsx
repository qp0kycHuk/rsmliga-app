import { Table, Row, Cell } from '@admin/index'
import { MatchTableItem } from './List.Table.Item/Item'
import { Empty } from '@admin/components/Empty'

interface Props {
  items: Match[]
  className?: string
}

export function ListTable({ items, className }: Props) {
  if (!items || items.length == 0) {
    return <Empty className={className} />
  }

  return (
    <Table className={className}>
      <Row className="text-xs  font-medium">
        <Cell head>№П</Cell>
        <Cell head>Соперники</Cell>
        <Cell head>Счет</Cell>
        <Cell head>Дата / Время</Cell>
        <Cell head>Судья</Cell>
        <Cell head>Место проведения</Cell>
        <Cell head>Этап</Cell>
        <Cell head>Стадия</Cell>
        <Cell head>Протокол</Cell>
        <Cell head>Видео</Cell>
        <Cell head>Статус</Cell>
        <Cell head></Cell>
        <Cell head>ID</Cell>
      </Row>
      {items.map((item) => (
        <MatchTableItem key={item.id} item={item} />
      ))}
    </Table>
  )
}
