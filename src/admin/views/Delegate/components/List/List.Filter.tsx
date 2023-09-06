import { AdminSelect } from '@admin/components/AdminSelect'
import { CirclePlusIcon } from '@assets/icons/fill'
import { Dialog, Button } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { Suspense, useState } from 'react'
import { DelegateEdit } from '../DelegateEdit/DelegateEdit'
import { useDelegateListContext } from './List.Context'
import { Search } from './List.Search'
import { useFetchSeasons } from '@admin/service/seasons'
import { useFetchStages } from '@admin/service/stages'
import { useFetchTournaments } from '@admin/service/tournaments'

const seasons = ['Любой', '2021-2022', '2022-2023', '2023-2024']
const contests = [
  'Любое',
  'Спартакиада по тэг-регби среди учащихся 5-6',
  'Спартакиада по тэг-регби среди учащихся 7-8',
  'Спартакиада по тэг-регби среди учащихся 9-10',
]

const steps = ['Любой', 'Муниципальный', 'Железнодорожный', 'Судоходный', 'Воздушный']

export function Filter() {
  const [season, setSeason] = useState(seasons[0])
  const [contest, setContest] = useState(contests[0])
  const [step, setStep] = useState(steps[0])

  const { data: seasonsData } = useFetchSeasons()
  const { data: stagesData } = useFetchStages()
  const { data: tournamentsData } = useFetchTournaments()

  console.log(tournamentsData)

  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)

  return (
    <>
      <div className="flex items-center gap-10 mb-6">
        <AdminSelect label="Сезон" value={season} items={seasons} onChange={setSeason} />
        <AdminSelect label="Соревнование" value={contest} items={contests} onChange={setContest} />
        <AdminSelect label="Этап" value={step} items={steps} onChange={setStep} />

        <Search />

        <Button variant="text" onClick={openDialog} className="gap-3 font-semibold">
          <CirclePlusIcon className="text-2xl" />
          Добавить судью
        </Button>
      </div>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} className="container p-10">
        <Suspense fallback="Loading...">
          <DelegateEdit />
        </Suspense>
      </Dialog>
    </>
  )
}
