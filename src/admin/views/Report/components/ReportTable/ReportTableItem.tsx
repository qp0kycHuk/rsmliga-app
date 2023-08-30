import { Row, Cell, CellTooltip } from '@admin/index'
import { Button, Dialog } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { ReportEdit } from '../ReportEdit/ReportEdit'
import { EyeIcon, PencilIcon, TrashIcon } from '@assets/icons/fill'

interface IProps {
  item: IContest
}

export function ReportTableItem({ item }: IProps) {
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)

  return (
    <>
      <Row>
        <Cell className="text-sm">{item.season}</Cell>
        <Cell className="w-[264px] max-w-[264px] text-sm">
          <CellTooltip>{item.name}</CellTooltip>
        </Cell>
        <Cell className="text-sm">{item.step}</Cell>
        <Cell className="text-sm">{item.area}</Cell>
        <Cell className="w-[228px] max-w-[228px] text-sm">
          <CellTooltip>{item.place}</CellTooltip>
        </Cell>
        <Cell className="text-sm">{item.date}</Cell>
        <Cell className="w-40 text-sm">
          <div>Загружен</div>
          <div className="flex mt-1.5 gap-1">
            {!item.report?.id ? (
              <Button size={null} icon className="btn-[22px]" onClick={openDialog}>
                +
              </Button>
            ) : (
              <>
                <Button
                  size={null}
                  icon
                  className="btn-[22px]"
                  color="gray-light"
                  onClick={openDialog}
                >
                  <EyeIcon className="text-primary text-lg" />
                </Button>
                <Button
                  size={null}
                  icon
                  className="btn-[22px]"
                  color="gray-light"
                  onClick={openDialog}
                >
                  <PencilIcon className="text-primary text-lg" />
                </Button>
                <Button
                  size={null}
                  icon
                  className="btn-[22px]"
                  color="gray-light"
                  onClick={openDialog}
                >
                  <TrashIcon className="text-primary text-lg" />
                </Button>
              </>
            )}
          </div>

          <Dialog isOpen={isDialogOpen} onClose={closeDialog} className="container p-10">
            <ReportEdit contest={item} />
          </Dialog>
        </Cell>
      </Row>
    </>
  )
}
