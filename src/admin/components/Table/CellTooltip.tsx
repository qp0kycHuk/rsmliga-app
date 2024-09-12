import { Button, Tooltip } from '@features/ui'
import { classNameJoin } from '@utils/helpers/classNameJoin'

export function CellTooltip({ content, children, className }: Props) {
  return (
    <div className={classNameJoin('flex items-center gap-2', className)}>
      <div className="truncate">{children || content}</div>
      <Tooltip placement="bottom-end" content={content || children}>
        <Button
          as="div"
          variant="contur"
          className="rounded-full btn-[18px] cursor-pointer ml-auto print:hidden"
          icon
          size={undefined}
        >
          ?
        </Button>
      </Tooltip>
    </div>
  )
}

type Props = BaseHtmlProps & {
  content?: string
}
