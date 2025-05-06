'use client'
import React from 'react'
import WordCard from './WordCard'
import { useWord } from '@/context/WordContext'

function WordsContainer() {
  const { words, language } = useWord()

  if (words.length === 0) return <p>Loading words...</p>

  return (
    <div className="space-y-4">
      {words.map((word) => (
        <WordCard
          key={word.id}
          keyword={word.keyword}
          translation={word.translations[language] || 'no translation'}
        />
      ))}
    </div>
  )
}

export default WordsContainer
