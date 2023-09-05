import classnames from 'classnames'
import classes from './Table.module.scss'

interface ITableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  className?: string
}

export function Table({ children, className, ...props }: ITableProps) {
  return (
    <table {...props} className={classnames(classes.table, className)}>
      <tbody>{children}</tbody>
    </table>
  )
}
