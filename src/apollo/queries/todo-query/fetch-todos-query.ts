import { gql } from '@apollo/client'
import { TODO_FRAGMENT } from 'shared'

export const FETCH_TODOS_QUERY = gql`
  query Todos {
    todos {
      ...Todo
    }
  }
  ${TODO_FRAGMENT}
`
