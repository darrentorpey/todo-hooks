import { useQuery, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_TODOS = gql`
  query GetTodos {
    todos @client {
      id
      checked
      text
    }
  }
`

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: Int!) {
    toggleTodo(id: $id) @client
  }
`

const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) @client
  }
`

const REMOVE_TODO = gql`
  mutation RemoveTodo($id: Int!) {
    removeTodo(id: $id) @client
  }
`

interface Data {
  todos: any[]
}

export const useTodos = () => {
  const { loading, data } = useQuery<Data>(GET_TODOS)
  const [toggleTodo] = useMutation(TOGGLE_TODO)
  const [removeTodo] = useMutation(REMOVE_TODO)
  const [addTodo] = useMutation(ADD_TODO)

  if (loading) {
    return {
      todos: [],
      loading,
      addTodo: () => {},
      checkTodo: () => {},
      removeTodo: () => {},
    }
  }

  const todos = data && data.todos ? data.todos : []

  return {
    todos,
    addTodo: (text: string) => {
      if (text !== '') {
        addTodo({ variables: { text } })
      }
    },
    checkTodo: (todo: any) => {
      toggleTodo({ variables: { id: todo.id } })
    },
    removeTodo: (todo: any) => {
      removeTodo({ variables: { id: todo.id } })
    },
  }
}
