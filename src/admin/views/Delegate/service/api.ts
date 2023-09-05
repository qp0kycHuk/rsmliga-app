import axios, { AxiosResponse } from 'axios'

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
