import { TodoTheme } from 'styled-components'

export const LightTheme: TodoTheme = {
  border: {
    wsc: `1px solid #dbdbdb`,
    color: '#dbdbdb',
    radius: '4px'
  },

  colors: (opacity: number = 1) => ({
    primary: `rgba(3, 155, 229, ${opacity})`, //cyan
    secondary: `rgba(84, 89, 95, ${opacity})` // green
  }),

  layout: {
    colors: {
      body: '#fafafa',
      header: '#ffffff',
      text: '#272224',
      textOpposite: '#ffffff'
    }
  },

  transition: 'cubic-bezier(0.73, 0.12, 0.24, 0.99)'
}

export type LightTheme = typeof LightTheme
