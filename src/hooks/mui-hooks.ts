import { useState } from 'react'

interface Opts {
  callbacks?: {
    onEnter?(): void
  }
  initialValue?: ''
}

export const useInputValue = (opts: Opts = {}) => {
  const { callbacks = {}, initialValue = '' } = opts

  const [inputValue, setInputValue] = useState(initialValue)

  return {
    inputValue,
    changeInput: (event: any) => setInputValue(event.target.value),
    clearInput: () => setInputValue(''),
    keyInput: (event: any) => {
      if ((event.which === 13 || event.keyCode === 13) && callbacks.onEnter) {
        callbacks.onEnter()

        return true
      }

      return false
    },
  }
}
