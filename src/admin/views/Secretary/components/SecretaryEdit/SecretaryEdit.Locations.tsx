import { useFetchCities } from '@admin/service/cities'
import { useSecretaryEditContext } from './SecretaryEdit.Context'
import { Button, Select } from '@features/ui'
import { CrossIcon } from '@assets/icons/fill'
import { id } from '@utils/helpers/id'
import { canEditLocationsGroups } from '../../const'
import { useUserAccess } from '@admin/hooks/useUserAccess'

export function Locations() {
  const { item, update } = useSecretaryEditContext()
  const { isAccess } = useUserAccess(canEditLocationsGroups)
  const { data } = useFetchCities()

  const filteredItems =
    data?.items.filter((city) => !item.locations?.includes?.(id(city) as EntityId)) || []

  return (
    <div className="space-y-4">
      {item.locations?.map?.((id, index) => (
        <div className="flex gap-3" key={id}>
          <div className="p-4 rounded-md bg-gray bg-opacity-40 flex-grow">
            <div className="text-lg leading-none">
              <span className="font-semibold">{index + 1}. Город/район: </span>
              {data?.entites[id].VALUE}
            </div>
          </div>
          {isAccess && (
            <Button
              color="red"
              variant="light"
              icon
              onClick={() =>
                update({
                  locations: item.locations?.filter?.((cityId) => cityId != id) || [],
                })
              }
            >
              <CrossIcon />
            </Button>
          )}
        </div>
      ))}

      {isAccess && (
        <div>
          <Select
            placeholder="Добавить город/район"
            className="w-full"
            value=""
            onChange={(event) =>
              update({
                locations: [...(item.locations || []), event.target.value],
              })
            }
          >
            {filteredItems.map((city) => (
              <option key={id(city)} value={id(city)}>
                {city.VALUE}
              </option>
            ))}
          </Select>
        </div>
      )}
    </div>
  )
}
