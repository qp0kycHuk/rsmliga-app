import classnames from 'classnames'
import { Input, IProps } from '../Input/Input'
import { ComponentProps } from 'react'
import { FieldWrapper } from './FieldWrapper'
import classes from './Field.module.scss'

export function Field({ inputProps = {}, ...props }: IFieldProps) {
  return (
    <FieldWrapper
      {...props}
      className={inputProps.value || inputProps.defaultValue ? classes.active : ''}
      input={
        <Input
          {...inputProps}
          className={classnames('w-full border-none focus:shadow-none', inputProps.className)}
        />
      }
    ></FieldWrapper>
  )
}

export interface IFieldProps extends React.PropsWithChildren, IProps {
  placeholder?: string
  className?: string
  fieldClassName?: string
  inputProps?: Omit<ComponentProps<typeof Input>, 'size' | 'color'>
}
