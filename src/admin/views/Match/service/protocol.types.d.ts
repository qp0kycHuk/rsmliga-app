export interface Protocol {
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
  deletes: Sanction[]
  trauma: Trauma[]
  warnings: Sanction[]
}

interface Score {
  team_1: null | string
  team_2: null | string
}

export interface TeamInfo {
  id: string
  name: string
  color: string
  color_name: string
  location: string
  members: Member[]
  preds: string[]
}

export interface Member {
  id: EntityId
  number: string
  avatar: string
  FIO: string
  try: number
}

interface Sanction {
  name: string
  team: string
  text: string
}

interface Trauma {
  name: string
  time: string
  text: string
  help: string
}
