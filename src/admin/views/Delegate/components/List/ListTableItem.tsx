import { Row, Cell } from '@admin/index'
import { SettingsIcon } from '@assets/icons/fill'
import { Button, Dialog } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { Suspense, lazy } from 'react'
import { DelegateContests } from '../DelegateContests'

const DelegateEdit = lazy(() =>
  import('../DelegateEdit/DelegateEdit').then((m) => ({ default: m.DelegateEdit }))
)

interface IListTableItemProps {
  item: IDelegate
}

export function ListTableItem({ item }: IListTableItemProps) {
  const [isEditDialogOpen, , openEditDialog, closeEditDialog] = useToggle(false)
  const [isContestsDialogOpen, , openContestsDialog, closeContestsDialog] = useToggle(false)

  return (
    <Row>
      <Cell className="text-sm text-center w-12">{item.number}</Cell>
      <Cell className="text-sm max-w-[90px] w-[90px] truncate">{item.id}</Cell>
      <Cell className="text-sm w-80">
        {item.surname} {item.name} {item.patronymic}
      </Cell>
      <Cell className="text-sm font-medium w-[228px] max-w-[228px]">
        <Button size="xs" onClick={openContestsDialog}>
          Открыть
        </Button>
        <Dialog
          isOpen={isContestsDialogOpen}
          onClose={closeContestsDialog}
          className="max-w-4xl p-10"
        >
          <DelegateContests delegate={item} />
          <Button className="mt-6" onClick={closeContestsDialog}>
            Закрыть
          </Button>
        </Dialog>
      </Cell>
      <Cell className="text-sm ">{item.category}</Cell>
      <Cell className="text-sm ">{item.location}</Cell>
      <Cell className="text-sm ">{item.birthdate}</Cell>
      <Cell className="text-sm ">{item.matchesCount}</Cell>
      <Cell className="text-sm  w-max">
        <Button size={null} icon className="btn-[28px]" color="gray-light" onClick={openEditDialog}>
          <SettingsIcon className="text-primary text-lg" />
        </Button>

        <Dialog isOpen={isEditDialogOpen} onClose={closeEditDialog} className="container p-10">
          <Suspense fallback="Loading...">
            <DelegateEdit delegate={item} />
          </Suspense>
        </Dialog>
      </Cell>
    </Row>
  )
}
