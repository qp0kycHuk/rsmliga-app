import { useDocumentTitle } from '@hooks/useDocumentTitle'
import { List } from '../components/List/List'

export function InstitutionList() {
  useDocumentTitle('Справочник учебных заведений')

  return <List />
}
