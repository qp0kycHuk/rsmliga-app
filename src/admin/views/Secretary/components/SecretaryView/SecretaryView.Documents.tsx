import { FileFieldView } from '@admin/components/FileField/FileField'
import { documentsSchema } from '../../service/schema'
import { FileViewSingle } from '@admin/components/FileField/FileViewSingle'

interface IDocumentsProps {
  item: ISecretary
}

export function Documents({ item }: IDocumentsProps) {
  return (
    <>
      <div className="mb-5 text-lg font-semibold">Файлы и документы</div>
      {Object.entries(documentsSchema)
        ?.filter(([key]) => item.documents?.[key as SecretaryDocName]?.path)
        .map(([key, schema]) => (
          <FileViewSingle
            key={key}
            schema={schema}
            doc={item.documents?.[key as SecretaryDocName]}
          ></FileViewSingle>
        ))}
    </>
  )
}
