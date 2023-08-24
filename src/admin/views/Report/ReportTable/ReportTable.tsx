import { Table, Row, Cell, CellTooltip } from '@admin/index'
import { ReportTableItem } from './ReportTableItem'

const items: IItem[] = [
  {
    season: '2022-2023',
    contest: 'Спартакиада по тэг-регби среди учащихся 5-6 классови так далее и тому подобное',
    step: 'Муниципальный',
    area: 'г. Геленджик',
    place: 'ГБУ РО СШОР №5 (Первощихся 5-6 классов и так далее и тому подобное)',
    date: '12.04.2023',
  },
  {
    season: '2023-2024',
    contest: 'Спартакиада по тэг-регби среди учащихся 5-6 классови так далее и тому подобное',
    step: 'Зональный',
    area: 'г. Краснодар',
    place: 'ГБУ РО СШОР №5 (Первощихся 5-6 классов и так далее и тому подобное)',
    date: '22.04.2023',
  },
  {
    season: '2024-2025',
    contest: 'Спартакиада по тэг-регби среди учащихся 5-6 классови так далее и тому подобное',
    step: 'Федеральный',
    area: 'г. Сочи',
    place: 'ГБУ РО СШОР №5 (Первощихся 5-6 классов и так далее и тому подобное)',
    date: '12.04.2034',
  },
  {
    season: '2026-2027',
    contest: 'Спартакиада по тэг-регби среди учащихся 5-6 классови так далее и тому подобное',
    step: 'Межгалактический',
    area: 'г. Майкоп',
    place: 'ГБУ РО СШОР №5 (Первощихся 5-6 классов и так далее и тому подобное)',
    date: '9.12.2023',
  },
]

export function ReportTable() {
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
      {items.map((item, index) => (
        <ReportTableItem key={index} item={item} />
      ))}
    </Table>
  )
}

export interface IItem {
  season: string
  contest: string
  step: string
  area: string
  place: string
  date: string
}
