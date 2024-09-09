import classes from './Table.module.scss'
import { twMerge } from 'tailwind-merge'

interface ICellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  className?: string
  head?: boolean
}

export function Cell({ children, className, head, ...props }: ICellProps) {
  return (
    <td {...props} className={twMerge(classes.cell, className, head ? 'bg-l2' : 'bg-l3')}>
      {children}
    </td>
  )
}
