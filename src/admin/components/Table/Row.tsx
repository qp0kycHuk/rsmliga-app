import { classNameJoin } from '@utils/helpers/classNameJoin'
import classes from './Table.module.scss'

export function Row({ children, className, ...props }: Props) {
  return (
    <tr {...props} className={classNameJoin(classes.row, className)}>
      {children}
    </tr>
  )
}

type Props = React.TableHTMLAttributes<HTMLTableRowElement>
