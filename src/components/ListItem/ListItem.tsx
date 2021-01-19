import { FC } from 'react'

import { SListItem } from './SListItem'

interface ListItemProps {
  title: string
  description: string
  status?: string
  color?: string
}

const ListItem: FC<ListItemProps> = (props) => {
  const { title, description, color } = props

  return (
    <SListItem color={color}>
      <h2>{title}</h2>
      <p>{description}</p>
    </SListItem>
  )
}

export default ListItem
