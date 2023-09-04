import classnames from 'classnames'
import classes from './Table.module.scss'

interface IRowProps extends React.TableHTMLAttributes<HTMLTableRowElement> {
  className?: string
}

export function Row({ children, className }: IRowProps) {
  return <tr className={classnames(classes.row, className)}>{children}</tr>
}
