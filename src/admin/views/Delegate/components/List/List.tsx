import { Suspense } from 'react'
import { Button, Dialog } from '@features/ui'
import { CirclePlusIcon } from '@assets/icons/fill'
import { useToggle } from '@hooks/useToggle'
import { ListTable } from './List.Table'
import {
  DelegatesContextProvider,
  useDelegatesContext,
} from '../DelegatesContext/Delegates.Context'
import { Pagination } from '../DelegatesContext/Delegates.Pagination'
import { Filter } from '../DelegatesContext/Delegates.Filter'
import { DelegateEdit } from '../DelegateEdit/DelegateEdit'

function ListInner() {
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)
  const { delegates } = useDelegatesContext()

  return (
    <>
      <div className="mb-5 text-3xl font-bold">Список</div>
      <Filter>
        <Button variant="text" onClick={openDialog} className="gap-3 font-semibold">
          <CirclePlusIcon className="text-2xl" />
          Добавить судью
        </Button>
      </Filter>
      <ListTable items={delegates} />

      <Pagination />

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} className="container p-10">
        <Suspense fallback="Loading...">
          <DelegateEdit />
        </Suspense>
      </Dialog>
    </>
  )
}

export function List() {
  return (
    <DelegatesContextProvider>
      <ListInner />
    </DelegatesContextProvider>
  )
}
