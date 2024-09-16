import { DownloadIcon, EyeIcon, PencilIcon, TrashIcon } from '@assets/icons/fill'
import { Button, Dialog } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { lazy, Suspense } from 'react'
import { ConfirmDialog } from '@admin/components/ConfirmDialog'
import { toast } from '@lib/Toast'
import { id } from '@utils/helpers/id'
import { deleteProtocol } from '@admin/views/Protocol/service/api'
import { MATCHES_KEY } from '@admin/views/Match/service/api'
import { useQueryClient } from 'react-query'

const ProtocolEdit = lazy(() =>
  import('@admin/views/Protocol/').then((m) => ({
    default: m.ProtocolEdit,
  }))
)

// const ProtocolView = lazy(() =>
//   import('@admin/views/Protocol/').then((m) => ({
//     default: m.ProtocolView,
//   }))
// )

export function Protocol({ item }: Props) {
  const queryClient = useQueryClient()
  // const [isViewDialogOpen, , openViewDialog, closeViewDialog] = useToggle(false)
  const [isEditDialogOpen, , openEditDialog, closeEditDialog] = useToggle(false)
  const [isDeleteDialogOpen, , openDeleteDialog, closeDeleteDialog] = useToggle(false)

  async function deleteHandler() {
    const response = await deleteProtocol({ match_id: id(item) as EntityId })

    if (response.data.error) {
      toast.error(response.data.error)
    } else {
      toast.info('Успешно удалено')
      queryClient.invalidateQueries(MATCHES_KEY)
      closeDeleteDialog()
    }
  }

  return (
    <>
      <div className="flex items-center gap-2">
        {item.protocol && (
          <>
            {/* <Button
              onClick={openViewDialog}
              size={undefined}
              icon
              className="btn-[22px]"
              color="gray-light"
            >
              <EyeIcon className="text-primary text-lg" />
            </Button> */}
            <Button
              as="a"
              target="_blank"
              href={'/manager/matches/protocol.php?id=' + item.id}
              size={undefined}
              icon
              className="btn-[22px]"
              color="gray-light"
            >
              <DownloadIcon className="text-primary text-lg" />
            </Button>
          </>
        )}
        <Button
          onClick={openEditDialog}
          size={undefined}
          icon
          className="btn-[22px]"
          color={item.protocol ? 'gray-light' : 'primary'}
        >
          {item.protocol ? <PencilIcon className="text-primary text-lg" /> : '+'}
        </Button>
        {item.protocol && (
          <Button
            size={undefined}
            icon
            className="btn-[22px]"
            color="gray-light"
            onClick={openDeleteDialog}
          >
            <TrashIcon className="text-primary text-lg" />
          </Button>
        )}
      </div>

      {/* <Dialog
        isOpen={isViewDialogOpen}
        onClose={closeViewDialog}
        className="container max-w-6xl px-4 py-10 md:px-8 print:p-0"
      >
        <Suspense fallback="Loading...">
          <ProtocolView matchId={item.id} onCancel={closeViewDialog} />
        </Suspense>
      </Dialog> */}
      <Dialog
        isOpen={isEditDialogOpen}
        onClose={closeEditDialog}
        className="container max-w-6xl px-4 py-10 md:px-8 print:p-0"
      >
        <Suspense fallback="Loading...">
          <ProtocolEdit matchId={item.id} onCancel={closeEditDialog} />
        </Suspense>
      </Dialog>

      <Dialog isOpen={isDeleteDialogOpen} onClose={closeDeleteDialog} className="max-w-lg w-full">
        <ConfirmDialog
          title="Удалить протокол?"
          confirmText="Удалить"
          cancelText="Отмена"
          onConfirm={deleteHandler}
          onCancel={closeDeleteDialog}
        />
      </Dialog>
    </>
  )
}

interface Props {
  item: Match
}
