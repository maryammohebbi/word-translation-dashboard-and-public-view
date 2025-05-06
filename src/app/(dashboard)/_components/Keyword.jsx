import React from 'react'

function Keyword() {
  return (
    <div className="border-b border-slate-400 flex justify-between p-2">
      <label htmlFor="">Hello</label>
      <input
        type="text"
        value="سلام"
        className="bg-pink-50 text-center w-28 p-1 rounded-md"
        dir="rtl"
      />
    </div>
  )
}

export default Keyword
