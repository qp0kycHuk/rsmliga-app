import { ToRightIcon } from '@assets/icons/fill'
import { classNameJoin } from '@utils/helpers/classNameJoin'

export function Select({
  children,
  fieldChildren,
  className,
  inputClassName,
  ...props
}: IFieldProps) {
  return (
    <label className={classNameJoin('cursor-pointer group relative', className)}>
      <select
        className={classNameJoin(
          'input w-full appearance-none cursor-pointer pr-12 print:pr-3 truncate',
          inputClassName
        )}
        {...props}
      >
        <option disabled hidden value="">
          {props.placeholder}
        </option>
        {children}
      </select>
      <div className="absolute top-0 right-0 flex items-center h-full pr-4 pointer-events-none print:hidden">
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
