import React from 'react'
import SelectOptions from './SelectOptions'

function Header({ title }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <span className="font-bold text-2xl">{title}</span>

      <SelectOptions />
    </div>
  )
}

export default Header
