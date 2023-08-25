import { ReportTable } from './components/ReportTable/ReportTable'
import { ReportFilter } from './components/ReportFilter'

export function Report() {
  return (
    <div>
      <div className="mb-5 text-3xl font-bold">Отчеты</div>

      <ReportFilter />
      <ReportTable />
    </div>
  )
}
