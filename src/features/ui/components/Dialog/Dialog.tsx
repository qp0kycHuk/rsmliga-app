import { Dialog as DialogWrap, DialogPanel, DialogBackdrop } from '@headlessui/react'
import { Button } from '../Button'
import { CrossIcon } from '@assets/icons/fill'
import { classNameJoin } from '@utils/helpers/classNameJoin'

export function Dialog({ children, isOpen, className, onClose }: IDialogProps) {
  return (
    <DialogWrap className="relative z-8" open={isOpen} onClose={onClose}>
      <DialogBackdrop
        className="fixed inset-0 bg-black/50 print:hidden duration-300 data-[closed]:opacity-0"
        transition
      />

      <div className="fixed inset-0 w-screen overflow-y-auto print:overflow-auto p-4 print:p-0 flex flex-col print:relative">
        <DialogPanel
          className={classNameJoin(
            'w-full m-auto print:bg-transparent relative transition-all bg-l3 shadow-xl rounded-2xl',
            'duration-300 ease-out data-[closed]:scale-95 data-[closed]:translate-y-5 data-[closed]:opacity-0',
            className
          )}
          transition
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
      </div>
    </DialogWrap>
  )
}

export type IDialogProps = BaseHtmlProps & {
  isOpen: boolean
  onClose: () => unknown
}
