import { Cell, Row, Table } from '@admin/index'

interface IAnaliticTableProps {
  items: IDelegate[]
}

export function AnaliticTable({ items }: IAnaliticTableProps) {
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
          <Cell>1</Cell>
          <Cell className="text-left">
            {delegate.surname} {delegate.name} {delegate.patronymic}
          </Cell>
          <Cell>{delegate.birthdate}</Cell>
          <Cell>{delegate.location}</Cell>
          <Cell>{delegate.category}</Cell>
          <Cell>{delegate.roles.main}</Cell>
          <Cell>{delegate.roles.support}</Cell>
          <Cell>{delegate.roles.delegate}</Cell>
          <Cell>{delegate.matchesCount}</Cell>
        </Row>
      ))}
    </Table>
  )
}
