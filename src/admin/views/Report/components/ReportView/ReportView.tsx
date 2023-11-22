import { Separator } from '@admin/components/Separator'
import { ContestImages } from './ReportView.ContestImages'
import { ReportViewDocuments } from './ReportView.Documents'
import { GeneralImages } from './ReportView.GeneralImages'
import { TeamImages } from './ReportView.TeamImages'
import { FieldView } from '@admin/components/FieldView'

interface IReportViewProps {
  item: IReport
}

export function ReportView({ item }: IReportViewProps) {
  return (
    <>
      <div className="mb-8 text-2xl font-bold">Отчет о проведении соревнований</div>

      <div className="grid lg:grid-cols-2 gap-4">
        <FieldView className="lg:col-span-2 ">
          <div className="sm:text-lg leading-none">
            <span className="font-semibold">Соревнование: </span>
            {item.competition}
          </div>
        </FieldView>
        <FieldView className="lg:col-span-2 ">
          <div className="sm:text-lg leading-none">
            <span className="font-semibold">Этап: </span>
            {item.stage}
          </div>
        </FieldView>
        <FieldView className="">
          <div className="sm:text-lg leading-none">
            <span className="font-semibold">Город/район: </span>
            {item.location}
          </div>
        </FieldView>
        <FieldView className="">
          <div className="sm:text-lg leading-none">
            <span className="font-semibold">Сезон: </span>
            {item.season}
          </div>
        </FieldView>
        <FieldView className="">
          <div className="sm:text-lg leading-none">
            <span className="font-semibold">Место проведения: </span>
            {item.area}
          </div>
        </FieldView>
        <FieldView className="">
          <div className="sm:text-lg leading-none">
            <span className="font-semibold">Дата проведения: </span>
            {new Date(item.date).toLocaleDateString()}
          </div>
        </FieldView>
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
      <FieldView className="">
        <div className="sm:text-lg leading-none">
          <span className="font-semibold">Комментарий: </span>
          {item.comment}
        </div>
      </FieldView>
    </>
  )
}
