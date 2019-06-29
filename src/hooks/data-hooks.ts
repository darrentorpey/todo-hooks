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
  mutation ADDTodo($text: String!) {
    addTodo(text: $text) @client
  }
`

const REMOVE_TODO = gql`
  mutation RemoveTodo($id: Int!) {
    removeTodo(id: $id) @client
  }
`

export const useTodos = () => {
  const { loading, data } = useQuery(GET_TODOS)
  const [toggleTodo] = useMutation(TOGGLE_TODO)
  const [removeTodo] = useMutation(REMOVE_TODO)
  const [addTodo] = useMutation(ADD_TODO)

  if (loading) {
    return {
      todos: [],
      loading,
    }
  }

  // const todos = data || []
  const todos = data && data.todos ? data.todos : []
  // console.log('data, type, data.todos', data, typeof data, data.todos)
  // console.log('todos', todos)
  // const todos = []

  return {
    todos,
    addTodo: (text: string) => {
      console.log('text', text)
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
