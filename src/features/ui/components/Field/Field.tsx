import { Input, IProps } from '../Input/Input'
import { ComponentProps } from 'react'
import { FieldWrapper } from './FieldWrapper'
import classes from './Field.module.scss'
import { twMerge } from 'tailwind-merge'

export function Field({ inputProps = {}, className, ...props }: IFieldProps) {
  return (
    <FieldWrapper
      {...props}
      className={twMerge(
        inputProps.value || inputProps.defaultValue ? classes.active : '',
        className
      )}
      input={
        <Input
          {...inputProps}
          className={twMerge('w-full border-none focus:shadow-none', inputProps.className)}
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
