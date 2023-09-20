import { useDocumentTitle } from '@hooks/useDocumentTitle'
import { List } from '../components/List/List'

export function SecretaryList() {
  useDocumentTitle('Общий список секретарей')

  return <List />
}
