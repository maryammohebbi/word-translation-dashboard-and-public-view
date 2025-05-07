'use client'
import React, { useState, useRef, useEffect } from 'react'
import { useWord } from '@/context/WordContext'
import toast from 'react-hot-toast'

function Keyword({ keyword, translation, id }) {
  const { updateTranslation } = useWord()
  const [currentTranslation, setCurrentTranslation] = useState(translation)
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    setCurrentTranslation(translation)
  }, [translation])

  const handleBlur = () => {
    setIsEditing(false)
    if (currentTranslation !== translation) {
      updateTranslation(id, currentTranslation)
      toast.success('Translation updated successfully!')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      inputRef.current.blur()
    }
  }

  return (
    <div className="border-b border-slate-400 flex justify-between p-2 hover:cursor-pointer">
      <span className="text-2xl">{keyword}</span>
      <input
        ref={inputRef}
        type="text"
        value={currentTranslation || '....'}
        onChange={(e) => setCurrentTranslation(e.target.value)}
        onFocus={() => setIsEditing(true)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className="bg-pink-50 text-center w-28 p-1 rounded-md text-slate-700 border border-pink-100 shadow-2xl text-xl"
        dir="rtl"
      />
    </div>
  )
}

export default Keyword
