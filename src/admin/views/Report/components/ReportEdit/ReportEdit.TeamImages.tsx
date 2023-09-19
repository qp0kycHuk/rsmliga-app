import { Button, Dialog } from '@features/ui'
import { useReportEditContext } from './ReportEdit.Context'
import { CameraIcon, CrossIcon } from '@assets/icons/fill'
import { useToggle } from '@hooks/useToggle'
import { TeamImagesDialog } from './ReportEdit.TeamImagesDialog'
import { SERVER_URL } from '@utils/index'
import { useFetchSchools } from '@admin/service/school'
import { CellTooltip } from '@admin/index'

export function TeamImages() {
  const { report, update } = useReportEditContext()
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)

  const { data: schoolsData } = useFetchSchools({
    stage: report.stage_id,
    competition: report.competition_id,
  })

  function removeHandler(removeId: EntityId) {
    update({
      teams_photo: (report.teams_photo || []).filter(({ id, fid }) => removeId != (fid || id)),
    })
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {report?.teams_photo?.map(({ id, fid, src, path, description, file }) => (
          <div className="relative z-10 w-48" key={fid || id}>
            <CellTooltip className="text-lg font-semibold mb-3">
              {schoolsData?.entites[description]?.short_name}
            </CellTooltip>
            <div className="relative w-full h-32">
              <img
                className="object-cover w-full h-full rounded-xl"
                src={(file ? '' : SERVER_URL) + (src || path)}
                alt=""
              />

              <Button
                onClick={() => removeHandler((fid || id) as EntityId)}
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
          type="button"
          onClick={openDialog}
          className="relative z-10 flex h-32 transition cursor-pointer bg-primary bg-opacity-10 hover:bg-opacity-20 w-48 rounded-xl self-end flex-col items-center justify-center "
        >
          <CameraIcon className="text-5xl text-primary" />
          <div className="text-lg text-primary">Добавить</div>
        </button>
      </div>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} className="max-w-lg w-full ">
        <TeamImagesDialog onClose={closeDialog} />
      </Dialog>
    </>
  )
}
