import { FileFieldView } from '@admin/components/FileField/FileField'
import { documentsSchema } from '../../service/schema'

interface IDocumentsProps {
  item: IDelegate
}

export function Documents({ item }: IDocumentsProps) {
  return (
    <>
      <div className="mb-5 text-lg font-semibold">Файлы и документы</div>
      {Object.entries(documentsSchema)
        ?.filter(
          ([key, schema]) => schema.required || item.documents?.[key as DelegateDocName]?.length
        )
        .map(([key, schema]) => (
          <FileFieldView
            key={key}
            schema={schema}
            docs={item.documents?.[key as DelegateDocName] || []}
          ></FileFieldView>
        ))}
    </>
  )
}
