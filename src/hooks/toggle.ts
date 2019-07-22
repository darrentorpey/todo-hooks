import { useState } from 'react'

export function useToggle<T>(items: T[], startIndex = 0) {
  const [index, setIndex] = useState(startIndex)

  return {
    get current() {
      return items[index]
    },
    next() {
      setIndex((index + 1) % items.length)
    },
  }
}