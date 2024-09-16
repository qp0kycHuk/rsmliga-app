interface Protocol {
  conference_id: EntityId
  competition_id: EntityId
  competition_name: string
  stage_id: EntityId
  stage_name: string
  area: string
  area_id: EntityId
  location: string
  date: BitrixDate
  time: string
  judge: string
  judge_id: EntityId
  delegate: string
  delegate_id: EntityId
  helper_1: string
  helper_1_id: EntityId
  helper_2: string
  helper_2_id: EntityId
  score_first_half: Score
  total_score: Score
  score_overtime: Score
  team_1_info: TeamInfo
  team_2_info: TeamInfo
  other_remarks: string
  deletes: Sanction[]
  trauma: Trauma[]
  warnings: Sanction[]
  realizations: Achivement[]
  penalties: Achivement[]
  drop_goals: Achivement[]
  overtime: BitrixBoolean
  tour: EntityId
  division: EntityId
}

interface Score {
  team_1?: string
  team_2?: string
}

interface TeamInfo {
  id: string
  name: string
  color: string
  color_name: string
  location: string
  members: Member[]
  preds: string[]
}

interface Member {
  id: EntityId
  number: string
  avatar: string
  FIO: string
  try: number
}

interface Sanction {
  player_id: EntityId
  name: string
  team: string
  time: string
  text: string
}

interface Trauma {
  player_id: EntityId
  name: string
  time: string
  text: string
  help: string
}

interface Achivement {
  player_id: EntityId
  name: string
  team: string
  time: string
}
