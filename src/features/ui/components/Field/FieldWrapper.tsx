import classnames from 'classnames'
import classes from './Field.module.scss'
import { Input, IProps, getInputClassname } from '../Input/Input'
import { ComponentProps } from 'react'

export function FieldWrapper({
  color = 'primary',
  size,
  placeholder,
  children,
  className,
  fieldClassName,
  isLabelOut,
  isLabelShow,
  input,
}: IFieldWrapperProps) {
  return (
    <label
      className={classnames(
        classes.field,
        'block relative ',
        className,
        getInputClassname({ color, size }).replace('input', ''),
        isLabelOut ? classes.active : null,
        isLabelShow ? classes.inactive : null
      )}
    >
      {input}
      <fieldset
        className={classnames(
          classes.fieldset,
          placeholder ? classes['with-placeholder'] : null,
          'input',
          fieldClassName
        )}
      >
        {placeholder ? <legend className={classes.legend}>{placeholder}</legend> : null}
      </fieldset>
      {placeholder ? <div className={classes.placeholder}>{placeholder}</div> : null}
      {children}
    </label>
  )
}

export interface IFieldWrapperProps extends React.PropsWithChildren, IProps {
  placeholder?: string
  className?: string
  fieldClassName?: string
  inputProps?: Omit<ComponentProps<typeof Input>, 'size' | 'color'>
  input: React.ReactNode
  isLabelOut?: boolean
  isLabelShow?: boolean
}
