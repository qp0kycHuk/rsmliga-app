import { Cell, Row } from '@admin/index'

export function TableHead() {
  return (
    <>
      <Row className="text-xs sm:text-sm font-medium text-center">
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
      <Row className="text-xs sm:text-sm font-medium text-center">
        <Cell head>Главный судья</Cell>
        <Cell head>Помощник судьи</Cell>
        <Cell head>Делегат</Cell>
      </Row>
    </>
  )
}
