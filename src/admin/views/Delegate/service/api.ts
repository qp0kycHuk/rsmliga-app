import axios, { AxiosResponse } from 'axios'
import { DELEGATES_PER_PAGE } from '../const'

export function api() {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_ROOT_URL,
  })

  async function fetchDelegates({
    page = 1,
    itemsPerPage = DELEGATES_PER_PAGE,
  }: IFetchParams): Promise<AxiosResponse<IFetchResponse>> {
    return await instance.get('/list_of_judges.php', {
      params: {
        action: 'getlist',
        PAGEN_1: page,
        nPageSize: itemsPerPage,
      },
    })
  }

  return {
    fetchDelegates,
  }
}

interface IFetchParams {
  page: number
  itemsPerPage?: number
}

interface IFetchResponse extends IListResponse<IDelegate> {
  NavPageCount: number
}
