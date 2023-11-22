import { Filter } from '../ReportContext/Report.Filter'
import { Pagination } from '../ReportContext/Report.Pagination'
import { ReportContextProvider, useReportContext } from '../ReportContext/Report.Context'
import { ListTable } from './List.Table'
import { CirclePlusIcon } from '@assets/icons/fill'
import { useUserAccess } from '@admin/hooks/useUserAccess'
import { canEditGroups } from '../../const'
import { Button, Dialog } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { Suspense } from 'react'
import { ReportEdit } from '../ReportEdit/ReportEdit'

function ListInner() {
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)
  const { loading, items } = useReportContext()
  const { isAccess } = useUserAccess(canEditGroups)

  return (
    <>
      <div className="mb-5 text-xl sm:text-3xl font-bold">Отчеты</div>
      <Filter>
        {isAccess && (
          <Button
            variant="text"
            onClick={openDialog}
            className="gap-3 font-semibold lg:ml-auto max-lg:mr-auto"
          >
            <CirclePlusIcon className="text-2xl" />
            Добавить отчет
          </Button>
        )}
      </Filter>
      <ListTable items={items} className={loading ? 'opacity-40 pointer-events-none' : ''} />

      <Pagination />

      <Dialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        className="container max-w-6xl px-4 py-10 md:p-10"
      >
        <Suspense fallback="Loading...">
          <ReportEdit onCancel={closeDialog} />
        </Suspense>
      </Dialog>
    </>
  )
}

export function List() {
  return (
    <ReportContextProvider>
      <ListInner />
    </ReportContextProvider>
  )
}
