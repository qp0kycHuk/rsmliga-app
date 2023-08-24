import classnames from 'classnames'
import { Size } from '../types'

interface IAvatarProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  src: string
  size?: Size
  imageProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLImageElement>, HTMLImageElement>
}

const baseClassName = 'rounded-full relative overflow-hidden'

const sizeClassNames: PartialRecord<Size, string> = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6',
  base: 'w-9 h-9',
  lg: 'w-12 h-12',
}

export function Avatar({ size = 'base', src, className, imageProps }: IAvatarProps) {
  return (
    <div className={classnames(baseClassName, size ? sizeClassNames[size] : null, className)}>
      <img
        {...imageProps}
        src={src}
        className={classnames('w-full h-full object-cover', imageProps?.className)}
      />
    </div>
  )
}
