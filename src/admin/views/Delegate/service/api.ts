import { sleep } from '@utils/helpers/sleep'
import axios, { AxiosResponse } from 'axios'
import { createDelegate } from './temp.data'

const TIMEOUT = 500

const delegates = new Array(5).fill(true).map(createDelegate)

export function api() {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_ROOT_URL,
  })

  async function fetchDelegates(): Promise<AxiosResponse<IListResponse<IDelegate>>> {
    return await instance.get('/list_of_judges.php')
  }

  return {
    fetchDelegates,
  }
}
