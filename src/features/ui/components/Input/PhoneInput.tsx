import { ComponentProps } from 'react'
import { Input } from '@features/ui/'
import { MaskedInput } from './MaskedInput'
import { getMaskedPhoneValue, isPhoneComplete } from '@utils/index'

export function PhoneInput({ ...props }: IPhoneInputProps) {
  return (
    <MaskedInput {...props} isComplete={isPhoneComplete} getMaskedValue={getMaskedPhoneValue} />
  )
}

type IPhoneInputProps = ComponentProps<typeof Input>
