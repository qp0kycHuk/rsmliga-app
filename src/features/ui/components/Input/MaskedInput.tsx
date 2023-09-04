import { ComponentProps } from 'react'
import { Input } from '@features/ui/'

export function MaskedInput({ getMaskedValue, isComplete, ...props }: IMaskedInputProps) {
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const maskedValue = getMaskedValue(event.currentTarget.value)
    event.currentTarget.value = maskedValue
    props?.onChange?.(event)
  }

  function blurHandler(event: React.FocusEvent<HTMLInputElement>) {
    if (!isComplete(event.currentTarget.value) && event.currentTarget.value !== '') {
      event.currentTarget.value = ''
      props?.onChange?.(event)

      try {
        event.currentTarget.focus()
        event.currentTarget.blur()
      } catch {}
    }

    props?.onBlur?.(event)
  }

  return (
    <Input
      {...props}
      defaultValue={getMaskedValue((props?.value || props?.defaultValue || '').toString())}
      onChange={changeHandler}
      onBlur={blurHandler}
    />
  )
}

interface IMaskedInputProps extends ComponentProps<typeof Input> {
  getMaskedValue: (s: string) => string
  isComplete: (s: string) => boolean
}
