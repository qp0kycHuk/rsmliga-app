import { Suspense, lazy } from 'react'
import { Button, Dialog } from '@features/ui'
import { CirclePlusIcon } from '@assets/icons/fill'
import { useToggle } from '@hooks/useToggle'
import { useUserAccess } from '@admin/hooks/useUserAccess'
import {
  SecretariesContextProvider,
  useSecretariesContext,
} from '../SecretaryContext/Secretary.Context'
import { Filter } from '../SecretaryContext/Secretary.Filter'
import { Pagination } from '../SecretaryContext/Secretary.Pagination'
import { ListTable } from './List.Table'
import { canEditGroups } from '../../const'
import { ListLayout } from '@admin/components/ListLayout'

const SecretaryEdit = lazy(() =>
  import('../SecretaryEdit/SecretaryEdit').then((m) => ({ default: m.SecretaryEdit }))
)

function ListInner() {
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)
  const { items, loading } = useSecretariesContext()
  const { isAccess } = useUserAccess(canEditGroups)

  return (
    <>
      <div className="mb-5 text-xl sm:text-3xl font-bold">Общий список секретарей</div>
      <Filter>
        {isAccess && (
          <Button
            variant="text"
            onClick={openDialog}
            className="gap-3 font-semibold max-lg:mr-auto"
          >
            <CirclePlusIcon className="text-2xl" />
            Добавить секретаря
          </Button>
        )}
      </Filter>

      <ListLayout items={items} isFetching={loading}>
        <ListTable items={items} />
      </ListLayout>

      <div className="mt-8"></div>
      <Pagination />

      {isAccess && (
        <Dialog
          isOpen={isDialogOpen}
          onClose={closeDialog}
          className="container max-w-6xl px-4 py-10 md:p-10"
        >
          <Suspense fallback="Loading...">
            <SecretaryEdit onCancel={closeDialog} />
          </Suspense>
        </Dialog>
      )}
    </>
  )
}

export function List() {
  return (
    <SecretariesContextProvider>
      <ListInner />
    </SecretariesContextProvider>
  )
}
