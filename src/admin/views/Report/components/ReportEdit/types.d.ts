interface IReportEditContextProviderProps extends React.PropsWithChildren {
  item: IReport
}

interface IReportEditContextValue extends IEditContextValue {
  report: IEditableReport
  update(updated: DispatchEditableEntity<IEditableReport>): void
}

interface IEditableReport extends Partial<IReport> {
  file_del?: EntityId[]
}
