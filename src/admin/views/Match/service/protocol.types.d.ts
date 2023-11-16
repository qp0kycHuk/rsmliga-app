interface Protocol {
  competition_id: EntityId
  competition_name: string
  stage_id: EntityId
  stage_name: string
  area_id: EntityId
  location: string
  date: BitrixDate
  time: string
  judge: string
  delegate: string
  helper_1: string
  helper_2: string
  score_first_half: Score
  total_score: Score
  score_overtime: Score
  team_1_info: TeamInfo
  team_2_info: TeamInfo
  other_remarks: null
}

interface Score {
  team_1: null | string
  team_2: null | string
}

interface TeamInfo {
  id: string
  name: string
  color: string
  members: any[]
}
