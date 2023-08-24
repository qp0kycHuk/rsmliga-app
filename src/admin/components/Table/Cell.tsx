import classnames from 'classnames'
import classes from './Table.module.scss'

interface ICellProps extends React.PropsWithChildren {
  className?: string
  head?: boolean
}

export function Cell({ children, className, head }: ICellProps) {
  return (
    <td
      className={classnames(classes.cell, className, {
        [classes.head]: head,
      })}
    >
      {children}
    </td>
  )
}
