import ReactDOM from 'react-dom'
import React, { memo } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'emotion-theming'

import { TopBar } from './components/TopBar'
import { darkTheme as theme } from './theme'
// import { theme } from './theme'
import { useTodos } from './hooks/data-hooks'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { Page } from './components/Page'
import { client } from './client'

const TodoApp = memo(() => {
  const { todos, addTodo, checkTodo, removeTodo } = useTodos()

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <TopBar>To-Do App in TypeScript ft. React Hooks</TopBar>

        <AddTodo onAdd={addTodo} />

        <TodoList
          items={todos}
          onItemCheck={checkTodo}
          onItemRemove={removeTodo}
        />
      </Page>
    </ThemeProvider>
  )
})

const App = () => (
  <ApolloProvider client={client}>
    <TodoApp />
  </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
