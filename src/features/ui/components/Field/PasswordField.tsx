import { EyeClosedIcon, EyeIcon } from '@assets/icons/fill'
import { Button } from '@features/ui'
import { Field } from '@features/ui/components/Field/Field'
import { ComponentProps, useState } from 'react'
import { Tooltip } from '@features/ui/components/Tooltip'

export function PasswordField(props: IPasswordFieldProps) {
  const [isHide, setHide] = useState(
    !props.inputProps?.type || props.inputProps?.type === 'password'
  )

  function toggleType() {
    setHide((prev) => !prev)
  }

  return (
    <Field
      {...props}
      inputProps={{
        ...props.inputProps,
        type: isHide ? 'password' : 'text',
      }}
    >
      {props.children}
      <div className="absolute top-0 right-0 flex items-center h-full pr-1">
        <Tooltip content={isHide ? 'Показать' : 'Скрыть'} placement="right">
          <Button
            as="div"
            className="cursor-pointer"
            icon
            size="sm"
            variant="none"
            onClick={toggleType}
          >
            {isHide ? (
              <EyeClosedIcon className="text-xl opacity-60" />
            ) : (
              <EyeIcon className="text-xl opacity-60" />
            )}
          </Button>
        </Tooltip>
      </div>
    </Field>
  )
}

interface IPasswordFieldProps extends ComponentProps<typeof Field> {}
