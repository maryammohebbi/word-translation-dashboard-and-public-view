import React from 'react'
import LanguageSelect from './LanguageSelect'

function Header({ title }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <span className="font-bold text-2xl">{title}</span>
      <LanguageSelect />
    </div>
  )
}

export default Header
