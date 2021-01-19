import { FC } from 'react'
import Link from 'next/link'

import { SHeader } from './SHeader'

const Header: FC = () => {
  return (
    <SHeader>
      <Link href="/">
        <a>todo</a>
      </Link>
    </SHeader>
  )
}

export default Header
