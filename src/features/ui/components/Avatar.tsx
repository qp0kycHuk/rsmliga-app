import { Size } from '../types'
import { UserIcon } from '@assets/icons/fill'
import { twMerge } from 'tailwind-merge'

interface IAvatarProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  src?: string
  placeholder?: string
  size?: Size
  imageProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLImageElement>, HTMLImageElement>
}

const baseClassName = 'rounded-full flex relative overflow-hidden bg-primary bg-opacity-20'

const sizeClassNames: Record<Size, string> = {
  xs: 'size-4',
  sm: 'size-6',
  base: 'size-9',
  lg: 'size-12',
}

export function Avatar({ size = 'base', src, className, placeholder, imageProps }: IAvatarProps) {
  return (
    <div className={twMerge(baseClassName, size ? sizeClassNames[size] : null, className)}>
      {src ? (
        <img
          {...imageProps}
          src={src}
          className={twMerge('w-full h-full object-cover', imageProps?.className)}
        />
      ) : placeholder ? (
        <div className="text-primary m-auto font-bold">{placeholder[0]}</div>
      ) : (
        <UserIcon className="text-primary m-auto " />
      )}
    </div>
  )
}
