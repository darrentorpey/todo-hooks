import { ApolloProvider } from '@apollo/react-hooks'
import React from 'react'
import ReactDOM from 'react-dom'

import { client } from '~/client'

import { ToDoApp } from '~/ToDoApp'

import { Themer } from '~/components/Themer'

const App = () => (
  <ApolloProvider client={client}>
    <Themer>
      <ToDoApp />
    </Themer>
  </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
