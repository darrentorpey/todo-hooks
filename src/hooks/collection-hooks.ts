import { useState } from 'react'

/**
 * Provides a value and a way to cycle through them
 * @param items The items through which setIndex will cycle
 * @param startIndex
 */
export function useCycler<T>(items: T[], startOn: T | null = null) {
  const startIndex = startOn !== null ? items.indexOf(startOn) : 0

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
