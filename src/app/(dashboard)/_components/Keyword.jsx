import React from 'react'

function Keyword({ keyword, translation, id }) {
  return (
    <div className="border-b border-slate-400 flex justify-between p-2">
      <label htmlFor="" className="text-2xl">
        {keyword}
      </label>
      <input
        type="text"
        value={translation}
        className="bg-pink-50 text-center w-28 p-1 rounded-md text-slate-700 border border-pink-100 shadow-2xl text-xl"
        dir="rtl"
      />
    </div>
  )
}

export default Keyword
