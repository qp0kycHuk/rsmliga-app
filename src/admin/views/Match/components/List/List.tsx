import { Button, Dialog } from '@features/ui'
import { MatchContextProvider } from '../Context/Match.Context'
import { Filter } from '../Context/Match.Filter'
import { Pagination } from '../Context/Match.Pagination'
import { CirclePlusIcon } from '@assets/icons/fill'
import { Suspense } from 'react'
import { ProtocolEdit } from '../ProtocolEdit/ProtocolEdit'
import { useToggle } from '@hooks/useToggle'
import { MatchEdit } from '../MatchEdit/MatchEdit'

function ListInner() {
  const [isEditDialogOpen, , openEditDialog, closeEditDialog] = useToggle(true)

  return (
    <>
      <div className="mb-5 text-xl md:text-3xl font-bold">Матчи </div>
      <Filter>
        <Button variant="text" className="gap-3 font-semibold max-lg:mr-auto">
          <CirclePlusIcon className="text-2xl" />
          Добавить матч
        </Button>
      </Filter>

      <Pagination />

      <Dialog
        isOpen={isEditDialogOpen}
        onClose={closeEditDialog}
        className="container max-w-lg px-4 py-10 md:px-8"
      >
        <Suspense fallback="Loading...">
          <MatchEdit onCancel={closeEditDialog} />
        </Suspense>
      </Dialog>
    </>
  )
}

export function List() {
  return (
    <MatchContextProvider>
      <ListInner />
    </MatchContextProvider>
  )
}
