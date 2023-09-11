import { PaperClipIcon, PlusIcon } from '@assets/icons/fill'
import { Button, DialogErrors, DialogHeader, DialogTitle, Select, SelectField } from '@features/ui'
import { getFileItems } from '@utils/helpers/files'
import { useState } from 'react'
import { useReportEditContext } from './ReportEdit.Context'
import { FileDrop } from 'react-file-drop'
import { filterFiles } from '@features/uploader/helpers'
import { imageExtention } from '@features/uploader/extentions'
import { toast } from '@lib/Toast'

interface ITeamImagesDialogProps {
  onClose: () => void
}

export function TeamImagesDialog({ onClose }: ITeamImagesDialogProps) {
  const { report, contest, update } = useReportEditContext()
  const [selectedTeamId, setSelectedTeamId] = useState<EntityId>()
  const [selectedFile, setSelectedFile] = useState<File>()

  const [errors, setErrors] = useState<string[]>([])

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files?.[0]) {
      setSelectedFile(event.target.files[0])
    }
  }

  function dropHandler(files: FileList | null) {
    if (files?.[0]) {
      const filteredFiles = filterFiles(Array.from(files), [imageExtention.regex])

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

  async function submitHandler(event: React.FormEvent) {
    event.preventDefault()
    const checkErrors = []

    if (!selectedTeamId) {
      checkErrors.push('Выберите команду')
    }

    if (!selectedFile) {
      checkErrors.push('Загрузите фото')
    }

    setErrors(checkErrors)

    if (checkErrors.length > 0) {
      return
    }

    const fileItems = await getFileItems(Array.from(selectedFile ? [selectedFile] : []))
    const selectedTeam = contest.teams.find(({ id }) => id == selectedTeamId) as ITeam

    let updatedItems

    const existItem = report?.teamsImages?.find(({ team }) => team.id == selectedTeam?.id)

    if (existItem) {
      updatedItems = report?.teamsImages?.map((item) => {
        if (item.team.id !== selectedTeam.id) return item

        return {
          team: selectedTeam,
          image: fileItems[0],
        }
      })
    } else {
      updatedItems = [
        ...(report.teamsImages || []),
        {
          team: selectedTeam,
          image: fileItems[0],
        },
      ]
    }

    update({
      teamsImages: updatedItems,
    })

    onClose()
  }

  return (
    <div className="relative">
      <DialogHeader>
        <DialogTitle>Загрузить документ</DialogTitle>
      </DialogHeader>
      <div className="p-16 pt-8 flex flex-col items-start">
        <DialogErrors errors={errors} />

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
            <input onChange={changeHandler} type="file" accept="image/*" hidden />
            <PaperClipIcon className="mr-2 text-xl" />
            <div className="underline underline-offset-4">Добавить фото </div>
          </Button>
        )}

        <SelectField
          placeholder="Выберите команду"
          className="mt-8 w-full"
          inputProps={{
            value: selectedTeamId,
            onChange: (event) => setSelectedTeamId(event.target.value),
          }}
        >
          {contest.teams.map(({ id, name }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </SelectField>

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
