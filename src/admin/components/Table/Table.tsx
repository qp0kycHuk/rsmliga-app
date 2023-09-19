import classnames from 'classnames'
import classes from './Table.module.scss'

interface ITableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  className?: string
}

export function Table({ children, className, ...props }: ITableProps) {
  return (
    <div className={classnames(classes['table-wrapper'], className)}>
      <table {...props} className={classnames(classes.table)}>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
