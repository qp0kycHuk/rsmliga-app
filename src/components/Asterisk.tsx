import { classNameJoin } from '@utils/helpers/classNameJoin'

export function Asterisk({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...props} className={classNameJoin('text-red font-semibold ', className)}>
      *
    </span>
  )
}
