import { lazy } from 'react'

export const Report = lazy(() =>
  import('./views/Report/Report').then((m) => ({ default: m.Report }))
)

export const DelegateAnalitic = lazy(() =>
  import('./views/Delegate/pages/DelegateAnalitic').then((m) => ({ default: m.DelegateAnalitic }))
)

export const DelegateList = lazy(() =>
  import('./views/Delegate/pages/DelegateList').then((m) => ({ default: m.DelegateList }))
)
