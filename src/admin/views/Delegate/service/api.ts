import { useQuery } from 'react-query'
import { DELEGATES_PER_PAGE } from '../const'
import { rootApi } from '@admin/service/api'
import { dateToSQLFormatString } from '@utils/helpers/dates'

export async function fetchDelegates({
  page = 1,
  itemsPerPage = DELEGATES_PER_PAGE,
  search = '',
  sezon = '',
  turnier = '',
  stage = '',
}: IFetchParams): Promise<IFetchResponse> {
  const { data } = await rootApi.get<IFetchResponse>('/list_of_judges.php', {
    params: {
      action: 'getlist',
      PAGEN_1: page,
      nPageSize: itemsPerPage,
      search,
      sezon,
      turnier,
      stage,
    },
  })

  return data
}

export function useFetchDelegates(params: IFetchParams) {
  return useQuery(['delegates', params], fetchDelegates.bind(null, params), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
}

export async function upsertDelegate(data: IDelegate) {
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

  formData.append('NAME', data.name || '')
  formData.append('LAST_NAME', data.surname || '')
  formData.append('SECOND_NAME', data.patronymic || '')
  formData.append('EMAIL', data.email || '')
  formData.append('PERSONAL_BIRTHDAY', dateToSQLFormatString(new Date(data.birthdate)))
  formData.append('CATEGORY', data.category || '')
  formData.append('LOCATION', data.location || '')
  formData.append('INFO', data.comment || '')
  formData.append('SEX', data.sex || '')
  formData.append('PHONE', data.phone || '')

  Object.entries(data.documents || {}).forEach(([key, items]) => {
    if (!items) return

    const name = key + (typeof items !== 'string' && items.length > 1 ? '[]' : '')

    if (!items) {
      formData.append(name, '')
    } else if (typeof items === 'string') {
      formData.append(name, items)
    } else {
      items.forEach?.(({ file }) => {
        if (file) {
          formData.append(name, file)
        }
      })
    }
  })

  // formData.append('EDUCATION', 'test')

  return await rootApi.post<IItemResponse<IDelegate>>('/judge_handler.php', formData)
}
