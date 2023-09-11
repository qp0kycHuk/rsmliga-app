import { useDocumentTitle } from '@hooks/useDocumentTitle'
import { List } from '../components/List/List'

export function ReportList() {
  useDocumentTitle('Список отчетов')

  return <List />
}
