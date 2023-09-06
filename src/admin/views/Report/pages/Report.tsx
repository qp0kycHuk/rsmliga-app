import { ReportTable } from '../components/ReportTable/ReportTable'
import { ReportFilter } from '../components/ReportFilter'
import { useDocumentTitle } from '@hooks/useDocumentTitle'

export function Report() {
  useDocumentTitle('Отчеты')

  return (
    <>
      <div className="mb-5 text-3xl font-bold">Отчеты</div>
      <ReportFilter />
      <ReportTable />
    </>
  )
}
