import { Table } from '@admin/index'
import { MatchTableItem } from './List.Table.Item/Item'
import { TableHead } from './List.Table.Head'

type Props = PropsWithClassName & {
  items: Match[]
}

export function ListTable({ items, className }: Props) {
  return (
    <Table className={className} head={<TableHead />}>
      {items.map((item) => (
        <MatchTableItem key={item.id} item={item} />
      ))}
    </Table>
  )
}
