import { Transition, Dialog as DialogWrap } from '@headlessui/react'
import classnames from 'classnames'
import { Fragment } from 'react'

interface IDialogProps extends React.PropsWithChildren {
  isOpen: boolean
  onClose: () => unknown
  className?: string
}

export function Dialog({ children, isOpen, className, onClose }: IDialogProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <DialogWrap as="div" className="relative z-8" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 "
              leave="ease-in duration-200"
              leaveFrom="opacity-100 "
              leaveTo="opacity-0 scale-95"
            >
              <DialogWrap.Panel
                className={classnames(
                  className,
                  'w-full m-auto transition-all  bg-white shadow-xl rounded-2xl'
                )}
              >
                <div className="fixed -z-1" tabIndex={0}></div>
                {children}
              </DialogWrap.Panel>
            </Transition.Child>
          </div>
        </div>
      </DialogWrap>
    </Transition>
  )
}
