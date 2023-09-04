import { AdminSelect } from '@admin/components/AdminSelect'
import { SearchIcon } from '@assets/icons/fill'
import { Dialog, Button, Input } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { useState } from 'react'

const seasons = ['Любой', '2021-2022', '2022-2023', '2023-2024']
const contests = [
  'Любое',
  'Спартакиада по тэг-регби среди учащихся 5-6',
  'Спартакиада по тэг-регби среди учащихся 7-8',
  'Спартакиада по тэг-регби среди учащихся 9-10',
]

const steps = ['Любой', 'Муниципальный', 'Железнодорожный', 'Судоходный', 'Воздушный']

export function ListFilter() {
  const [season, setSeason] = useState(seasons[0])
  const [contest, setContest] = useState(contests[0])
  const [step, setStep] = useState(steps[0])

  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)

  return (
    <>
      <div className="flex items-center gap-10 mb-6">
        <AdminSelect label="Сезон" value={season} items={seasons} onChange={setSeason} />
        <AdminSelect label="Соревнование" value={contest} items={contests} onChange={setContest} />
        <AdminSelect label="Этап" value={step} items={steps} onChange={setStep} />

        <div className="relative w-64 ml-auto">
          <Input placeholder="Поиск по фамилии" className="w-full" size="sm" />
          <Button className="absolute right-1 top-1" icon variant="none" size="xs">
            <SearchIcon />
          </Button>
        </div>

        <Button variant="text" onClick={openDialog}>
          Добавить судью
        </Button>
      </div>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} className="container p-10">
        Добавить судью Модалка
      </Dialog>
    </>
  )
}
