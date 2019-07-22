import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import { darkTheme } from '~/theme'
import { theme as lightTheme } from '~/theme'
import { styled } from '~/theme'

const SwapperButton = styled.button`
  position: fixed;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  padding: 3px 8px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid gray;
  border-radius: 10px;
  text-transform: uppercase;
`

function useToggle<T>(items: T[], startIndex = 0) {
  const [index, setIndex] = React.useState(startIndex)

  const toggleGroup = {
    get current() {
      return items[index]
    },
    next() {
      setIndex((index + 1) % items.length)
    },
  }

  return toggleGroup
}

export const Themer: React.FC = ({ children }) => {
  const toggleGroup = useToggle([darkTheme, lightTheme])

  function swapTheme() {
    toggleGroup.next()
  }

  return (
    <ThemeProvider theme={toggleGroup.current}>
      {children}

      <SwapperButton onClick={swapTheme}>Swap Theme</SwapperButton>
    </ThemeProvider>
  )
}
