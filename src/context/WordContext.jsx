'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { defaultWords } from '../data/data.js'
import { toast } from 'react-hot-toast'

const WordContext = createContext()

export function WordProvider({ children }) {
  const [words, setWords] = useState([])
  const [language, setLanguage] = useState('fa')
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedWords = localStorage.getItem('words')

      if (storedWords) {
        setWords(JSON.parse(storedWords))
      } else {
        setWords(defaultWords)
        localStorage.setItem('words', JSON.stringify(defaultWords))
        toast.success('Default words loaded successfully!')
      }

      setIsInitialized(true)
    }
  }, [])

  useEffect(() => {
    if (isInitialized && words.length > 0) {
      localStorage.setItem('words', JSON.stringify(words))
    }
  }, [words, isInitialized])

  const addWord = (keyword, translation) => {
    const newWord = {
      id: Date.now().toString(),
      keyword,
      translations: {
        [language]: translation,
      },
    }
    setWords((prevWords) => [...prevWords, newWord])
    toast.success('New word added successfully!')
  }

  const updateTranslation = (id, value) => {
    setWords((prev) =>
      prev.map((word) =>
        word.id === id
          ? {
              ...word,
              translations: { ...word.translations, [language]: value },
            }
          : word
      )
    )
    toast.success('Translation updated successfully!')
  }

  return (
    <WordContext.Provider
      value={{ words, language, setLanguage, addWord, updateTranslation }}
    >
      {children}
    </WordContext.Provider>
  )
}

export function useWord() {
  const context = useContext(WordContext)
  if (context === undefined)
    throw new Error('WordContext is used outside of the provider.')
  return context
}
