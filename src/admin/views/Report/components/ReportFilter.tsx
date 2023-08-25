import { AdminSelect } from '@admin/components/AdminSelect'
import { Dialog, Button } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { useState } from 'react'

const seasons = ['2021-2022', '2022-2023', '2023-2024']
const contests = [
  'Спартакиада по тэг-регби среди учащихся 5-6',
  'Спартакиада по тэг-регби среди учащихся 7-8',
  'Спартакиада по тэг-регби среди учащихся 9-10',
]

const areas = ['Железнодорожный', 'Судоходный', 'Воздушный']

export function ReportFilter() {
  const [season, setSeason] = useState(seasons[0])
  const [contest, setContest] = useState(contests[0])
  const [area, setArea] = useState(areas[0])

  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)

  return (
    <>
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
    </>
  )
}
