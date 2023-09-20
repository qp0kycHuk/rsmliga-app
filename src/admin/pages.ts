import { lazy } from 'react'

export const Report = lazy(() =>
  import('./views/Report/pages/ReportList').then((m) => ({ default: m.ReportList }))
)

export const DelegateAnalitic = lazy(() =>
  import('./views/Delegate/pages/DelegateAnalitic').then((m) => ({ default: m.DelegateAnalitic }))
)

export const DelegateList = lazy(() =>
  import('./views/Delegate/pages/DelegateList').then((m) => ({ default: m.DelegateList }))
)

export const SecretaryList = lazy(() =>
  import('./views/Secretary/pages/SecretaryList').then((m) => ({ default: m.SecretaryList }))
)
