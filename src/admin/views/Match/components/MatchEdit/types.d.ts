interface MatchContextProps extends React.PropsWithChildren {
  item?: MatchDetail
  onCancel?(): void
}

interface MatchContextValue extends IEditContextValue {
  item: EditableMatch
  update(updated: DispatchEditableEntity<EditableMatch>): void
  onCancel?(): void
  // submit(additionallyData?: EditableMatch): void
}

interface EditableMatch extends Partial<MatchDetail> {
  file_del?: EntityId[]
  newStatus?: string
}
