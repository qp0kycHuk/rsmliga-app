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
      className={classnames(
        classes.cell,
        className,
        'bg-light-100 dark:bg-dark-100 dark:border-white dark:border-opacity-20',
        {
          [classes.head]: head,
        }
      )}
    >
      {children}
    </td>
  )
}
