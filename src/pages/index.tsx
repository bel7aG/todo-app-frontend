import { useMemo } from 'react'
import { NextPage } from 'next'
import { useSnackbar } from 'notistack'

import { FETCH_TODOS_QUERY } from 'apollo'
import { Head } from 'shared'
import { List, Modal, Skeleton } from 'components'
import { STodoPage } from 'styles'
import { useQuery } from '@apollo/client'
import { ITodo } from 'interfaces'
import { useModal } from 'context'
import { CREATE_TODO_FORM } from 'types'

const Home: NextPage = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { pickedForm, handleModal } = useModal()

  const { data = [], loading } = useQuery(FETCH_TODOS_QUERY, {
    pollInterval: 3500,
    onError: () => {
      enqueueSnackbar('Connection problem', {
        variant: 'error'
      })
    },
    partialRefetch: true
  })

  const todoColumn = useMemo(() => data?.todos?.filter(({ status }: ITodo) => status === 'TODO') || [], [data])
  const doneColumn = useMemo(() => data?.todos?.filter(({ status }: ITodo) => status === 'DONE') || [], [data])

  const handleAddTodo = () => {
    handleModal(true, CREATE_TODO_FORM)
  }

  const renderPickedForm = () => {
    return null
  }

  return (
    <>
      <Head pageTitle="HOME" />

      <Modal title={pickedForm.title || ''}>{renderPickedForm()}</Modal>

      <Skeleton tag="div" loading={loading} className="page">
        <STodoPage>
          <div>
            <List title="todo" items={todoColumn} withAdd handleAddTodo={handleAddTodo} />
            <List title="done" color="#22df70" items={doneColumn} />
          </div>
        </STodoPage>
      </Skeleton>
    </>
  )
}

export default Home
