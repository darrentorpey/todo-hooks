import { ThemeProvider } from 'emotion-theming'
import React from 'react'

import { useCycler } from '~/hooks'

import { darkTheme, lightTheme, styled } from '~/theme'

const SwapperButton = styled.button`
  position: fixed;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  padding: 13px 8px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid gray;
  border-radius: 10px;
  text-transform: uppercase;
`

export const Themer: React.FC = ({ children }) => {
  const themeName = localStorage.getItem('themeName')
  const startingTheme = themeName
    ? [darkTheme, lightTheme].find(t => t.name === themeName)
    : lightTheme

  const cycler = useCycler([darkTheme, lightTheme], startingTheme)

  localStorage.setItem('themeName', cycler.current.name)

  function swapTheme() {
    cycler.next()
  }

  return (
    <ThemeProvider theme={cycler.current}>
      {children}

      <SwapperButton onClick={swapTheme}>Swap Theme</SwapperButton>
    </ThemeProvider>
  )
}
