interface IDelegateEditContextProviderProps extends React.PropsWithChildren {
  delegate: IDelegate
}

interface IDelegateEditContextValue extends IEditContextValue {
  delegate: Partial<IDelegate>
  update(updated: DispatchEditableEntity<IEditableDelegate>): void
}

interface IEditableDelegate extends Partial<IDelegate> {}

interface IDelegateEditProps {
  delegate: IDelegate
}
