import { Button, Dialog } from '@features/ui'
import { useReportEditContext } from './ReportEdit.Context'
import { CameraIcon, CrossIcon } from '@assets/icons/fill'
import { useToggle } from '@hooks/useToggle'
import { TeamDialog } from './ReportEdit.TeamDialog'

export function TeamImages() {
  const { report, contest, update } = useReportEditContext()
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)

  function removeHandler(teamId: EntityId) {
    update({
      teamsImages: (report.teamsImages || []).filter(({ team }) => teamId != team.id),
    })
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {report?.teamsImages?.map(({ team, image }) => (
          <div className="relative z-10 w-48" key={team.id}>
            <div className="text-lg font-semibold mb-3">{team.name}</div>
            <div className="relative w-full h-32">
              <img className="object-cover w-full h-full rounded-xl" src={image.src} alt="" />

              <Button
                onClick={() => removeHandler(team.id)}
                className="absolute rounded-full right-1 top-1"
                color="red"
                size="xs"
                variant="whitebg"
                icon
              >
                <CrossIcon />
              </Button>
            </div>
          </div>
        ))}
        <button
          onClick={openDialog}
          className="relative z-10 flex h-32 transition cursor-pointer bg-primary bg-opacity-10 hover:bg-opacity-20 w-48 rounded-xl self-end flex-col items-center justify-center "
        >
          <CameraIcon className="text-5xl text-primary" />
          <div className="text-lg text-primary">Добавить</div>
        </button>
      </div>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} className="max-w-lg w-full ">
        <TeamDialog onClose={closeDialog} />
      </Dialog>
    </>
  )
}
