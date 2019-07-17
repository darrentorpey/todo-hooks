import React, { memo, useCallback } from 'react'
import { TextField, Paper, Grid, Button } from '@material-ui/core'

import { useInputValue } from '../hooks/mui-hooks'
import { styled } from '../theme'

interface Props {
  buttonText?: string
  inputValue?: string
  onAdd(str: string): void
  placeholder: string
}

const Wrap = styled.div`
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: ${props => props.theme.palette.primaryNeutral};
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin: 16px;
  padding: 16px;

  .fieldset {
    all: initial;

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

    .left {
      margin: 0;
      box-sizing: border-box;
      flex-grow: 1;
      padding-right: 16px;

      > div {
        border: 0;
        margin: 0;
        display: inline-flex;
        padding: 0;
        position: relative;
        min-width: 0;
        flex-direction: column;
        vertical-align: top;
        width: 100%;

        > div {
          cursor: text;
          display: inline-flex;
          font-size: 1rem;
          box-sizing: border-box;
          align-items: center;
          font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
          line-height: 1.1875em;
          width: 100%;
          position: relative;

          &::before {
            left: 0;
            right: 0;
            bottom: 0;
            content: '\00a0';
            position: absolute;
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1)
              0ms;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42);
            pointer-events: none;
          }

          &::after {
            left: 0;
            right: 0;
            bottom: 0;
            content: '';
            position: absolute;
            transform: scaleX(0);
            transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
            border-bottom: 2px solid #303f9f;
            pointer-events: none;
          }
        }
      }

      input {
        font: inherit;
        color: ${props => props.theme.palette.primary};
        width: 100%;
        border: 0;
        height: 1.1875em;
        margin: 0;
        display: block;
        padding: 6px 0 7px;
        min-width: 0;
        background: none;
        box-sizing: content-box;
        -webkit-tap-highlight-color: transparent;
      }
    }

    .right {
      color: rgba(0, 0, 0, 0.87);
      margin: 0;
      box-sizing: border-box;
      flex-grow: 0;
      max-width: 100px;
      flex-basis: 100px;

      button {
        color: ${props => props.theme.palette.secondaryLight};
        border-color: ${props => props.theme.palette.secondaryLight};
      }
    }
  }
`

/**
 * Generic UI widget for adding a text string with an add button
 *   or by pressing Enter
 * =======================
 * | __text_here__ [add] |
 * =======================
 *
 * Most of the details here are MUI-specific
 */
const EnterString: React.FC<Props> = memo((props: any) => {
  const callbacks: { onEnter?(): void } = {}

  const { inputValue, changeInput, clearInput, keyInput } = useInputValue({
    callbacks,
  })

  const clearInputAndAddTodo = useCallback(() => {
    clearInput()

    props.onAdd(inputValue)
  }, [clearInput, props, inputValue])
  callbacks.onEnter = clearInputAndAddTodo

  return (
    <Wrap>
      <div className="fieldset">
        <div className="left">
          <div>
            <div>
              <input
                placeholder={props.placeholder}
                value={inputValue}
                onChange={changeInput}
                onKeyPress={keyInput}
              />
            </div>
          </div>
        </div>

        <div className="right">
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={clearInputAndAddTodo}
          >
            {props.buttonText}
          </Button>
        </div>
      </div>
    </Wrap>
  )
})

EnterString.defaultProps = {
  inputValue: '',
  buttonText: 'Add',
}

export default EnterString
