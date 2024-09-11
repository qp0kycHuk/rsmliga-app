import { Cell } from '@admin/components/Table/Cell'
import { Row } from '@admin/components/Table/Row'
import { useUserAccess } from '@admin/hooks/useUserAccess'
import { adminEditGroups } from '../../const'

export function TableHead() {
  const { isAccess: isAdminAccess } = useUserAccess(adminEditGroups)
  return (
    <Row className="text-xs sm:text-sm font-medium">
      <Cell head>Сезон</Cell>
      <Cell head>Соревнование</Cell>
      <Cell head>Этап</Cell>
      <Cell head>Город/Район/Конференция</Cell>
      <Cell head>Место проведения</Cell>
      <Cell head>Дата проведения</Cell>
      <Cell head>Отчет</Cell>
      {isAdminAccess && <Cell head className="print:hidden"></Cell>}
    </Row>
  )
}
