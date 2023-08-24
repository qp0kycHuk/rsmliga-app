import { Button } from '@features/ui'
import { Tooltip } from '@lib/Tooltip'

interface ICellTooltipProps extends React.PropsWithChildren {
  content?: string
}

export function CellTooltip({ content, children }: ICellTooltipProps) {
  return (
    <Tooltip placement="bottom" content={content || children}>
      <div className="flex items-center gap-2">
        <div className="truncate">{children || content}</div>
        <Button
          as="div"
          variant="contur"
          className="rounded-full btn-[18px] cursor-pointer"
          icon
          size={null}
        >
          ?
        </Button>
      </div>
    </Tooltip>
  )
}
