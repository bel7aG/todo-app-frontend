import { useEffect, useRef, memo, FC, ReactNode, RefObject } from 'react'
import { TodoTheme } from 'styled-components'

import { useTheme } from 'context'
import { Header } from 'components'
import { SLayout } from './SLayout'

export interface LayoutProps {
  children: ReactNode
  triggerTheme: (theme: TodoTheme) => void
}

const Layout: FC<LayoutProps> = ({ children, triggerTheme }) => {
  const layoutRef = useRef<HTMLDivElement | any>() as RefObject<HTMLDivElement>

  const { theme } = useTheme()

  useEffect(() => {
    triggerTheme(theme)
  }, [theme])

  return (
    <SLayout ref={layoutRef}>
      <Header />
      <main>{children}</main>
    </SLayout>
  )
}

export default memo(Layout)
