import { Table } from '@admin/index'
import { Item } from './List.Item'
import { TableHead } from './List.Table.Head'

interface ITableProps {
  items: ISecretary[]
  className?: string
}

export function ListTable({ items, className }: ITableProps) {
  return (
    <Table className={className} head={<TableHead />}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Table>
  )
}
