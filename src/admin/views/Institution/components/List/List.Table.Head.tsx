import { Cell, Row } from '@admin/index'

export function TableHead() {
  return (
    <Row className="text-xs sm:text-sm font-medium">
      <Cell head>Краткое наименование школы</Cell>
      <Cell head>Полное наименование образовательного учреждения</Cell>
      <Cell head>Конференция</Cell>
      <Cell head>Город\район</Cell>
      <Cell head>Тип образовательного учреждения</Cell>
    </Row>
  )
}
