import { PaperClipIcon, PlusIcon } from '@assets/icons/fill'
import { Button, Select } from '@features/ui'
import { useState } from 'react'
import { useReportEditContext } from './ReportEdit.Context'
import { getFileItems } from '@utils/helpers/files'
import { documentsSchema } from '../../service/schema'
import { FileDrop } from 'react-file-drop'
import { docExtention } from '@features/uploader/extentions'
import { filterFiles } from '@features/uploader/helpers'
import { toast } from '@lib/Toast'

interface IDocumentsDialogProps {
  onClose: () => void
}

export function DocumentsDialog({ onClose }: IDocumentsDialogProps) {
  const { report, update } = useReportEditContext()
  const [errors, setErrors] = useState<string[]>([])
  const [selectedFileName, setSelectedFileName] = useState<string>()
  const [selectedFile, setSelectedFile] = useState<File>()

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files?.[0]) {
      setSelectedFile(event.target.files[0])
    }
  }

  function dropHandler(files: FileList | null) {
    if (files?.[0]) {
      const filteredFiles = filterFiles(Array.from(files), [docExtention.regex])

      if (filteredFiles[0]) {
        setSelectedFile(filteredFiles[0])
      } else {
        toast.error('Неверный тип файла!', {
          autoClose: 1500,
          closeButton: false,
        })
      }
    }
  }

  async function submitHandler() {
    const checkErrors = []

    if (!selectedFileName) {
      checkErrors.push('Выберите название')
    }

    if (!selectedFile) {
      checkErrors.push('Загрузите документ')
    }

    setErrors(checkErrors)

    if (!selectedFileName || checkErrors.length > 0) {
      return
    }

    const currentFileItems = report?.documents?.[selectedFileName] || []

    const fileItems = (await getFileItems(Array.from(selectedFile ? [selectedFile] : []))).map(
      (item, index) => ({
        ...item,
        name: (currentFileItems.length + index + 1).toString(),
      })
    )

    update({
      documents: {
        ...report.documents,
        [selectedFileName]: [...currentFileItems, ...fileItems],
      },
    })

    onClose()
  }

  return (
    <div className="relative">
      <div className="p-7 bg-gray rounded-t-xl">
        <div className="text-3xl font-bold text-center">Загрузить документ</div>
      </div>
      <div className="p-16 pt-8 flex flex-col items-start">
        {errors.length > 0 && (
          <div className="bg-red bg-opacity-10 text-red p-4 w-full mb-4">
            {errors.map((text) => (
              <div key={text}>{text}</div>
            ))}
          </div>
        )}

        {selectedFile ? (
          // if file selected show filename and delete button
          <div className="flex items-start">
            <PaperClipIcon className="mr-2 text-xl text-primary mt-0.5" />
            <div>
              {selectedFile.name}
              <Button variant="text" onClick={() => setSelectedFile(undefined)}>
                <div className="underline underline-offset-4">Удалить </div>
              </Button>
            </div>
          </div>
        ) : (
          // if file not selected show add button
          <Button as="label" variant="text" className="mt-4 cursor-pointer">
            <input onChange={changeHandler} type="file" accept="application/*" hidden />
            <PaperClipIcon className="mr-2 text-xl" />
            <div className="underline underline-offset-4">Прикрепить файл</div>
          </Button>
        )}

        <Select
          placeholder="Выберите название файла"
          className="mt-8 w-full"
          inputProps={{
            value: selectedFileName,
            onChange: (event) => setSelectedFileName(event.target.value),
          }}
        >
          {Object.values(documentsSchema).map(({ name, title }) => (
            <option value={name} key={name}>
              {title}
            </option>
          ))}
        </Select>

        <div className="grid grid-cols-2 mt-6 gap-4 w-full">
          <Button onClick={submitHandler}>Добавить</Button>
          <Button variant="light" onClick={onClose}>
            Отмена
          </Button>
        </div>
      </div>

      <FileDrop
        className=""
        targetClassName="filedrop-target absolute -inset-4"
        draggingOverFrameClassName="over-frame"
        draggingOverTargetClassName="over-target"
        onDrop={dropHandler}
      >
        <PlusIcon className="m-auto text-4xl text-primary" />
      </FileDrop>
    </div>
  )
}
