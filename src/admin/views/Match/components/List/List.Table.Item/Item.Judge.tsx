import { PencilIcon } from '@assets/icons/fill'
import { Button, Dialog } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { toast } from '@lib/Toast'
import { id } from '@utils/helpers/id'
import { useQueryClient } from 'react-query'
import { MATCHES_KEY } from '@admin/views/Match/service/api'
import { JudgeDialog } from './Item.Judge.Dialog'
import { upsertJudge } from '@admin/views/Match/service/judge'

interface Props {
  item: Match
}

export function Judge({ item }: Props) {
  const queryClient = useQueryClient()
  const [isEditDialogOpen, , openEditDialog, closeEditDialog] = useToggle(false)

  async function saveHandler(value: EntityId) {
    const itemId = id(item)
    if (!itemId) return

    const response = await upsertJudge({ id: itemId, judge_id: value as string })

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
        <div className="text-sm">{item.judge}</div>
        <Button
          onClick={openEditDialog}
          size="xs"
          icon
          color="primary"
          className="ml-auto text-lg print:hidden"
        >
          {item.judge ? <PencilIcon /> : '+'}
        </Button>
      </div>

      <Dialog isOpen={isEditDialogOpen} onClose={closeEditDialog} className="max-w-lg w-full p-6">
        <JudgeDialog item={item} onSubmit={saveHandler} />
      </Dialog>
    </>
  )
}
