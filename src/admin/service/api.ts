import axios from 'axios'

export const rootApi = axios.create({
  baseURL: import.meta.env.VITE_API_ROOT_URL,
})
