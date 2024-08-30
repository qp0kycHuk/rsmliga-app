export function getIsXMLId<T extends Record<string, string>>(ids: T, id: string) {
  return Object.keys(ids).reduce<Record<keyof T, boolean>>((acc, current) => {
    const key = current as keyof T
    acc[key] = id === ids[key]
    return acc
  }, {} as Record<keyof T, boolean>)
}
