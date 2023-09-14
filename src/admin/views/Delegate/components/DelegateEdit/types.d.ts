interface IDelegateEditContextProviderProps extends React.PropsWithChildren {
  delegate?: IDelegate
  onCancel?(): void
}

interface IDelegateEditContextValue extends IEditContextValue {
  delegate: Partial<IDelegate>
  update(updated: DispatchEditableEntity<IEditableDelegate>): void
  onCancel?(): void
}

interface IEditableDelegate extends Partial<IDelegate> {}

interface IDelegateEditProps {
  delegate?: IDelegate
  onCancel?(): void
}
