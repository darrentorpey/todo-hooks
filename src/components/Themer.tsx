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
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
`

export const Themer = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState('dark')

  function swapTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {children}

      <SwapperButton onClick={swapTheme}>{theme}</SwapperButton>
    </ThemeProvider>
  )
}
