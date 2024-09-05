import React from 'react'
import classnames from 'classnames'
import { FieldWrapper } from '../Field/FieldWrapper'
import type { IProps } from '../Input/Input'
import { ToRightIcon } from '@assets/icons/fill'
import classes from './Field.module.scss'

export function SelectField({ children, fieldChildren, inputProps, ...props }: IFieldProps) {
  const selectRef = React.createRef<HTMLSelectElement>()
  const isLabelShow = props.placeholder
    ? (inputProps?.defaultValue || inputProps?.value) === props.placeholder ||
      !(inputProps?.defaultValue || inputProps?.value)
    : false

  function changeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    const target = event.target as HTMLSelectElement
    target.blur()

    inputProps?.onChange?.(event)
  }

  return (
    <FieldWrapper
      isLabelShow={isLabelShow}
      {...props}
      className={classnames(
        props.className,
        'cursor-pointer group',
        inputProps?.value || inputProps?.defaultValue ? classes.active : ''
      )}
      input={
        <select
          ref={selectRef}
          placeholder=""
          {...inputProps}
          defaultValue={inputProps?.defaultValue || inputProps?.value || props.placeholder}
          onChange={changeHandler}
          className={classnames(
            'input w-full border-none focus:shadow-none appearance-none cursor-pointer',
            inputProps?.className
          )}
        >
          <option value={props.placeholder} hidden disabled>
            {props.placeholder}
          </option>
          {children}
        </select>
      }
    >
      {fieldChildren}
      <div className="absolute top-0 right-0 flex items-center h-full pr-4 pointer-events-none">
        <ToRightIcon className="text-lg transition-transform opacity-40 group-focus-within:-rotate-90" />
      </div>
    </FieldWrapper>
  )
}

export interface IFieldProps extends React.PropsWithChildren, IProps {
  placeholder?: string
  className?: string
  fieldClassName?: string
  inputProps?: React.InputHTMLAttributes<HTMLSelectElement>
  fieldChildren?: React.ReactNode
}
