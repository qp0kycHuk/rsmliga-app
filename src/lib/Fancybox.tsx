import React, { useRef, useEffect } from 'react'
import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import { OptionsType } from '@fancyapps/ui/types/Fancybox/options'

interface IProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  options?: Partial<OptionsType> | undefined
  selector?: string
}

function Fancybox({ options, selector, ...props }: IProps) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current

    NativeFancybox.bind(container, selector || '[data-fancybox]', options || {})

    return () => {
      NativeFancybox.unbind(container)
      NativeFancybox.close()
    }
  })

  return <div {...props} ref={containerRef} />
}

export default Fancybox
