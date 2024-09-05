import type { URLSearchParamsInit } from 'react-router-dom'

export function changeSearchParams(
  entries: [string, string][],
  saveAll: boolean = false,
  savedKeys: string[] = []
) {
  return (prev: URLSearchParams) => {
    const prevParams = Object.fromEntries(prev)
    const params: URLSearchParamsInit = {}

    if (saveAll) {
      Object.entries(prevParams).forEach(([k, v]) => (params[k] = v))
    } else {
      savedKeys.forEach((k) => {
        if (prevParams[k]) {
          params[k] = prevParams[k]
        }
      })
    }

    for (const [key, value] of entries) {
      params[key] = value
    }

    return params
  }
}
