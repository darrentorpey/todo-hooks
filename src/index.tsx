import React, { memo, useCallback } from 'react'
import ReactDOM from 'react-dom'

import { useInputValue, useTodos } from './hooks/custom-hooks'

import AddTodo from './components/AddTodo'
import Layout from './components/Layout'
import TodoList from './components/TodoList'

const TodoApp = memo(() => {
  const callbacks = {}

  const { inputValue, changeInput, clearInput, keyInput } = useInputValue('', { callbacks })

  const { todos, addTodo, checkTodo, removeTodo } = useTodos()

  const clearInputAndAddTodo = useCallback(() => {
    clearInput()

    addTodo(inputValue)
  }, [clearInput, addTodo, inputValue])
  callbacks.onEnter = clearInputAndAddTodo

  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={keyInput}
      />
      <TodoList
        items={todos}
        onItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}
      />
    </Layout>
  )
})

ReactDOM.render(<TodoApp />, document.getElementById('root'))
