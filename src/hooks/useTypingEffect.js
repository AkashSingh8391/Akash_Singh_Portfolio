import { useEffect, useState } from 'react'

export function useTypingEffect(words, { typingSpeed = 90, deletingSpeed = 45, pause = 1500 } = {}) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
          )
        },
        deleting ? deletingSpeed : typingSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return text
}
