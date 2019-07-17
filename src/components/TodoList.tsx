import React from 'react'

import { styled } from '../theme'
import { MyTodoListItem } from './TodoListItem'

interface Props {
  className?: string
  items: any
  onItemCheck(todo: any): void
  onItemRemove(todo: any): void
}

const TodoList = styled((props: Props) => {
  if (props.items.length === 0) {
    return null
  }

  return (
    <div className={props.className}>
      <ul>
        {props.items.map((todo: any, idx: number) => (
          <MyTodoListItem
            {...todo}
            key={`TodoItem.${idx}`}
            divider={idx !== props.items.length - 1}
            onButtonClick={() => props.onItemRemove(todo)}
            onCheckBoxToggle={() => props.onItemCheck(todo)}
          />
        ))}
      </ul>
    </div>
  )
})`
  margin: 16px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;

  ul {
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;

    li {
      background-color: ${props => props.theme.palette.primaryNeutral};
      color: ${props => props.theme.palette.primary};
    }
  }
`

export default TodoList
