import { DownloadIcon, PencilIcon, TrashIcon } from '@assets/icons/fill'
import { Button, Dialog } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { Suspense } from 'react'
import { ConfirmDialog } from '@admin/components/ConfirmDialog'
import { toast } from '@lib/Toast'
import { id } from '@utils/helpers/id'
import { ProtocolEdit } from '@admin/views/Protocol/components/ProtocolEdit/ProtocolEdit'
import { deleteProtocol } from '@admin/views/Protocol/service/api'
import { MATCHES_KEY } from '@admin/views/Match/service/api'
import { useQueryClient } from 'react-query'

export function Protocol({ item }: Props) {
  const queryClient = useQueryClient()
  const [isEditDialogOpen, , openEditDialog, closeEditDialog] = useToggle(false)
  const [isDeleteDialogOpen, , openDeleteDialog, closeDeleteDialog] = useToggle(false)

  async function deleteHandler() {
    const itemId = id(item)
    if (!itemId) return

    const response = await deleteProtocol({ match_id: itemId })

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
          <Button
            as="a"
            href={'/manager/matches/protocol.php?id=' + item.id}
            size={null}
            icon
            className="btn-[22px]"
            color="gray-light"
          >
            <DownloadIcon className="text-primary text-lg" />
          </Button>
        )}
        <Button
          onClick={openEditDialog}
          size={null}
          icon
          className="btn-[22px]"
          color={item.protocol ? 'gray-light' : 'primary'}
        >
          {item.protocol ? <PencilIcon className="text-primary text-lg" /> : '+'}
        </Button>
        {item.protocol && (
          <Button
            size={null}
            icon
            className="btn-[22px]"
            color="gray-light"
            onClick={openDeleteDialog}
          >
            <TrashIcon className="text-primary text-lg" />
          </Button>
        )}
      </div>

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
