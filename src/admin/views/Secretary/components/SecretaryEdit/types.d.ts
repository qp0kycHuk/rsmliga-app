interface ISecretaryEditContextProviderProps extends React.PropsWithChildren {
  item?: ISecretary
  onCancel?(): void
}

interface ISecretaryEditContextValue extends IEditContextValue {
  item: Partial<ISecretary>
  update(updated: DispatchEditableEntity<IEditableSecretary>): void
  onCancel?(): void
}

interface IEditableSecretary extends Partial<ISecretary> {}

interface ISecretaryEditProps {
  item?: ISecretary
  onCancel?(): void
}
