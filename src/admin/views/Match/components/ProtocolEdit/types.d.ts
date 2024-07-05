interface ProtocolContextProps extends React.PropsWithChildren {
  item?: IReport
  onCancel?(): void
}

interface ProtocolContextValue extends IEditContextValue {
  item: EditableProtocol
  update(updated: DispatchEditableEntity<EditableProtocol>): void
  onCancel?(): void
  submit(additionallyData?: EditableProtocol): void
}

interface EditableProtocol extends Partial<Protocol> {
  file_del?: EntityId[]
  newStatus?: string
}
