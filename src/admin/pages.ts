import { lazy } from 'react'

export const Report = lazy(() => import('./views/Report').then((m) => ({ default: m.Report })))
