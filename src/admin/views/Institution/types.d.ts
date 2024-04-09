interface IInstitution {
  number: number
  id: EntityId
  short_name: string
  full_name: string
  conference: EntityId
  city: EntityId
  type: EntityId
  url: null | string
}
