import { Suspense } from 'react'
import { Button, Dialog } from '@features/ui'
import { CirclePlusIcon } from '@assets/icons/fill'
import { useToggle } from '@hooks/useToggle'
import { Filter } from '../ReportContext/Report.Filter'
import { Pagination } from '../ReportContext/Report.Pagination'
import { ReportContextProvider, useReportContext } from '../ReportContext/Report.Context'
import { ListTable } from './List.Table'

function ListInner() {
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)
  const { loading, items } = useReportContext()

  return (
    <>
      <div className="mb-5 text-3xl font-bold">Список</div>
      <Filter />

      {loading ? 'loading...' : <ListTable items={items} />}

      <Pagination />
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
