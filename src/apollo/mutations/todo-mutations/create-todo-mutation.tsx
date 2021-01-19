import { gql } from '@apollo/client'
import { TODO_FRAGMENT } from 'shared'

export const CREATE_TODO_MUTATION = gql`
  mutation CreateTodo($input: TodoInput!) {
    createTodo(input: $input) {
      ...Todo
    }
  }
  ${TODO_FRAGMENT}
`
