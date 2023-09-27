import { Cell, Row, Table } from '@admin/index'
import { useFetchCities } from '@admin/service/cities'
import { useFetchCategories } from '../../service/categories'
import { Empty } from '@admin/components/Empty'

interface IAnaliticTableProps {
  items: IDelegate[]
  className?: string
}

export function AnaliticTable({ items, className }: IAnaliticTableProps) {
  const { data: citiesData } = useFetchCities()
  const { data: categoriesData } = useFetchCategories()

  if (!items || items.length == 0) {
    return <Empty className={className} />
  }

  return (
    <Table>
      <Row className="text-sm font-medium text-center">
        <Cell head rowSpan={2}>
          №
        </Cell>
        <Cell head rowSpan={2}>
          ФИО
        </Cell>
        <Cell head rowSpan={2}>
          Дата рождения
        </Cell>
        <Cell head rowSpan={2}>
          Населенный пункт
        </Cell>
        <Cell head rowSpan={2}>
          Категория
        </Cell>
        <Cell head colSpan={3}>
          Роль
        </Cell>
        <Cell head rowSpan={2}>
          Всего <br /> матчей
        </Cell>
      </Row>
      <Row className="text-sm font-medium text-center">
        <Cell head>Главный судья</Cell>
        <Cell head>Помощник судьи</Cell>
        <Cell head>Делегат</Cell>
      </Row>
      {items.map((delegate) => (
        <Row key={delegate.id} className="text-sm text-center">
          <Cell>{delegate.number}</Cell>
          <Cell className="text-left">
            {delegate.surname} {delegate.name} {delegate.patronymic}
          </Cell>
          <Cell>{new Date(delegate.birthdate).toLocaleDateString()}</Cell>
          <Cell>{citiesData?.entites[delegate.location]?.NAME || '-'}</Cell>
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
