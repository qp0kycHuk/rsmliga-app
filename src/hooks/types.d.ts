type DispatchEditableEntity<E> = ((prev: Partial<E>) => Partial<E>) | Partial<E>
type IToggleResult = [boolean, () => void, () => void, () => void]
