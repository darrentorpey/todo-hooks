// import { ApolloClient } from 'apollo-client'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { withClientState } from 'apollo-link-state'

// const cache = new InMemoryCache()

// const typeDefs = `
//   type Todo {
//     id: Int!
//     text: String!
//     completed: Boolean!
//   }
//   type Mutation {
//     addTodo(text: String!): Todo
//     toggleTodo(id: Int!): Todo
//   }
//   type Query {
//     visibilityFilter: String
//     todos: [Todo]
//   }
// `

// const client = new ApolloClient({
//   cache,
//   link: withClientState({ resolvers, defaults, cache, typeDefs }),
// })
