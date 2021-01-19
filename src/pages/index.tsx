import { NextPage } from 'next'

import { Head } from 'shared'
import { STodoPage } from 'styles'

const Home: NextPage = () => {
  return (
    <>
      <Head pageTitle="HOME" />
      <STodoPage>
        <h1>this is todo page app</h1>
      </STodoPage>
    </>
  )
}

export default Home
