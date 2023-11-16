import classnames from 'classnames'
import classes from './Table.module.scss'

interface ITableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  className?: string
  xBorderLess?: boolean
}

export function Table({ children, className, xBorderLess, ...props }: ITableProps) {
  return (
    <div className={classnames(classes['table-wrapper'], className)}>
      <table
        {...props}
        className={classnames(classes.table, xBorderLess ? classes['x-borderless'] : '')}
      >
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
