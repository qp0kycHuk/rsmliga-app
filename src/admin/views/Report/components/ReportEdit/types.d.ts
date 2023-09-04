interface IReportEditContextProviderProps extends React.PropsWithChildren {
  contest: IContest
}

interface IReportEditContextValue extends IEditContextValue {
  contest: IContest
  report: Partial<IReport>
  update(updated: DispatchEditableEntity<IEditableReport>): void
}

interface IEditableReport extends Partial<IReport> {}
