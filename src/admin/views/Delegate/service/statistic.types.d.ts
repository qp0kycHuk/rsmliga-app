interface StatisticTournier {
  id: EntityId
  sezon_id: EntityId
  stages_count: number
  roles: {
    mainJudgeRole?: number
    delegateRole?: number
    judgeHelperRole?: number
  }
  match_count: number
  stages: EntityId[]
}

interface StatisticGame {
  date: BitrixDate
  time: string
  location: string
  stage: EntityId
  team_1: string
  team_2: string
  score: string
  role: string
  match_id: EntityId
  match_stage: string
}
