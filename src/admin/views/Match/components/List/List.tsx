import { Button, Dialog } from '@features/ui'
import { MatchContextProvider, useMatchContext } from '../Context/Match.Context'
import { Filter } from '../Context/Match.Filter'
import { Pagination } from '../Context/Match.Pagination'
import { CirclePlusIcon } from '@assets/icons/fill'
import { ListTable } from './List.Table'
import { Tabs } from './List.Tabs'
import { Suspense } from 'react'
import { MatchEdit } from '../MatchEdit/MatchEdit'
import { useToggle } from '@hooks/useToggle'
import { ListLayout } from '@admin/components/ListLayout'

function ListInner() {
  const { items, loading } = useMatchContext()
  const [isEditDialogOpen, , openEditDialog, closeEditDialog] = useToggle(false)

  return (
    <>
      <div className="mb-5 text-xl md:text-3xl font-bold">Матчи </div>
      <Tabs />
      <Filter>
        <Button
          variant="text"
          className="gap-3 font-semibold max-lg:mr-auto"
          onClick={openEditDialog}
        >
          <CirclePlusIcon className="text-2xl" />
          Добавить матч
        </Button>
      </Filter>

      <ListLayout items={items} isFetching={loading}>
        <ListTable items={items} />
      </ListLayout>

      <Pagination />

      <Dialog
        isOpen={isEditDialogOpen}
        onClose={closeEditDialog}
        className="container max-w-xl px-4 py-10 md:px-8"
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
