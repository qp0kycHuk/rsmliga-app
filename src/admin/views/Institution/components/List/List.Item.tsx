import { Cell, Row } from '@admin/index'
import { useFetchCities } from '@admin/service/cities'
import { useFetchConference } from '@admin/service/conference'
import { useFetchSchoolTypes } from '@admin/service/schoolType'
import classNames from 'classnames'

interface IItemProps {
  item: IInstitution
}

export function Item({ item }: IItemProps) {
  const { data: citiesData } = useFetchCities()
  const { data: conferenceData } = useFetchConference()
  const { data: schoolTypesData } = useFetchSchoolTypes()

  return (
    <Row className="text-xs sm:text-sm">
      <Cell className="w-56">
        <a
          className={classNames('block', item.url ? 'hover:underline' : 'cursor-default')}
          href={item.url || 'javascript:;'}
        >
          {item.short_name}
        </a>
      </Cell>
      <Cell className="w-[440px]">
        <a
          className={classNames('block', item.url ? 'hover:underline' : 'cursor-default')}
          href={item.url || 'javascript:;'}
        >
          {item.full_name}
        </a>
      </Cell>
      <Cell>{conferenceData?.entites[item.conference]?.VALUE}</Cell>
      <Cell>{citiesData?.entites[item.city]?.VALUE}</Cell>
      <Cell>{schoolTypesData?.entites[item.type]?.VALUE}</Cell>
    </Row>
  )
}
