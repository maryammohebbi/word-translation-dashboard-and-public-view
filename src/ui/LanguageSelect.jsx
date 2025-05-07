'use client'
import { useWord } from '@/context/WordContext'
import React from 'react'

function LanguageSelect() {
  const { language, setLanguage } = useWord()
  return (
    <select
      className="border border-slate-300 rounded-lg py-3 px-2 text-blue-800"
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option value="fa">فارسی</option>
      <option value="es">Español</option>
      <option value="fr">Française</option>
      <option value="de">Deutsch</option>
      <option value="kr">한국어</option>
    </select>
  )
}

export default LanguageSelect
