import { Suspense, lazy } from 'react'
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
import { canEditGroups } from '../../const'
import { useUserAccess } from '@admin/hooks/useUserAccess'

const DelegateEdit = lazy(() =>
  import('../DelegateEdit/DelegateEdit').then((m) => ({ default: m.DelegateEdit }))
)

function ListInner() {
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)
  const { delegates, loading } = useDelegatesContext()
  const { isAccess } = useUserAccess(canEditGroups)

  return (
    <>
      <div className="mb-5 text-3xl font-bold">Список судей и делегатов </div>
      <Filter>
        {isAccess && (
          <Button variant="text" onClick={openDialog} className="gap-3 font-semibold">
            <CirclePlusIcon className="text-2xl" />
            Добавить судью
          </Button>
        )}
      </Filter>
      {loading ? 'loading...' : null}
      <ListTable items={delegates} className={loading ? 'hidden' : ''} />

      <div className="mt-8"></div>
      <Pagination />

      {isAccess && (
        <Dialog isOpen={isDialogOpen} onClose={closeDialog} className="container p-10">
          <Suspense fallback="Loading...">
            <DelegateEdit onCancel={closeDialog} />
          </Suspense>
        </Dialog>
      )}
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
