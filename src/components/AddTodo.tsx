import React, { memo } from 'react'

import EnterString from './EnterString'

interface Props {
  focus?: boolean
  onAdd(str: string): void
}

const AddTodo: React.FC<Props> = memo(props => {
  return (
    <EnterString
      focus={props.focus}
      placeholder="Add todo"
      onAdd={props.onAdd}
    />
  )
})

AddTodo.defaultProps = {
  focus: false,
}

export default AddTodo
