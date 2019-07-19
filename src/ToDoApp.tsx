import React from 'react'

import { TopBar } from './components/TopBar'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { Page } from './components/Page'

import { useTodos } from './hooks/data-hooks'

export const ToDoApp = () => {
  const { todos, addTodo, checkTodo, removeTodo } = useTodos()

  return (
    <Page>
      <TopBar>To-Do App in TypeScript ft. React Hooks</TopBar>

      <AddTodo onAdd={addTodo} />

      <TodoList
        items={todos}
        onItemCheck={checkTodo}
        onItemRemove={removeTodo}
      />
    </Page>
  )
}
