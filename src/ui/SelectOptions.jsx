import React from 'react'

function SelectOptions() {
  return (
    <select
      className="border border-slate-300 rounded-lg py-3 px-2 text-blue-800"
      name="lang"
      id="lang"
    >
      <option value="persian">فارسی</option>
      <option value="english">English</option>
      <option value="german">Deutch</option>
    </select>
  )
}

export default SelectOptions
