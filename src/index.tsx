import ReactDOM from 'react-dom'
import React, { memo } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'

import { useTodos } from './hooks/data-hooks'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Layout from './components/Layout'
import { client } from './client'

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

const App = () => (
  <ApolloProvider client={client}>
    <TodoApp />
  </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
