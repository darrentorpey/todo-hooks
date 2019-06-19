import { useState } from 'react'

export const useInputValue = (initialValue = '', opts = {}) => {
  const { callbacks = {} } = opts;

  const [inputValue, setInputValue] = useState(initialValue)

  return {
    inputValue,
    changeInput: event => setInputValue(event.target.value),
    clearInput: () => setInputValue(''),
    keyInput: (event) => {
      // console.log('callbacks.onEnter', callbacks.onEnter)
      if ((event.which === 13 || event.keyCode === 13) && callbacks.onEnter) {
        callbacks.onEnter()

        return true
      }

      return false
    }
  }
}

export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue)

  return {
    todos,
    addTodo: text => {
      if (text !== '') {
        setTodos(
          todos.concat({
            text,
            checked: false
          })
        )
      }
    },
    checkTodo: idx => {
      setTodos(
        todos.map((todo, index) => {
          if (idx === index) {
            todo.checked = !todo.checked
          }

          return todo
        })
      )
    },
    removeTodo: idx => {
      setTodos(todos.filter((todo, index) => idx !== index))
    }
  }
}
