import { sleep } from '@utils/helpers/sleep'
import axios from 'axios'
import { createContest, createReport } from './temp.data'

const TIMEOUT = 500

const contests = new Array(5).fill(true).map(createContest)

export function api() {
  const instance = axios.create()

  async function fetchContests(): Promise<IContest[]> {
    await sleep(TIMEOUT)
    return contests
  }

  async function getReportById(id: EntityId): Promise<IReport | undefined> {
    await sleep(TIMEOUT)
    return createReport()
  }

  async function getReportByContestId(contestId: EntityId): Promise<IReport | undefined> {
    await sleep(TIMEOUT)
    return contests.find(({ id }) => id === contestId)?.report
  }

  return {
    fetchContests,
    getReportById,
    getReportByContestId,
  }
}
