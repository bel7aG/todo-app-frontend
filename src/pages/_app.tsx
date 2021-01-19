import { useState, useEffect, FC } from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider as StyledThemeProvider, TodoTheme } from 'styled-components'
import { ThemeProvider as MUIThemeProvider } from '@material-ui/styles'
import { SnackbarProvider, SnackbarOrigin } from 'notistack'
import { useApollo } from 'apollo'

import Layout from 'components'
import { GlobalStyle } from 'styles'
import AppProviders from 'context'
import { MUITheme, LightTheme } from 'shared'

const snackbarOrigin: SnackbarOrigin = {
  vertical: `bottom`,
  horizontal: `center`
}

export function reportWebVitals(metric: any) {
  // The metric object ({ id, name, startTime, value, label }) is logged to the console
  if (process.env.NODE_ENV === 'development') if (metric.label === 'web-vital') console.log(metric)
}

const Application: FC<AppProps> = ({ Component, pageProps }) => {
  const apollo = useApollo(pageProps.initialApolloState)
  const [theme, setTheme] = useState<TodoTheme>(LightTheme)

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector(`#jss-server-side`)
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  const triggerTheme = (theme: TodoTheme) => {
    setTheme(theme)
  }

  return (
    <StyledThemeProvider theme={theme}>
      <SnackbarProvider anchorOrigin={snackbarOrigin} hideIconVariant maxSnack={1} autoHideDuration={2500}>
        <MUIThemeProvider theme={MUITheme}>
          <GlobalStyle />
          <ApolloProvider client={apollo}>
            <AppProviders>
              <Layout triggerTheme={triggerTheme}>
                <Component {...pageProps} />
              </Layout>
            </AppProviders>
          </ApolloProvider>
        </MUIThemeProvider>
      </SnackbarProvider>
    </StyledThemeProvider>
  )
}

export default Application
