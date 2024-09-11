import { Dialog, DialogHeader, DialogTitle } from '@features/ui'
import { ProtocolView } from './ProtocolView'
import { IDialogProps } from '@features/ui/components/Dialog/Dialog'

export function ProtocolDialog({ id, onClose, ...props }: IDialogProps & { id: EntityId }) {
  return (
    <Dialog {...props} className="container max-w-6xl p-0" onClose={onClose}>
      <DialogHeader>
        <DialogTitle>Протокол</DialogTitle>
      </DialogHeader>
      <div className="p-10 print:p-0">
        <ProtocolView matchId={id} onCancel={onClose}></ProtocolView>
      </div>
    </Dialog>
  )
}
