import { Button, Dialog, Menu, MenuButton, MenuItem, MenuItems } from '@features/ui'
import { Cell, CellTooltip, Row, Table } from '@admin/index'
import { useState } from 'react'
import { AdminSelect } from '@admin/components/AdminSelect'
import { useToggle } from '@hooks/useToggle'

const seasons = ['2021-2022', '2022-2023', '2023-2024']
const contests = [
  'Спартакиада по тэг-регби среди учащихся 5-6',
  'Спартакиада по тэг-регби среди учащихся 7-8',
  'Спартакиада по тэг-регби среди учащихся 9-10',
]

const areas = ['Железнодорожный', 'Судоходный', 'Воздушный']

export function Report() {
  const [season, setSeason] = useState(seasons[0])
  const [contest, setContest] = useState(contests[0])
  const [area, setArea] = useState(areas[0])

  const [isDialogOpen, toggleIsDialogOpen, openDialog, closeDialog] = useToggle(false)

  return (
    <div>
      <div className="mb-5 text-3xl font-bold">Отчеты</div>

      <div className="flex items-center gap-10 mb-6">
        <AdminSelect label="Сезон" value={season} items={seasons} onChange={setSeason} />
        <AdminSelect label="Соревнование" value={contest} items={contests} onChange={setContest} />
        <AdminSelect
          label="Муниципальный район или город"
          value={area}
          items={areas}
          onChange={setArea}
        />

        <Button variant="text" className="ml-auto" onClick={openDialog}>
          Создать отчет
        </Button>
      </div>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} className="container p-10">
        Создать отчет Модалка
      </Dialog>

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
