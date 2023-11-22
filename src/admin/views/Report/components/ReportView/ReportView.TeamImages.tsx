import { CellTooltip } from '@admin/index'
import { useFetchSchools } from '@admin/service/school'
import Fancybox from '@lib/Fancybox'
import { SERVER_URL } from '@utils/index'

interface ITeamImagesProps {
  item: IReport
}

export function TeamImages({ item }: ITeamImagesProps) {
  const { data: schoolsData } = useFetchSchools()

  return (
    <Fancybox className="flex flex-wrap gap-3">
      {item.teams_photo?.map(({ id, fid, src, path, description }) => (
        <div className="relative z-10 w-32 sm:w-48" key={fid || id}>
          <CellTooltip className="text-sm sm:text-lg font-semibold mb-3">
            {schoolsData?.entites[description]?.short_name}
          </CellTooltip>
          <a
            href={(import.meta.env.PROD ? '' : SERVER_URL) + (src || path)}
            data-fancybox="TeamImages"
            data-caption={schoolsData?.entites[description]?.short_name}
            className="relative w-full h-24 sm:h-32 block"
          >
            <img
              className="object-cover w-full h-full rounded-xl"
              src={(import.meta.env.PROD ? '' : SERVER_URL) + (src || path)}
              alt=""
            />
          </a>
        </div>
      ))}
    </Fancybox>
  )
}
