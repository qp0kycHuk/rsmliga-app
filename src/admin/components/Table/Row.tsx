import classnames from 'classnames'
import classes from './Table.module.scss'

interface IRowProps extends React.TableHTMLAttributes<HTMLTableRowElement> {
  className?: string
}

export function Row({ children, className, ...props }: IRowProps) {
  return (
    <tr {...props} className={classnames(classes.row, className)}>
      {children}
    </tr>
  )
}
