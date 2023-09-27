import { Table, Row, Cell } from '@admin/index'
import { useFetchCities } from '@admin/service/cities'

interface IProps {
  item: ISecretary
}

export function LocationsDialog({ item }: IProps) {
  const { data } = useFetchCities()

  if (!item.locations || item.locations.length == 0) {
    return <div className="text-2xl font-bold mb-6">Не закреплен</div>
  }

  return (
    <>
      <div className="text-2xl font-bold mb-6">Закрепленные города/районы</div>
      <Table>
        <Row className="text-sm font-medium">
          <Cell className="text-center w-14" head>
            №
          </Cell>
          <Cell head>ФИО</Cell>
          <Cell head>Город/район</Cell>
        </Row>
        {item.locations?.map((locationId, index) => (
          <Row className="text-sm " key={index}>
            <Cell className="text-center">{index + 1}</Cell>
            <Cell>
              {item.surname} {item.name} {item.patronymic}
            </Cell>
            <Cell className="w-[366px] max-w-[366px]">{data?.entites[locationId].NAME}</Cell>
          </Row>
        ))}
      </Table>
    </>
  )
}
