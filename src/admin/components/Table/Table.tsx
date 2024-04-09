import classnames from 'classnames'
import classes from './Table.module.scss'

interface ITableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  className?: string
  xBorderLess?: boolean
  head?: React.ReactNode
}

export function Table({ children, head, className, xBorderLess, ...props }: ITableProps) {
  return (
    <div className={classnames(classes['table-wrapper'], className)}>
      <table
        {...props}
        className={classnames(classes.table, xBorderLess ? classes['x-borderless'] : '')}
      >
        {head && <thead>{head}</thead>}
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
