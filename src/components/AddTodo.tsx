import React, { memo } from 'react'

import EnterString from './EnterString'

interface Props {
  onAdd(str: string): void
}

const AddTodo: React.FC<Props> = memo(props => {
  return <EnterString placeholder="Add todo" onAdd={props.onAdd} />
})

export default AddTodo
