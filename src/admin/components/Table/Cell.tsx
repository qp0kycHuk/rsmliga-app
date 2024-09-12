import { classNameJoin } from '@utils/helpers/classNameJoin'
import classes from './Table.module.scss'

export function Cell({ children, className, head, ...props }: Props) {
  return (
    <td {...props} className={classNameJoin(classes.cell, className, head ? 'bg-l2' : 'bg-l3')}>
      {children}
    </td>
  )
}

type Props = React.TdHTMLAttributes<HTMLTableCellElement> & {
  head?: boolean
}
