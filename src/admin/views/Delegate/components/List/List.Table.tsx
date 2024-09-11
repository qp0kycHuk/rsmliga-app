import { Table } from '@admin/index'
import { ListItem } from './List.Item'
import { TableHead } from './List.Table.Head'

interface IListTableProps {
  items: IDelegate[]
  className?: string
}

export function ListTable({ items, className }: IListTableProps) {
  return (
    <Table className={className} head={<TableHead />}>
      {items?.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </Table>
  )
}
