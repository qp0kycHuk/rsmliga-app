import { useDocumentTitle } from '@hooks/useDocumentTitle'
import { List } from '../components/List/List'

export function DelegateList() {
  useDocumentTitle('Список судей делегатов')

  return <List />
}
