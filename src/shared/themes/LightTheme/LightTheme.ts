import { TodoTheme } from 'styled-components'

export const LightTheme: TodoTheme = {
  border: {
    wsc: `1px solid #dbdbdb`,
    color: '#dbdbdb',
    radius: '4px'
  },

  colors: (opacity: number = 1) => ({
    primary: `rgba(3, 155, 229, ${opacity})`,
    secondary: `rgba(84, 89, 95, ${opacity})`
  }),

  layout: {
    colors: {
      body: '#fafafa',
      header: '#ffffff',
      text: '#272224',
      textOpposite: '#ffffff'
    }
  },

  modal: {
    colors: {
      background: '#fdfdfd'
    }
  },

  transition: 'cubic-bezier(0.73, 0.12, 0.24, 0.99)'
}

export type LightTheme = typeof LightTheme
