import React from 'react'
import { CrossIcon } from '@assets/icons/fill'
import { Button } from '@features/ui'
import {
  CloseButtonProps,
  ToastContainer as Container,
  // IconProps,
  ToastContainerProps,
} from 'react-toastify'

export { toast } from 'react-toastify'

const contextClass = {
  success: 'bg-green text-white',
  error: 'bg-red text-white',
  info: 'bg-gray-light text-primary',
  warning: 'bg-yellow text-white',
  default: 'bg-l3 text-default',
  dark: 'bg-black text-white',
}

const CloseButton = ({ closeToast, type }: CloseButtonProps) => {
  return (
    <Button
      onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.stopPropagation()
        closeToast(event)
      }}
      variant="none"
      icon
      size="sm"
      color={type === 'default' ? 'primary' : 'gray'}
    >
      <CrossIcon className={type !== 'default' && type !== 'info' ? 'text-white' : 'text-red'} />
    </Button>
  )
}

// TODO
// const CustomIcon = (props: IconProps) => {
//   return <div className="self-start">{props.type}</div>
// }

export function ToastContainer(props: ToastContainerProps & React.RefAttributes<HTMLDivElement>) {
  return (
    <Container
      toastClassName={(context) =>
        contextClass[context?.type || 'default'] +
        ' min-h-[62px] shadow-lg p-3 relative flex mb-3 rounded-md overflow-hidden cursor-pointer text-sm font-semibold'
      }
      bodyClassName={() => 'flex items-center flex-grow'}
      // icon={CustomIcon}
      closeButton={CloseButton}
      position="bottom-center"
      theme="colored"
      draggablePercent={25}
      hideProgressBar={true}
      limit={8}
      autoClose={2000}
      closeOnClick
      {...props}
    />
  )
}
