import { useDocumentTitle } from '@hooks/useDocumentTitle'
import { List } from '../components/List/List'

export function MatchList() {
  useDocumentTitle('Матчи')

  return <List />
}
