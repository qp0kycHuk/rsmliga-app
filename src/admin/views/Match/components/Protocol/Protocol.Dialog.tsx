import { Dialog, DialogHeader } from '@features/ui'
import { Protocol } from './Protocol'
import { IDialogProps } from '@features/ui/components/Dialog/Dialog'

export function ProtocolDialog({ id, ...props }: IDialogProps & { id: EntityId }) {
  return (
    <Dialog {...props} className="container max-w-6xl p-0">
      <DialogHeader>
        <div className="text-center text-3xl print:text-xl font-bold">Протокол</div>
      </DialogHeader>
      <div className="p-10 print:p-0">
        <Protocol matchId={id}></Protocol>
      </div>
    </Dialog>
  )
}
