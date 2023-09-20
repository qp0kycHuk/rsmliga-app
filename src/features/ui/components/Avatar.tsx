import classnames from 'classnames'
import { Size } from '../types'
import { UserIcon } from '@assets/icons/fill'

interface IAvatarProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  src?: string
  placeholder?: string
  size?: Size
  imageProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLImageElement>, HTMLImageElement>
}

const baseClassName = 'rounded-full flex relative overflow-hidden bg-primary bg-opacity-20'

const sizeClassNames: Record<Size, string> = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6',
  base: 'w-9 h-9',
  lg: 'w-12 h-12',
}

export function Avatar({ size = 'base', src, className, placeholder, imageProps }: IAvatarProps) {
  return (
    <div className={classnames(baseClassName, size ? sizeClassNames[size] : null, className)}>
      {src ? (
        <img
          {...imageProps}
          src={src}
          className={classnames('w-full h-full object-cover', imageProps?.className)}
        />
      ) : placeholder ? (
        <div className="text-primary m-auto font-bold">{placeholder[0]}</div>
      ) : (
        <UserIcon className="text-primary m-auto " />
      )}
    </div>
  )
}
