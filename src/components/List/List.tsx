import { FC } from 'react'
import { ControlPoint as ControlPointIcon } from '@material-ui/icons'
import { ListItem } from 'components'
import { ITodo } from 'interfaces'
import { SList } from './SList'

interface ListProps {
  title: string
  items: ITodo[]
  color?: string
  isTodo?: boolean
  handleAddTodo?: () => void
  handleToDone?: any
}

const List: FC<ListProps> = ({ handleAddTodo, handleToDone, ...props }) => {
  const { title = '', items = [], color = '', isTodo = false } = props

  const elements = items.map((todo: ITodo) => (
    <ListItem key={todo?.id} handleToDone={handleToDone} isTodo={isTodo} color={color} {...todo} />
  ))

  return (
    <SList>
      <h1>{title}</h1>
      <div>
        <ul>{elements.length ? elements : <p>Empty...</p>}</ul>
        {isTodo && (
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
