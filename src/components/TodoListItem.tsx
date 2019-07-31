import React, { memo } from 'react'

import { styled } from '~/theme'

interface Props {
  checked: boolean
  text: string
  tabIndex: number
  divider: boolean
  onCheckBoxToggle(): void
  onButtonClick(): void
}

const MyCheckBoxWrapper = styled.li<Partial<Props>>`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  text-align: left;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;

  background-clip: padding-box;

  border-bottom: ${props =>
    props.divider ? '1px solid rgba(0, 0, 0, 0.62)' : '0'};

  background-color: ${props => props.theme.palette.primaryNeutral};
  color: ${props => props.theme.palette.primary};

  &:hover {
    background-color: ${props => props.theme.palette.primaryMediumLight};
  }

  &:focus-within {
    background-color: ${props => props.theme.palette.primaryMedium};
  }

  > div:first-of-type {
    display: flex;
    padding-right: 48px;
    padding-left: 16px;
  }

  .check {
    color: ${props =>
      props.checked
        ? props.theme.palette.primaryHighlight
        : props.theme.palette.primary};
    padding: 9px;
  }

  .text {
    font-size: 1rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }

  .action-holder {
    top: 50%;
    right: 16px;
    position: absolute;
    transform: translateY(-50%);
  }

  button.deleter {
    border: 0;
    margin: 0;
    cursor: pointer;
    display: inline-flex;
    outline: none;
    position: relative;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;

    flex: 0 0 auto;
    color: gray;
    padding: 12px;
    overflow: visible;
    font-size: 1.5rem;
    text-align: center;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;

    &:hover,
    &:focus {
      background-color: rgba(200, 200, 200, 0.36);
      border: 1px solid rgba(100, 100, 100, 0.36);
      color: ${props => props.theme.palette.destructive};
    }
  }

  .hide-input {
    top: 0;
    left: 0;
    width: 100%;
    cursor: inherit;
    height: 100%;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
  }

  svg {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
  }

  .list-item {
    cursor: pointer;
    width: 100%;
    display: flex;
    position: relative;
    box-sizing: border-box;
    text-align: left;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
    justify-content: flex-start;
    text-decoration: none;
  }
`

const CheckboxIcon = ({ checked }: { checked: boolean }) => {
  return (
    <svg
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="presentation"
    >
      {checked ? (
        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      ) : (
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
      )}
    </svg>
  )
}

const MyCheckBox = (props: Props) => (
  <MyCheckBoxWrapper
    tabIndex={props.tabIndex}
    checked={props.checked}
    divider={props.divider}
  >
    <div className="list-item">
      <span className="check">
        <CheckboxIcon checked={props.checked} />

        <input
          className="hide-input"
          type="checkbox"
          data-indeterminate="false"
          value=""
          checked={props.checked}
          onChange={props.onCheckBoxToggle}
        />
      </span>

      <div className="text">{props.text}</div>
    </div>

    <div className="action-holder">
      <button
        className="deleter"
        type="button"
        aria-label="Delete Todo"
        onClick={props.onButtonClick}
      >
        <svg
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          role="presentation"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
        </svg>
      </button>
    </div>
  </MyCheckBoxWrapper>
)

export const MyTodoListItem = memo((props: any) => <MyCheckBox {...props} />)
