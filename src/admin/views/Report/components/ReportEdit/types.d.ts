interface IReportEditContextProviderProps extends React.PropsWithChildren {
  item: IReport
}

interface IReportEditContextValue extends IEditContextValue {
  report: Partial<IReport>
  update(updated: DispatchEditableEntity<IEditableReport>): void
}

interface IEditableReport extends Partial<IReport> {}
