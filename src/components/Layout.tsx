import React, { memo } from 'react'

import { TopBar } from './TopBar'
import { styled } from '../theme'

const Page = styled.div`
  background-color: ${props => props.theme.palette.backgroundNeutral};
  height: 100%;
`

const Layout = memo((props: any) => (
  <Page>
    <TopBar>TODO App in TypeScript ft. React Hooks and MUI</TopBar>

    {props.children}
  </Page>
))

export default Layout
