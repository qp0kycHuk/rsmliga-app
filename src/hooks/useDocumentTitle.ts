import { useEffect, useRef } from 'react'

export function useDocumentTitle(title?: string, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [title])

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current
      }
    },
    []
  )
}
