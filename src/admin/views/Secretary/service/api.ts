import { rootApi } from '@admin/service/api'
import { SECRETARIES_PER_PAGE } from '../const'
import { useQuery } from 'react-query'
import { IFetchParams, IFetchResponse } from './api.types'
import { dateToSQLFormatString } from '@utils/helpers/dates'

export const SECRETARY_KEY = 'secretaries'

export async function fetchSecretaries({
  page = 1,
  itemsPerPage = SECRETARIES_PER_PAGE,
  search = '',
  location = '',
  turnier = '',
}: IFetchParams): Promise<IFetchResponse> {
  const { data } = await rootApi.get<IFetchResponse>('/secretary_handler.php', {
    params: {
      action: 'getlist',
      PAGEN_1: page,
      nPageSize: itemsPerPage,
      search,
      location,
      turnier,
    },
  })

  return data
}

export function useFetchSecretaries(params: IFetchParams) {
  return useQuery([SECRETARY_KEY, params], fetchSecretaries.bind(null, params), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
}

export async function upsertSecretary(data: ISecretary) {
  const formData = new FormData()

  if (data.id) {
    formData.append('ID', data.id as string)
    formData.append('USER_ID', data.user_id as string)
    formData.append('action', 'edit')
  } else {
    formData.append('action', 'save')
  }

  if (data.imageFile) {
    formData.append('PERSONAL_PHOTO', data.imageFile)
  } else if (data.image_src) {
    formData.append('PERSONAL_PHOTO', data.image_src)
  } else {
    formData.append('PERSONAL_PHOTO', '')
  }

  formData.append('NAME', data.name.trim() || '')
  formData.append('LAST_NAME', data.surname.trim() || '')
  formData.append('SECOND_NAME', data.patronymic.trim() || '')
  formData.append('EMAIL', data.email || '')
  formData.append('PERSONAL_BIRTHDAY', dateToSQLFormatString(new Date(data.birthdate)))
  formData.append('CATEGORY', data.category_id || '')
  // formData.append('LOCATION', data.location || '')
  formData.append('COMMENT', data.comment || '')
  formData.append('SEX', (data.sex as string) || '')
  formData.append('PHONE', data.phone || '')
  formData.append('EDUCATION', (data.education_id as string) || '')
  formData.append('EDUCATION', (data.education_id as string) || '')

  Object.entries(data.documents || {}).forEach(([key, item]) => {
    if (!item) return

    const name = key

    if (item.file) {
      formData.append(name, item.file)
    } else if (item.path) {
      formData.append(name, item.path)
    } else {
      formData.append(name, '')
    }
  })

  data.locations.forEach((locationId) => {
    formData.append('LOCATION[]', locationId as string)
  })

  return await rootApi.post<IItemResponse<ISecretary>>('/secretary_handler.php', formData)
}
