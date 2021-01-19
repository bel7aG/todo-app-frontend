import { useMemo } from 'react'
import { NextPage } from 'next'
import { useSnackbar } from 'notistack'
import { useMutation, useQuery, Reference } from '@apollo/client'

import { useModal } from 'context'
import { Head } from 'shared'
import { FETCH_TODOS_QUERY, UPDATE_TODO_STATUS_MUTATION } from 'apollo'
import { List, Modal, Skeleton } from 'components'
import { STodoPage } from 'styles'
import { ITodo } from 'interfaces'
import { CREATE_TODO_FORM } from 'types'
import { CreateTodoForm } from 'forms'

const Home: NextPage = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { pickedForm, handleModal } = useModal()

  const { data = [], loading } = useQuery(FETCH_TODOS_QUERY, {
    // pollInterval: 3500,
    onError: () => {
      enqueueSnackbar('Connection problem', {
        variant: 'error'
      })
    },
    partialRefetch: true
  })

  const [updateStatus] = useMutation(UPDATE_TODO_STATUS_MUTATION, {
    onCompleted: () => {
      handleModal(false)
      enqueueSnackbar('moved successfully')
    },

    update: (cache, { data: { updateStatus: newTodo } }) => {
      cache.modify({
        fields: {
          todos(existingTodos = [], { readField }) {
            return [...existingTodos.filter((spaceRef: Reference) => newTodo.id !== readField('id', spaceRef)), newTodo]
          }
        }
      })
    },
    onError: ({ message }) => {
      enqueueSnackbar(message, {
        variant: 'error'
      })
    }
  })

  const todoColumn = useMemo(() => data?.todos?.filter(({ status }: ITodo) => status === 'TODO') || [], [data])
  const doneColumn = useMemo(() => data?.todos?.filter(({ status }: ITodo) => status === 'DONE') || [], [data])

  const handleAddTodo = () => {
    handleModal(true, CREATE_TODO_FORM)
  }

  const renderPickedForm = () => {
    return <CreateTodoForm />
  }

  const handleToDone = (id: string) => {
    updateStatus({
      variables: { id, status: 'DONE' }
    })
  }

  return (
    <>
      <Head pageTitle="HOME" />

      <Modal title={pickedForm.title || ''}>{renderPickedForm()}</Modal>

      <Skeleton tag="div" loading={loading} className="page">
        <STodoPage>
          <div>
            <List title="todo" items={todoColumn} isTodo handleAddTodo={handleAddTodo} handleToDone={handleToDone} />
            <List title="done" color="#22df70" items={doneColumn} />
          </div>
        </STodoPage>
      </Skeleton>
    </>
  )
}

export default Home
