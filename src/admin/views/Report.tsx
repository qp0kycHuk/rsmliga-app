import { Button } from '@features/ui'
import { Tooltip } from '@lib/Tooltip'
import { Cell, CellTooltip, Row, Table } from '@admin/index'

export function Report() {
  return (
    <div>
      <div className="mb-5 text-3xl font-bold">Отчеты</div>

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
        <Row>
          <Cell className="text-sm">2022-2023</Cell>
          <Cell className="w-[264px] max-w-[264px] text-sm">
            <CellTooltip>
              Спартакиада по тэг-регби среди учащихся 5-6 классови так далее и тому подобное
            </CellTooltip>
          </Cell>
          <Cell className="text-sm">Муниципальный</Cell>
          <Cell className="text-sm">г. Геленджик</Cell>
          <Cell className="w-[228px] max-w-[228px] text-sm">
            <CellTooltip>
              ГБУ РО СШОР №5 (Первощихся 5-6 классов и так далее и тому подобное)
            </CellTooltip>
          </Cell>
          <Cell className="text-sm">12.04.2023</Cell>
          <Cell className="text-sm">Загружен</Cell>
        </Row>
      </Table>
    </div>
  )
}
