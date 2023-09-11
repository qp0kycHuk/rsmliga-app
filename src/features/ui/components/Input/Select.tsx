import classnames from 'classnames'
import { ToRightIcon } from '@assets/icons/fill'

export function Select({
  children,
  fieldChildren,
  className,
  inputClassName,
  ...props
}: IFieldProps) {
  return (
    <label className={classnames(className, 'cursor-pointer group relative')}>
      <select
        className={classnames('input w-full appearance-none cursor-pointer', inputClassName)}
        {...props}
      >
        <option disabled hidden value="">
          {props.placeholder}
        </option>
        {children}
      </select>
      <div className="absolute top-0 right-0 flex items-center h-full pr-4 pointer-events-none">
        <ToRightIcon className="text-lg transition-transform opacity-40 group-focus-within:-rotate-90" />
      </div>
      {fieldChildren}
    </label>
  )
}

interface IFieldProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  className?: string
  fieldChildren?: React.ReactNode
  inputClassName?: string
}
