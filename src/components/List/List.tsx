import { FC } from 'react'
import { ControlPoint as ControlPointIcon } from '@material-ui/icons'
import { ListItem } from 'components'
import { ITodo } from 'interfaces'
import { SList } from './SList'

interface ListProps {
  title: string
  items: ITodo[]
  color?: string
  withAdd?: boolean
  handleAddTodo?: () => void
}

const List: FC<ListProps> = ({ children, handleAddTodo, ...props }) => {
  const { title = '', items = [], color = '', withAdd = false } = props

  const elements = items.map(({ id, title, description }: ITodo) => (
    <ListItem key={id} color={color} title={title} description={description} />
  ))

  return (
    <SList>
      <h1>{title}</h1>
      <div>
        <ul>{elements}</ul>
        {withAdd && (
          <div>
            <button onClick={handleAddTodo}>
              <ControlPointIcon />
              <span>Add new Todo</span>
            </button>
          </div>
        )}
      </div>
    </SList>
  )
}

export default List
