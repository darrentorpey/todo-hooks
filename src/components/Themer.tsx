import { ThemeProvider } from 'emotion-theming'
import React from 'react'

import { useToggle } from '~/hooks'

import { darkTheme, lightTheme, styled } from '~/theme'

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

export const Themer: React.FC = ({ children }) => {
  const toggle = useToggle([darkTheme, lightTheme], 1)

  function swapTheme() {
    toggle.next()
  }

  return (
    <ThemeProvider theme={toggle.current}>
      {children}

      <SwapperButton onClick={swapTheme}>Swap Theme</SwapperButton>
    </ThemeProvider>
  )
}
