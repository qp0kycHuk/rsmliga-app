import { Table, Row, Cell } from '@admin/index'
import { ReportTableItem } from './List.Table.Item/Item'
import { Empty } from '@admin/components/Empty'
import { useUserAccess } from '@admin/hooks/useUserAccess'
import { adminEditGroups } from '../../const'

interface Iprops {
  items: IReport[]
  className?: string
}

export function ListTable({ items, className }: Iprops) {
  const { isAccess: isAdminAccess } = useUserAccess(adminEditGroups)

  if (!items || items.length == 0) {
    return <Empty className={className} />
  }

  return (
    <Table className={className}>
      <Row className="text-xs sm:text-sm font-medium">
        <Cell head>Сезон</Cell>
        <Cell head>Соревнование</Cell>
        <Cell head>Этап</Cell>
        <Cell head>Город/Район/Конференция</Cell>
        <Cell head>Место проведения</Cell>
        <Cell head>Дата проведения</Cell>
        <Cell head>Отчет</Cell>
        {isAdminAccess && <Cell head></Cell>}
      </Row>
      {items.map((item, index) => (
        <ReportTableItem key={index} item={item} />
      ))}
    </Table>
  )
}
