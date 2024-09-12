import { classNameJoin } from '@utils/helpers/classNameJoin'
import { twMerge } from 'tailwind-merge'

export function FieldView({ className, children }: BaseHtmlProps) {
  return (
    <div
      className={classNameJoin(
        twMerge('p-4 rounded-md', className),
        'print:bg-transparent print:border print:border-gray print:border-solid bg-default/5'
      )}
    >
      {children}
    </div>
  )
}
