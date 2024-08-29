import { ConfirmDialog } from '@admin/components/ConfirmDialog'
import { useUserAccess } from '@admin/hooks/useUserAccess'
import { Cell } from '@admin/index'
import { canEditGroups } from '@admin/views/Report/const'
import { useReportStatus } from '@admin/views/Report/hooks/useReportStatus'
import { deleteReport, REPORTS_KEY } from '@admin/views/Report/service/api'
import { EyeIcon, PencilIcon, TrashIcon } from '@assets/icons/fill'
import { Button, Dialog } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { id } from '@utils/helpers/id'
import { Suspense } from 'react'
import { useQueryClient } from 'react-query'

import { ReportEdit } from '../../ReportEdit/ReportEdit'
import { ReportView } from '../../ReportView/ReportView'
import { toast } from '@lib/Toast'

export function Control({ item }: IProps) {
  const [isEditDialogOpen, , openEditDialog, closeEditDialog] = useToggle(false)
  const [isViewDialogOpen, , openViewDialog, closeViewDialog] = useToggle(false)
  const [isDeleteDialogOpen, , openDeleteDialog, closeDeleteDialog] = useToggle(false)
  const queryClient = useQueryClient()
  const { isStatusNone, isStatusEditable } = useReportStatus(item)
  const { isAccess } = useUserAccess(canEditGroups)

  async function deleteHandler() {
    const itemId = id(item)
    if (!itemId) return

    const data = await deleteReport(itemId)

    toast.info('Успешно удалено')
    queryClient.invalidateQueries(REPORTS_KEY)
    closeDeleteDialog()
  }

  return (
    <>
      <Cell className="w-40 text-xs sm:text-sm">
        <div className={isStatusNone ? 'opacity-60' : ''}>{item.status}</div>
        <div className="flex mt-1.5 gap-1">
          {isStatusNone ? (
            isAccess &&
            isStatusEditable && (
              <Button size={null} icon className="btn-[22px]" onClick={openEditDialog}>
                +
              </Button>
            )
          ) : (
            <>
              <Button
                size={null}
                icon
                className="btn-[22px]"
                color="gray-light"
                onClick={openViewDialog}
              >
                <EyeIcon className="text-primary text-lg" />
              </Button>
              {isAccess && isStatusEditable && (
                <Button
                  size={null}
                  icon
                  className="btn-[22px]"
                  color="gray-light"
                  onClick={openEditDialog}
                >
                  <PencilIcon className="text-primary text-lg" />
                </Button>
              )}
              {isAccess && (
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
            </>
          )}
        </div>
      </Cell>
      <Cell hidden>
        <Dialog
          isOpen={isEditDialogOpen}
          onClose={closeEditDialog}
          className="container max-w-6xl px-4 py-10 md:p-10"
        >
          <Suspense fallback="Loading...">
            <ReportEdit item={item} onCancel={closeEditDialog} />
          </Suspense>
        </Dialog>

        <Dialog
          isOpen={isViewDialogOpen}
          onClose={closeViewDialog}
          className="container max-w-6xl px-4 py-10 md:p-10"
        >
          <Suspense fallback="Loading...">
            <ReportView item={item} />
            <Button className="mt-8 px-10" onClick={closeViewDialog}>
              Закрыть
            </Button>
          </Suspense>
        </Dialog>

        <Dialog isOpen={isDeleteDialogOpen} onClose={closeDeleteDialog} className="max-w-lg w-full">
          <ConfirmDialog
            title="Удалить отчет?"
            confirmText="Удалить"
            cancelText="Отмена"
            onConfirm={deleteHandler}
            onCancel={closeDeleteDialog}
          />
        </Dialog>
      </Cell>
    </>
  )
}

interface IProps {
  item: IReport
}
