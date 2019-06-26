import { useState } from 'react'

export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue)

  return {
    todos,
    addTodo: (text: string) => {
      if (text !== '') {
        setTodos(
          todos.concat({
            text,
            checked: false,
          }),
        )
      }
    },
    checkTodo: (idx: number) => {
      setTodos(
        todos.map((todo, index) => {
          if (idx === index) {
            todo.checked = !todo.checked
          }

          return todo
        }),
      )
    },
    removeTodo: (idx: number) => {
      setTodos(todos.filter((_, index) => idx !== index))
    },
  }
}
