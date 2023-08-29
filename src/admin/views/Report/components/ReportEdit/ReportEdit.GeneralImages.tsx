import { ReportEditImages } from './ReportEdit.Images'

export function ReportEditGeneralImages() {
  return (
    <ReportEditImages max={5} keyOfImages="generalImages">
      <div className="text-lg font-semibold">Общее фото</div>
    </ReportEditImages>
  )
}
