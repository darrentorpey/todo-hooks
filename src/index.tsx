import ReactDOM from 'react-dom'
import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'emotion-theming'

import { ToDoApp } from './ToDoApp'
import { client } from './client'

import { darkTheme as theme } from './theme'
// import { theme } from './theme'

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <ToDoApp />
    </ThemeProvider>
  </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
