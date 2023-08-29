import { PaperClipIcon } from '@assets/icons/fill'
import { Button, Select } from '@features/ui'
import { getFileItems } from '@utils/helpers/files'
import { useState } from 'react'
import { useReportEditContext } from './ReportEdit.Context'

interface ITeamDialogProps {
  onClose: () => void
}

export function TeamDialog({ onClose }: ITeamDialogProps) {
  const { report, contest, update } = useReportEditContext()
  const [selectedTeamId, setSelectedTeamId] = useState<EntityId>()
  const [selectedFile, setSelectedFile] = useState<File>()

  const [errors, setErrors] = useState<string[]>([])

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files?.[0]) {
      setSelectedFile(event.target.files[0])
    }
  }

  async function submitHandler(event: React.FormEvent) {
    event.preventDefault()
    setErrors(() => [])

    if (!selectedTeamId) {
      setErrors((prev) => [...prev, 'Выберите команду'])
      return
    }

    if (!selectedFile) {
      setErrors((prev) => [...prev, 'Загрузите фото'])
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
    <form onSubmit={submitHandler}>
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
            <input onChange={changeHandler} type="file" accept="image/*" hidden />
            <PaperClipIcon className="mr-2 text-xl" />
            <div className="underline underline-offset-4">Добавить фото </div>
          </Button>
        )}

        <Select
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
        </Select>

        <div className="grid grid-cols-2 mt-6 gap-4 w-full">
          <Button type="submit">Добавить</Button>
          <Button variant="light" onClick={onClose}>
            Отмена
          </Button>
        </div>
      </div>
    </form>
  )
}
