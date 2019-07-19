import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const cache = new InMemoryCache()

const startingTodos = [
  {
    __typename: 'Todo',
    id: 1,
    checked: false,
    text: 'Demonstrate greatness',
  },
  {
    __typename: 'Todo',
    id: 2,
    checked: true,
    text: 'Persevere',
  },
  {
    __typename: 'Todo',
    id: 3,
    checked: false,
    text: 'Win',
  },
]

cache.writeData({
  data: {
    todos: startingTodos,
  },
})

const GET_TODOS = gql`
  query GetTodos {
    todos @client {
      id
      checked
      text
    }
  }
`

let nextTodoId = startingTodos.length + 1

export const client = new ApolloClient({
  cache,
  resolvers: {
    Mutation: {
      toggleTodo: (_root, variables, { cache, getCacheKey }) => {
        const id = getCacheKey({ __typename: 'Todo', id: variables.id })
        const fragment = gql`
          fragment completeTodo on Todo {
            checked
          }
        `
        const todo = cache.readFragment({ fragment, id })
        const data = { ...todo, checked: !todo.checked }

        cache.writeData({ id, data })

        return null
      },
      removeTodo: (_root, variables, { cache }) => {
        const { todos } = cache.readQuery({ query: GET_TODOS })

        const newTodos = todos.filter((todo: any) => todo.id !== variables.id)

        cache.writeData({ data: { todos: newTodos } })

        return null
      },
      addTodo: (_root, variables, { cache }) => {
        const { todos } = cache.readQuery({ query: GET_TODOS })

        const newTodos = [
          ...todos,
          {
            __typename: 'Todo',
            id: nextTodoId++,
            text: variables.text,
            checked: false,
          },
        ]

        cache.writeData({ data: { todos: newTodos } })

        return null
      },
    },
  },
  typeDefs: `
    type Todo {
      id: ID!
      checked: Boolean!
      text: String!
    }
  `,
})
