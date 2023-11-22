import classes from './Table.module.scss'
import { twMerge } from 'tailwind-merge'

interface ICellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  className?: string
  head?: boolean
}

export function Cell({ children, className, head, ...props }: ICellProps) {
  return (
    <td
      {...props}
      className={twMerge(
        classes.cell,
        className,
        'dark:bg-dark-100 dark:border-white dark:border-opacity-20',
        head ? classes.head : 'bg-light-100'
      )}
    >
      {children}
    </td>
  )
}
