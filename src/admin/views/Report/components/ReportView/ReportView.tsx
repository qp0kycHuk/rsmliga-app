import { Separator } from '../../../../components/Separator'
import { ContestImages } from './ReportView.ContestImages'
import { ReportViewDocuments } from './ReportView.Documents'
import { GeneralImages } from './ReportView.GeneralImages'
import { TeamImages } from './ReportView.TeamImages'

interface IReportViewProps {
  item: IReport
}

export function ReportView({ item }: IReportViewProps) {
  return (
    <>
      <div className="mb-8 text-2xl font-bold">Отчет о проведении соревнований</div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 p-4 rounded-md bg-gray bg-opacity-40">
          <div className="text-lg leading-none">
            <span className="font-semibold">Соревнование: </span>
            {item.competition}
          </div>
        </div>
        <div className="col-span-2 p-4 rounded-md bg-gray bg-opacity-40">
          <div className="text-lg leading-none">
            <span className="font-semibold">Этап: </span>
            {item.stage}
          </div>
        </div>
        <div className="p-4 rounded-md bg-gray bg-opacity-40">
          <div className="text-lg leading-none">
            <span className="font-semibold">Город/район: </span>
            {item.location}
          </div>
        </div>
        <div className="p-4 rounded-md bg-gray bg-opacity-40">
          <div className="text-lg leading-none">
            <span className="font-semibold">Сезон: </span>
            {item.season}
          </div>
        </div>
        <div className="p-4 rounded-md bg-gray bg-opacity-40">
          <div className="text-lg leading-none">
            <span className="font-semibold">Место проведения: </span>
            {item.area}
          </div>
        </div>
        <div className="p-4 rounded-md bg-gray bg-opacity-40">
          <div className="text-lg leading-none">
            <span className="font-semibold">Дата проведения: </span>
            {new Date(item.date).toLocaleDateString()}
          </div>
        </div>
      </div>

      <Separator />
      <ReportViewDocuments item={item} />

      <Separator />
      <TeamImages item={item} />

      <Separator />
      <GeneralImages item={item} />

      <Separator />
      <ContestImages item={item} />

      <Separator />
      <div className="p-4 rounded-md bg-gray bg-opacity-40">
        <div className="text-lg leading-none">
          <span className="font-semibold">Комментарий: </span>
          {item.comment}
        </div>
      </div>
    </>
  )
}
