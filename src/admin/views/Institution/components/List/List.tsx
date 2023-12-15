import { Suspense, lazy } from 'react'
import { Button, Dialog } from '@features/ui'
import { CirclePlusIcon } from '@assets/icons/fill'
import { useToggle } from '@hooks/useToggle'
import { useUserAccess } from '@admin/hooks/useUserAccess'

import { ListTable } from './List.Table'
import { Filter } from '../List.Context/Context.Filter'
import { Pagination } from '../List.Context/Context.Pagination'
import { InstitutionsContextProvider, useInstitutionsContext } from '../List.Context/Context'

function ListInner() {
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)
  const { items, loading } = useInstitutionsContext()

  return (
    <>
      <div className="mb-5 text-xl sm:text-3xl font-bold">Справочник учебных заведений</div>
      <Filter></Filter>

      <ListTable items={items} className={loading ? 'opacity-40 pointer-events-none' : ''} />

      <div className="mt-8"></div>
      <Pagination />
    </>
  )
}

export function List() {
  return (
    <InstitutionsContextProvider>
      <ListInner />
    </InstitutionsContextProvider>
  )
}
