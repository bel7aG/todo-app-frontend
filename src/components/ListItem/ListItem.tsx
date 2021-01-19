import { FC } from 'react'

import { SListItem } from './SListItem'

interface ListItemProps {
  id: string
  title: string
  description: string
  status?: string
  color?: string
  handleToDone?: any
  isTodo?: boolean
}

const ListItem: FC<ListItemProps> = ({ handleToDone, ...props }) => {
  const { id, title, description, color, isTodo = false } = props

  return (
    <SListItem color={color}>
      <h2>
        <span>{title}</span> {isTodo && <span onClick={() => handleToDone(id)}>Done {'->'} </span>}
      </h2>
      <p>{description}</p>
    </SListItem>
  )
}

export default ListItem
