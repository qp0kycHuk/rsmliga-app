import { Images } from './ReportEdit.Images'

export function GeneralImages() {
  return (
    <Images max={5} keyOfImages="group_photos">
      <div className="sm:text-lg font-semibold">Общее фото</div>
    </Images>
  )
}
