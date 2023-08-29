import { ReportEditImages } from './ReportEdit.Images'

export function ReportEditContestImages() {
  return (
    <ReportEditImages max={3} keyOfImages="contestImages">
      <div className="text-lg font-semibold">Фото с соревнований</div>
    </ReportEditImages>
  )
}
