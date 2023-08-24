import { lazy } from 'react'

export const Report = lazy(() =>
  import('./views/Report/Report').then((m) => ({ default: m.Report }))
)
