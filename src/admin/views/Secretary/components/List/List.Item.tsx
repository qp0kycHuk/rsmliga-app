import { Cell, Row } from '@admin/index'
import { Avatar, Button, Dialog } from '@features/ui'
import { CompetitionsDialog } from './Item.Dialog.Competitions'
import { useToggle } from '@hooks/useToggle'
import { LocationsDialog } from './Item.Dialog.Locations'
import { Suspense, lazy } from 'react'
import { SERVER_URL } from '@utils/index'
import { canEditGroups } from '../../const'
import { useUserAccess } from '@admin/hooks/useUserAccess'
import { classNameJoin } from '@utils/helpers/classNameJoin'

interface IItemProps {
  item: ISecretary
}

const SecretaryEdit = lazy(() =>
  import('../SecretaryEdit/SecretaryEdit').then((m) => ({ default: m.SecretaryEdit }))
)

const SecretaryView = lazy(() =>
  import('../SecretaryView/SecretaryView').then((m) => ({ default: m.SecretaryView }))
)

export function Item({ item }: IItemProps) {
  const { isAccess, userData } = useUserAccess(canEditGroups)
  const canEdit = !(
    isAccess ||
    (userData?.item.id == item.user_id && userData.item.userGroups.includes('12'))
  )

  const [isEditDialogOpen, , openEditDialog, closeEditDialog] = useToggle(false)
  const [isViewDialogOpen, , openViewDialog, closeViewDialog] = useToggle(false)
  const [isContestsDialogOpen, , openContestsDialog, closeContestsDialog] = useToggle(false)
  const [isLocationsDialogOpen, , openLocationsDialog, closeLocationsDialog] = useToggle(false)

  return (
    <Row className="text-xs sm:text-sm">
      <Cell className="w-16">
        <Avatar
          src={item.image_src ? SERVER_URL + item.image_src : ''}
          placeholder={item.surname}
          className="mx-auto"
        />
      </Cell>
      <Cell
        onClick={canEdit ? openEditDialog : openViewDialog}
        className="cursor-pointer underline print:no-underline whitespace-nowrap"
      >
        {item.surname} {item.name} {item.patronymic}
      </Cell>
      <Cell>{item.category}</Cell>
      <Cell>{item.email || '-'}</Cell>
      <Cell className="whitespace-nowrap">{item.phone || '-'}</Cell>
      <Cell
        className={classNameJoin(
          'btn-group print:hidden',
          item.competitions.length > 0 ? 'cursor-pointer' : null
        )}
        onClick={item.competitions.length > 0 ? openContestsDialog : undefined}
      >
        {item.competitions.length > 0 ? (
          <Button size="xs" className="w-full">
            Открыть
          </Button>
        ) : (
          '-'
        )}
      </Cell>
      <Cell
        className={classNameJoin(
          'btn-group print:hidden',
          item.locations.length > 0 ? 'cursor-pointer' : null
        )}
        onClick={item.locations.length > 0 ? openLocationsDialog : undefined}
      >
        {item.locations.length > 0 ? (
          <Button size="xs" className="w-full">
            Открыть
          </Button>
        ) : (
          '-'
        )}
      </Cell>

      <Cell hidden>
        {/* Модалка с соревнованиями */}
        <Dialog
          isOpen={isContestsDialogOpen}
          onClose={closeContestsDialog}
          className="max-w-4xl px-4 py-10 md:p-10"
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
          className="max-w-4xl px-4 py-10 md:p-10"
        >
          <LocationsDialog item={item} />
          <Button className="mt-6" onClick={closeLocationsDialog}>
            Закрыть
          </Button>
        </Dialog>

        {/* Модалка редактирования */}
        {canEdit && (
          <Dialog
            isOpen={isEditDialogOpen}
            onClose={closeEditDialog}
            className="container max-w-6xl px-4 py-10 md:p-10"
          >
            <Suspense fallback="Loading...">
              <SecretaryEdit item={item} onCancel={closeEditDialog} />
            </Suspense>
          </Dialog>
        )}

        {/* Модалка просмотра */}
        {!canEdit && (
          <Dialog
            isOpen={isViewDialogOpen}
            onClose={closeViewDialog}
            className="container max-w-6xl px-4 py-10 md:p-10"
          >
            <Suspense fallback="Loading...">
              <SecretaryView item={item} />
              <Button className="mt-8" onClick={closeViewDialog}>
                Закрыть
              </Button>
            </Suspense>
          </Dialog>
        )}
      </Cell>
    </Row>
  )
}
