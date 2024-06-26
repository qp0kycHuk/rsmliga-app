import { twMerge } from 'tailwind-merge'

interface IFieldViewProps extends React.PropsWithChildren {
  className?: string
}

export function FieldView({ className, children }: IFieldViewProps) {
  return (
    <div
      className={twMerge(
        'p-4 rounded-md bg-gray bg-opacity-40 dark:bg-opacity-20',
        'print:bg-transparent print:border print:border-gray print:border-solid',
        className
      )}
    >
      {children}
    </div>
  )
}
