interface IItem {
  id?: EntityId
  ID?: EntityId
  Id?: EntityId
  fid?: EntityId
}

// type IParams = any extends IItem

export function id(item: IItem) {
  return item.id || item.ID || item.Id || item.fid
}
