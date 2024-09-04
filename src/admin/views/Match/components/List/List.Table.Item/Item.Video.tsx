import { ConfirmDialog } from '@admin/components/ConfirmDialog'
import { LinkIcon, TrashIcon } from '@assets/icons/fill'
import { Button, Dialog } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { toast } from '@lib/Toast'
import { id } from '@utils/helpers/id'
import { VideoDialog } from './Item.Video.Dialog'
import { deleteVideo, upsertVideo } from '@admin/views/Match/service/video'
import { useQueryClient } from 'react-query'
import { MATCHES_KEY } from '@admin/views/Match/service/api'

interface Props {
  item: Match
}

export function Video({ item }: Props) {
  const queryClient = useQueryClient()
  const [isDeleteDialogOpen, , openDeleteDialog, closeDeleteDialog] = useToggle(false)
  const [isEditDialogOpen, , openEditDialog, closeEditDialog] = useToggle(false)

  async function deleteHandler() {
    const itemId = id(item)
    if (!itemId) return

    const response = await deleteVideo({ id: itemId })

    if (response.data.error) {
      toast.error(response.data.error)
    } else {
      toast.info('Успешно удалено')
      queryClient.invalidateQueries(MATCHES_KEY)
      closeDeleteDialog()
    }
  }

  async function saveHandler(value: string) {
    const itemId = id(item)
    if (!itemId) return

    const response = await upsertVideo({ id: itemId, link: value })

    if (response.data.error) {
      toast.error(response.data.error)
    } else {
      toast.success('Успешно сохранено')
      queryClient.invalidateQueries(MATCHES_KEY)
      closeEditDialog()
    }
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <Button
          onClick={openEditDialog}
          size={null}
          icon
          className="btn-[22px]"
          color={item.video ? 'gray-light' : 'primary'}
        >
          {item.video ? <LinkIcon className="text-primary text-lg" /> : '+'}
        </Button>
        {item.video && (
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

      <Dialog isOpen={isDeleteDialogOpen} onClose={closeDeleteDialog} className="max-w-lg w-full">
        <ConfirmDialog
          title="Удалить ссылку?"
          confirmText="Удалить"
          cancelText="Отмена"
          onConfirm={deleteHandler}
          onCancel={closeDeleteDialog}
        />
      </Dialog>
      <Dialog isOpen={isEditDialogOpen} onClose={closeEditDialog} className="max-w-lg w-full p-6">
        <VideoDialog item={item} onSubmit={saveHandler} />
      </Dialog>
    </>
  )
}
