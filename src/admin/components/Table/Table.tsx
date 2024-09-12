import classes from './Table.module.scss'
import { classNameJoin } from '@utils/helpers/classNameJoin'

export function Table({ children, head, className, xBorderLess, ...props }: Props) {
  return (
    <div className={classNameJoin(classes['table-wrapper'], className)}>
      <table
        {...props}
        className={classNameJoin(classes.table, xBorderLess ? classes['x-borderless'] : '')}
      >
        {head && <thead>{head}</thead>}
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

type Props = React.TableHTMLAttributes<HTMLTableElement> & {
  xBorderLess?: boolean
  head?: React.ReactNode
}
