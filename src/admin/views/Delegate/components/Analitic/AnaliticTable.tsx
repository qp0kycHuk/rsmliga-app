import { Cell, Row, Table } from '@admin/index'
import { useFetchCities } from '@admin/service/cities'
import { useFetchCategories } from '../../service/categories'
import { TableHead } from './AnaliticTable.Head'

interface IAnaliticTableProps {
  items: IDelegate[]
  className?: string
}

export function AnaliticTable({ items, className }: IAnaliticTableProps) {
  const { data: citiesData } = useFetchCities()
  const { data: categoriesData } = useFetchCategories()

  return (
    <Table className={className} head={<TableHead />}>
      {items.map((delegate) => (
        <Row key={delegate.id} className="text-xs sm:text-sm text-center">
          <Cell>{delegate.number}</Cell>
          <Cell className="text-left">
            {delegate.surname} {delegate.name} {delegate.patronymic}
          </Cell>
          <Cell>{new Date(delegate.birthdate).toLocaleDateString()}</Cell>
          <Cell>{citiesData?.entites[delegate.location]?.VALUE || '-'}</Cell>
          <Cell>{categoriesData?.entites[delegate.category]?.VALUE || '-'}</Cell>
          <Cell>{delegate.analytics?.main_judge || '-'}</Cell>
          <Cell>{delegate.analytics?.judge_helper || '-'}</Cell>
          <Cell>{delegate.analytics?.delegate || '-'}</Cell>
          <Cell>{delegate.analytics?.total || '-'}</Cell>
        </Row>
      ))}
    </Table>
  )
}
