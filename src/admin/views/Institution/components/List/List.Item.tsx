import { Cell, Row } from '@admin/index'
import { useFetchCities } from '@admin/service/cities'
import { useFetchConference } from '@admin/service/conference'
import { useFetchSchoolTypes } from '@admin/service/schoolType'

interface IItemProps {
  item: IInstitution
}

export function Item({ item }: IItemProps) {
  const { data: citiesData } = useFetchCities()
  const { data: conferenceData } = useFetchConference()
  const { data: schoolTypesData } = useFetchSchoolTypes()

  return (
    <Row className="text-xs sm:text-sm">
      <Cell className="w-56">{item.short_name}</Cell>
      <Cell className="w-[440px]">{item.full_name}</Cell>
      <Cell>{conferenceData?.entites[item.conference]?.VALUE}</Cell>
      <Cell>{citiesData?.entites[item.city]?.NAME}</Cell>
      <Cell>{schoolTypesData?.entites[item.type]?.VALUE}</Cell>
    </Row>
  )
}
