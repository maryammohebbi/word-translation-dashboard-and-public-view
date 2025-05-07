'use client'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { useWord } from '@/context/WordContext'

function AddKeywordForm({ onClose }) {
  const { addWord } = useWord()
  const [keyword, setKeyword] = useState('')
  const [translation, setTranslation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (keyword.trim() && translation.trim()) {
      addWord(keyword, translation)
      setKeyword('')
      setTranslation('')
      onClose()
    }
  }

  return (
    <div className="space-y-10">
      <h3 className="font-bold text-center">Add New Keyword</h3>
      <form onSubmit={handleSubmit}>
        <div className="border-b border-slate-400 flex justify-between p-5 gap-x-2">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="bg-green-50 text-center w-36 p-1 rounded-md text-slate-700 border border-green-100 shadow-2xl text-lg"
            placeholder="Keyword"
            required
          />
          <input
            type="text"
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
            placeholder="Farsi"
            className="bg-pink-50 text-center w-36 p-1 rounded-md text-slate-700 border border-pink-100 shadow-2xl text-lg"
            dir="rtl"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 p-1 text-lg text-white rounded-lg flex justify-center items-center gap-x-1"
        >
          <FaPlus className="w-4 h-4" /> <span>Add Keyword</span>
        </button>
      </form>
    </div>
  )
}

export default AddKeywordForm
