import { ReactNode, FC } from 'react'
import { ModalProvider } from './modal-context'
import { ThemeProvider } from './theme-context'

interface AppProvidersProps {
  children: ReactNode
}

export const AppProviders: FC<AppProvidersProps> = ({ children }) => (
  <ThemeProvider>
    <ModalProvider>{children}</ModalProvider>
  </ThemeProvider>
)
