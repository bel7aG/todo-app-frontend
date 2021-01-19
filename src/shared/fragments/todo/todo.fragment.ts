import { gql } from '@apollo/client'

export const TODO_FRAGMENT = gql`
  fragment Todo on TodoType {
    id
    title
    description
    status
  }
`
