import classnames from 'classnames'
import classes from './Table.module.scss'

interface ICellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  className?: string
  head?: boolean
}

export function Cell({ children, className, head, ...props }: ICellProps) {
  return (
    <td
      {...props}
      className={classnames(classes.cell, className, {
        [classes.head]: head,
      })}
    >
      {children}
    </td>
  )
}
