import classnames from 'classnames'
import classes from './Table.module.scss'

interface ITableProps extends React.PropsWithChildren {
  className?: string
}

export function Table({ children, className }: ITableProps) {
  return <table className={classnames(classes.table, className)}>{children}</table>
}
