import { AdminSelect } from '@admin/components/AdminSelect'
import { CirclePlusIcon } from '@assets/icons/fill'
import { Dialog, Button } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { Suspense, useState } from 'react'
import { DelegateEdit } from '../DelegateEdit/DelegateEdit'
import { useDelegateListContext } from './List.Context'
import { Search } from './List.Search'
import { Seasons } from './List.Filter.Seasons'
import { Tournaments } from './List.Filter.Tournaments'
import { Stages } from './List.Filter.Stages'

export function Filter() {
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)

  return (
    <>
      <div className="flex items-center gap-10 mb-6 ">
        <Seasons />
        <Tournaments />
        <Stages />

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
