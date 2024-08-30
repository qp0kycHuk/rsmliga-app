type Match = {
  city: EntityId
  date: BitrixDate
  id: EntityId
  judge: string
  location: string
  match_number: string
  number: string
  phase: string
  phase_id: string
  protocol: boolean
  score: string
  score_endgame: null
  stage: string
  stage_id: string
  status: string
  team_1: string
  team_2: string
  video: string
}

type MatchDetail = Match & {
  competition: EntityId
  delegate: EntityId
  assistant_1: EntityId
  assistant_2: EntityId
  city1: EntityId
  city2: EntityId
  conf1: EntityId
  conf2: EntityId
  conference: EntityId
  division: EntityId
  tour: EntityId
  final: string
  group: string
  group_id: EntityId
  group_pf: string
  playoff: string
  stream_link: string
  time: string
}
