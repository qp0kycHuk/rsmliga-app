import { Table } from '@admin/index'
import { ReportTableItem } from './List.Table.Item/Item'
import { TableHead } from './List.Table.Head'

interface Iprops {
  items: IReport[]
  className?: string
}

export function ListTable({ items, className }: Iprops) {
  return (
    <Table className={className} head={<TableHead />}>
      {items.map((item, index) => (
        <ReportTableItem key={index} item={item} />
      ))}
    </Table>
  )
}
