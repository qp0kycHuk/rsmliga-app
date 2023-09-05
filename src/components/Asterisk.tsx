import classNames from 'classnames'

interface IAsteriskProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function Asterisk({ className, ...props }: IAsteriskProps) {
  return (
    <span {...props} className={classNames('text-red font-semibold ', className)}>
      *
    </span>
  )
}
