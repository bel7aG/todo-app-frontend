import { TodoTheme } from 'styled-components'

export const DarkTheme: TodoTheme = {
  border: {
    wsc: `1px solid #6EC1E4`,
    color: '#000',
    radius: '4px'
  },

  colors: (opacity: number = 1) => ({
    primary: `rgba(110, 193, 228, ${opacity})`, //cyan
    secondary: `rgba(84, 89, 95, ${opacity})` // green
  }),

  layout: {
    colors: {
      body: '#272726',
      text: '#05386B',
      textOpposite: '#ffffff'
    }
  },

  transition: 'cubic-bezier(0.73, 0.12, 0.24, 0.99)'
}

export type DarkTheme = typeof DarkTheme
