import { Cell, CellTooltip, Row } from '@admin/index'
import { Avatar, Button, Dialog } from '@features/ui'
import { CompetitionsDialog } from './Item.Dialog.Competitions'
import { useToggle } from '@hooks/useToggle'
import { LocationsDialog } from './Item.Dialog.Locations'

interface IItemProps {
  item: ISecretary
}

export function Item({ item }: IItemProps) {
  const [isContestsDialogOpen, , openContestsDialog, closeContestsDialog] = useToggle(false)
  const [isLocationsDialogOpen, , openLocationsDialog, closeLocationsDialog] = useToggle(false)

  return (
    <Row className="text-sm ">
      <Cell className="w-16">
        <Avatar src={item.image_src} placeholder={item.surname} className="mx-auto" />
      </Cell>
      <Cell>
        {item.surname} {item.name} {item.patronymic}
      </Cell>
      <Cell>{item.category}</Cell>
      <Cell>{item.email || '-'}</Cell>
      <Cell>{item.phone || '-'}</Cell>
      <Cell>
        <Button size="xs" className="w-full" onClick={openContestsDialog}>
          Открыть
        </Button>
      </Cell>
      <Cell>
        <Button size="xs" className="w-full" onClick={openLocationsDialog}>
          Открыть
        </Button>
      </Cell>

      <Cell hidden>
        {/* Модалка с соревнованиями */}
        <Dialog
          isOpen={isContestsDialogOpen}
          onClose={closeContestsDialog}
          className="max-w-4xl p-10"
        >
          <CompetitionsDialog item={item} />
          <Button className="mt-6" onClick={closeContestsDialog}>
            Закрыть
          </Button>
        </Dialog>

        {/* Модалка с городами */}
        <Dialog
          isOpen={isLocationsDialogOpen}
          onClose={closeLocationsDialog}
          className="max-w-4xl p-10"
        >
          <LocationsDialog item={item} />
          <Button className="mt-6" onClick={closeLocationsDialog}>
            Закрыть
          </Button>
        </Dialog>
      </Cell>
    </Row>
  )
}