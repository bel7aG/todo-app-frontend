import { FC } from 'react'
import { ControlPoint as ControlPointIcon } from '@material-ui/icons'
import { ListItem } from 'components'
import { ITodo } from 'interfaces'
import { SList } from './SList'

interface ListProps {
  title: string
  items: ITodo | any
  color?: string
  withAdd?: boolean
}

const List: FC<ListProps> = ({ children, ...props }) => {
  const { title = '', items = [], color = '', withAdd = false } = props

  const elements = items.map(({ title, description }: ITodo) => (
    <ListItem color={color} title={title} description={description} />
  ))

  return (
    <SList>
      <h1>{title}</h1>
      <div>
        <ul>{elements}</ul>
        {withAdd && (
          <div>
            <button>
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
