interface MatchContextProps extends React.PropsWithChildren {
  item?: IReport
  onCancel?(): void
}

interface MatchContextValue extends IEditContextValue {
  item: EditableMatch
  update(updated: DispatchEditableEntity<EditableMatch>): void
  onCancel?(): void
  submit(additionallyData?: EditableMatch): void
}

interface EditableMatch extends Partial<Match> {
  file_del?: EntityId[]
  newStatus?: string
}
