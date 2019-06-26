import React, { memo } from 'react'
import ReactDOM from 'react-dom'

import { useTodos } from './hooks/data-hooks'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Layout from './components/Layout'

const TodoApp = memo(() => {
  const { todos, addTodo, checkTodo, removeTodo } = useTodos()

  return (
    <Layout>
      <AddTodo onAdd={addTodo} />

      <TodoList
        items={todos}
        onItemCheck={checkTodo}
        onItemRemove={removeTodo}
      />
    </Layout>
  )
})

ReactDOM.render(<TodoApp />, document.getElementById('root'))
