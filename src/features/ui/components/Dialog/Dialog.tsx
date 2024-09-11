import { Transition, Dialog as DialogWrap, TransitionChild, DialogPanel } from '@headlessui/react'
import classnames from 'classnames'
import { Fragment } from 'react'
import { Button } from '../Button'
import { CrossIcon } from '@assets/icons/fill'

export interface IDialogProps extends React.PropsWithChildren {
  isOpen: boolean
  onClose: () => unknown
  className?: string
}

export function Dialog({ children, isOpen, className, onClose }: IDialogProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <DialogWrap as="div" className="relative z-8" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 print:hidden" />
        </TransitionChild>

        <div className="fixed print:relative inset-0 overflow-y-auto print:overflow-auto">
          <div className="flex min-h-full p-4 print:p-0">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-5"
              enterTo="opacity-100 "
              leave="ease-in duration-200"
              leaveFrom="opacity-100 "
              leaveTo="opacity-0 scale-95 translate-y-5"
            >
              <DialogPanel
                className={classnames(
                  className,
                  'w-full m-auto transition-all  bg-l3 shadow-xl rounded-2xl print:bg-transparent relative'
                )}
              >
                <div className="fixed -z-1" tabIndex={0}></div>
                <Button
                  className="absolute right-1 top-1 rounded-full btn-default print:hidden"
                  icon
                  size="sm"
                  variant="none"
                  color="none"
                  onClick={onClose}
                >
                  <CrossIcon />
                </Button>
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </DialogWrap>
    </Transition>
  )
}
