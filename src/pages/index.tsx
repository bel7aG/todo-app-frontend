import { useMemo } from 'react'
import { NextPage } from 'next'
import { useSnackbar } from 'notistack'

import { FETCH_TODOS_QUERY } from 'apollo'
import { Head } from 'shared'
import { List } from 'components'
import { STodoPage } from 'styles'
import { useQuery } from '@apollo/client'
import { ITodo } from 'interfaces'

const Home: NextPage = () => {
  const { enqueueSnackbar } = useSnackbar()

  const { data = [] } = useQuery(FETCH_TODOS_QUERY, {
    pollInterval: 3500,
    onError: () => {
      enqueueSnackbar('Connection problem', {
        variant: 'error'
      })
    },
    onCompleted: (a) => {
      console.log(a)
      alert('ok')
    },
    partialRefetch: true
  })

  const todoColumn = useMemo(() => data?.todos?.filter(({ status }: ITodo) => status === 'TODO') || [], [data])
  const doneColumn = useMemo(() => data?.todos?.filter(({ status }: ITodo) => status === 'DONE') || [], [data])

  return (
    <>
      <Head pageTitle="HOME" />
      <STodoPage>
        <div>
          <List title="todo" items={todoColumn} withAdd />
          <List title="done" color="#22df70" items={doneColumn} />
        </div>
      </STodoPage>
    </>
  )
}

export default Home
