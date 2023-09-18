import { Images } from './ReportEdit.Images'

export function ContestImages() {
  return (
    <Images max={3} keyOfImages="competition_photo">
      <div className="text-lg font-semibold">Фото с соревнований</div>
    </Images>
  )
}
