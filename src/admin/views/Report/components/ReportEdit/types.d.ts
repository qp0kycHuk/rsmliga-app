interface IReportEditContextProviderProps extends React.PropsWithChildren {
  item?: IReport
  onCancel?(): void
}

interface IReportEditContextValue extends IEditContextValue {
  report: IEditableReport
  update(updated: DispatchEditableEntity<IEditableReport>): void
  onCancel?(): void
}

interface IEditableReport extends Partial<IReport> {
  file_del?: EntityId[]
}
