import { gql } from '@apollo/client'
import { TODO_FRAGMENT } from 'shared'

export const UPDATE_TODO_STATUS_MUTATION = gql`
  mutation UpdateStatus($id: String!, $status: String!) {
    updateStatus(id: $id, status: $status) {
      ...Todo
    }
  }
  ${TODO_FRAGMENT}
`
