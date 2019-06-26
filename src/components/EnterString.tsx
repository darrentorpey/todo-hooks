import React, { memo, useCallback } from 'react'
import { TextField, Paper, Button, Grid } from '@material-ui/core'

import { useInputValue } from '../hooks/mui-hooks'

interface Props {
  buttonText?: string
  inputValue?: string
  onAdd(str: string): void
  placeholder: string
}

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
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder={props.placeholder}
            value={inputValue}
            onChange={changeInput}
            onKeyPress={keyInput}
            fullWidth
          />
        </Grid>

        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={clearInputAndAddTodo}
          >
            {props.buttonText}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
})

EnterString.defaultProps = {
  inputValue: '',
  buttonText: 'Add',
}

export default EnterString
