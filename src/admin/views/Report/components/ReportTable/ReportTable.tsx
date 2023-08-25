import { Table, Row, Cell } from '@admin/index'
import { ReportTableItem } from './ReportTableItem'
import { useEffect, useState } from 'react'
import { api } from '../../service/api'

export function ReportTable() {
  const [contests, setContests] = useState<IContest[]>([])

  useEffect(() => {
    api()
      .fetchContests()
      .then((items) => {
        setContests(items)
      })
  }, [])

  return (
    <Table>
      <Row>
        <Cell head className="text-sm font-medium">
          Сезон
        </Cell>
        <Cell head className="text-sm font-medium">
          Соревнование
        </Cell>
        <Cell head className="text-sm font-medium">
          Этап
        </Cell>
        <Cell head className="text-sm font-medium">
          Город/Район/Конференция
        </Cell>
        <Cell head className="text-sm font-medium">
          Место проведения
        </Cell>
        <Cell head className="text-sm font-medium">
          Дата проведения
        </Cell>
        <Cell head className="text-sm font-medium">
          Отчет
        </Cell>
      </Row>
      {contests.map((item, index) => (
        <ReportTableItem key={index} item={item} />
      ))}
    </Table>
  )
}
