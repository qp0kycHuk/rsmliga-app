import { Row, Cell } from '@admin/index'

export function TableHead() {
  return (
    <Row className="text-xs sm:text-sm font-medium">
      <Cell head></Cell>
      <Cell head>ФИО</Cell>
      <Cell head>Категория</Cell>
      <Cell head>E-mail</Cell>
      <Cell head>Телефон</Cell>
      <Cell head className="print:hidden">
        Соревнование
      </Cell>
      <Cell head className="print:hidden">
        Город/район
      </Cell>
    </Row>
  )
}
