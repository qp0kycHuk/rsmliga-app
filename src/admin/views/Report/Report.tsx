import { ReportTable } from './ReportTable/ReportTable'
import { ReportFilter } from './ReportFilter'

export function Report() {
  return (
    <div>
      <div className="mb-5 text-3xl font-bold">Отчеты</div>

      <ReportFilter />
      <ReportTable />
    </div>
  )
}
