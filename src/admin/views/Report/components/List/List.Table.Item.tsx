import { Row, Cell, CellTooltip } from '@admin/index'
import { Button, Dialog } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { EyeIcon, PencilIcon, TrashIcon } from '@assets/icons/fill'
import { ConfirmDialog } from '@admin/components/ConfirmDialog'
import { Suspense, lazy } from 'react'

// import { ReportView } from '../ReportView/ReportView'
// import { ReportEdit } from '../ReportEdit/ReportEdit'

const ReportEdit = lazy(() =>
  import('../ReportEdit/ReportEdit').then((m) => ({ default: m.ReportEdit }))
)

const ReportView = lazy(() =>
  import('../ReportView/ReportView').then((m) => ({ default: m.ReportView }))
)

export function ReportTableItem({ item }: IProps) {
  const [isEditDialogOpen, , openEditDialog, closeEditDialog] = useToggle(false)
  const [isViewDialogOpen, , openViewDialog, closeViewDialog] = useToggle(false)
  const [isDeleteDialogOpen, , openDeleteDialog, closeDeleteDialog] = useToggle(false)

  return (
    <Row>
      <Cell className="text-sm">{item.season}</Cell>
      <Cell className="w-[264px] max-w-[264px] text-sm">
        <CellTooltip>{item.competition}</CellTooltip>
      </Cell>
      <Cell className="text-sm">{item.stage}</Cell>
      <Cell className="text-sm">{item.area}</Cell>
      <Cell className="w-[228px] max-w-[228px] text-sm">
        <CellTooltip>{item.location}</CellTooltip>
      </Cell>
      <Cell className="text-sm">{item.date}</Cell>
      <Cell className="w-40 text-sm">
        <div className={!item.status_id ? 'opacity-60' : ''}>
          {!item.status_id ? 'Отсутствует' : item.status}
        </div>
        <div className="flex mt-1.5 gap-1">
          {!item.status_id ? (
            <Button size={null} icon className="btn-[22px]" onClick={openEditDialog}>
              +
            </Button>
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
              <Button
                size={null}
                icon
                className="btn-[22px]"
                color="gray-light"
                onClick={openEditDialog}
              >
                <PencilIcon className="text-primary text-lg" />
              </Button>
              <Button
                size={null}
                icon
                className="btn-[22px]"
                color="gray-light"
                onClick={openDeleteDialog}
              >
                <TrashIcon className="text-primary text-lg" />
              </Button>
            </>
          )}
        </div>
      </Cell>

      <Cell hidden>
        <Dialog isOpen={isEditDialogOpen} onClose={closeEditDialog} className="container p-10">
          <Suspense fallback="Loading...">
            <ReportEdit item={item} />
          </Suspense>
        </Dialog>

        <Dialog isOpen={isViewDialogOpen} onClose={closeViewDialog} className="container p-10">
          <Suspense fallback="Loading...">
            <ReportView contest={item} />
          </Suspense>
        </Dialog>

        <Dialog isOpen={isDeleteDialogOpen} onClose={closeDeleteDialog} className="max-w-lg w-full">
          <ConfirmDialog
            title="Удалить отчет?"
            confirmText="Удалить"
            cancelText="Отмена"
            onCancel={closeDeleteDialog}
          />
        </Dialog>
      </Cell>
    </Row>
  )
}

interface IProps {
  item: IReport
}
