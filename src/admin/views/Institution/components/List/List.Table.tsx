import { Cell, Row, Table } from '@admin/index'
import { Item } from './List.Item'
import { Empty } from '@admin/components/Empty'

interface ITableProps {
  items: IInstitution[]
  className?: string
}

export function ListTable({ items, className }: ITableProps) {
  if (!items || items.length == 0) {
    return <Empty className={className} />
  }

  return (
    <Table className={className}>
      <Row className="text-xs sm:text-sm font-medium">
        <Cell head>Краткое наименование школы</Cell>
        <Cell head>Полное наименование образовательного учреждения</Cell>
        <Cell head>Конференция</Cell>
        <Cell head>Город\район</Cell>
        <Cell head>Тип образовательного учреждения</Cell>
      </Row>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Table>
  )
}
