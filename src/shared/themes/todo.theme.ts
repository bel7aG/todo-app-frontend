import baseStyled, { TodoTheme, ThemedStyledInterface, css as StyledCSS, keyframes as frames } from 'styled-components'

declare module 'styled-components' {
  export interface TodoTheme {
    border: {
      wsc: string // width style color
      color: string
      radius: string
    }

    colors: (
      opacity?: number
    ) => {
      primary: string
      secondary: string
    }

    layout: {
      colors: {
        body: string
        header: string
        text: string
        textOpposite: string
      }
    }

    modal: {
      colors: {
        background: string
      }
    }

    skeleton: {
      background: string
    }

    transition: string
  }
}

export const styled = baseStyled as ThemedStyledInterface<TodoTheme>
export const css = StyledCSS
export const keyframes: TodoTheme | any = frames
