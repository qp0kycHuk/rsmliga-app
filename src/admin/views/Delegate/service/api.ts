import { sleep } from '@utils/helpers/sleep'
// import axios from 'axios'
import { createDelegate } from './temp.data'

const TIMEOUT = 500

const delegates = new Array(5).fill(true).map(createDelegate)

export function api() {
  // const instance = axios.create()

  async function fetchDelegates(): Promise<IDelegate[]> {
    await sleep(TIMEOUT)
    return delegates
  }

  return {
    fetchDelegates,
  }
}
