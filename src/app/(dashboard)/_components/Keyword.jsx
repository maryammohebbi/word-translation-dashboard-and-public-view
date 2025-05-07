'use client'
import React, { useState, useRef, useEffect } from 'react'
import { useWord } from '@/context/WordContext'
import { MdDragIndicator } from 'react-icons/md'

function Keyword({ keyword, translation, id, dragHandleProps }) {
  const { updateTranslation } = useWord()
  const [currentTranslation, setCurrentTranslation] = useState(translation)
  const inputRef = useRef(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    setCurrentTranslation(translation)
  }, [translation])

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  const handleBlur = () => {
    setIsEditing(false)
    if (currentTranslation !== translation) {
      updateTranslation(id, currentTranslation)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      inputRef.current.blur()
    }
  }

  const hasTranslation = translation && translation.trim().length > 0

  return (
    <div className="border-b border-slate-400 flex justify-between p-2">
      <span className={`${!hasTranslation ? 'text-red-500' : ''} text-2xl`}>
        {keyword}
      </span>

      <div className="flex gap-2 items-center">
        <input
          ref={inputRef}
          type="text"
          value={currentTranslation}
          onChange={(e) => setCurrentTranslation(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onMouseDown={(e) => e.stopPropagation()}
          placeholder={`${!hasTranslation ? '.....' : ''}`}
          className={`${
            !hasTranslation ? 'bg-red-400 text-white font-bold' : ''
          } bg-pink-50 text-center w-28 p-1 rounded-md text-slate-700 border border-pink-100 shadow-2xl text-xl`}
          dir="rtl"
          onClick={(e) => {
            e.stopPropagation()
            setIsEditing(true)
          }}
        />

        {/* Drag handle */}
        <div
          {...dragHandleProps}
          className="cursor-grab px-2 text-gray-400 hover:text-black flex items-center justify-center"
        >
          <MdDragIndicator className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}

export default Keyword
