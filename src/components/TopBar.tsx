import React from 'react'

import { styled } from '../theme'

interface Props {
  children: React.ReactNode
  className?: string
}

export const TopBar = styled((props: Props) => {
  return (
    <header className={props.className}>
      <div>
        <p>{props.children}</p>
      </div>
    </header>
  )
})`
  color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-color: ${props => props.theme.palette.secondary};

  > div {
    display: flex;
    position: relative;
    align-items: center;

    padding-left: 24px;
    padding-right: 24px;
    min-height: 64px;

    p {
      font-size: 1rem;
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0.00938em;
    }
  }
`
