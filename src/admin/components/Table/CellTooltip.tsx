import { Button, Tooltip } from '@features/ui'

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
          className="rounded-full btn-[18px] cursor-pointer ml-auto"
          icon
          size={undefined}
        >
          ?
        </Button>
      </div>
    </Tooltip>
  )
}
