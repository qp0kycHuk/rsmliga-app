import { Button, Tooltip } from '@features/ui'
import classNames from 'classnames'

interface ICellTooltipProps extends React.PropsWithChildren {
  content?: string
  className?: string
}

export function CellTooltip({ content, children, className }: ICellTooltipProps) {
  return (
    <div className={classNames(className, 'flex items-center gap-2')}>
      <div className="truncate">{children || content}</div>
      <Tooltip placement="bottom-end" content={content || children}>
        <Button
          as="div"
          variant="contur"
          className="rounded-full btn-[18px] cursor-pointer ml-auto"
          icon
          size={undefined}
        >
          ?
        </Button>
      </Tooltip>
    </div>
  )
}
