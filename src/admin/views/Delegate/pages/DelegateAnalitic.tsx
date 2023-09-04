import { useDocumentTitle } from '@hooks/useDocumentTitle'
import { Analitic } from '../components/Analitic/Analitic'

export function DelegateAnalitic() {
  useDocumentTitle('Аналитика по сезонам')

  return <Analitic />
}
