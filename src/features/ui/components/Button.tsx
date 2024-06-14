import React from 'react'
import classnames from 'classnames'
import type { Size } from '../types'
import BaseButton, { BaseComponentProps, BaseComponent } from './Base'

const baseClassName = 'btn'

const variantClassNames: Record<Variant, string> = {
  fill: 'btn-fill',
  whitebg: 'btn-whitebg',
  light: 'btn-light',
  contur: 'btn-contur',
  text: 'btn-text',
  none: 'btn-default',
}

const colorClassNames = {
  white: 'btn-white',
  black: 'btn-black',
  green: 'btn-green',
  yellow: 'btn-yellow',
  primary: 'btn-primary',
  red: 'btn-red',
  gray: 'btn-gray',
  ['gray-light']: 'btn-gray-light',
}

const sizeClassNames: Record<Size, string> = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  base: 'btn-base',
  lg: 'btn-lg',
}

function ButtonComponent<C extends BaseComponent = 'button'>(
  {
    color = 'primary',
    size,
    variant = 'fill',
    icon = false,
    className,
    as = 'button',
    ...props
  }: ButtonProps<C>,
  ref: ButtonRef
) {
  const classNames = classnames(
    baseClassName,
    color ? colorClassNames[color] : null,
    size ? sizeClassNames[size] : null,
    variant ? variantClassNames[variant] : null,
    icon ? 'btn-icon' : '',
    className
  )

  return (
    <BaseButton<C>
      as={as}
      ref={ref}
      type="button"
      className={classNames}
      {...(props as BaseComponentProps<C>)}
    />
  )
}

export const Button = React.forwardRef(ButtonComponent)

type Variant = 'fill' | 'light' | 'contur' | 'text' | 'whitebg' | 'none'

interface IProps {
  color?: keyof typeof colorClassNames
  size?: keyof typeof sizeClassNames
  variant?: Variant
  icon?: boolean
}

export type ButtonProps<C extends BaseComponent = 'button'> = BaseComponentProps<C> & IProps
export type ButtonRef = React.ForwardedRef<HTMLElement>
