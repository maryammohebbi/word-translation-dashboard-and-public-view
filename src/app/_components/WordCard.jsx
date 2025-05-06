import React from 'react'

function WordCard({ keyword, translation }) {
  return (
    <div className="border border-slate-300 shadow-2xl rounded-lg w-full p-4 flex flex-col gap-y-3">
      <p className="font-bold text-2xl">{keyword}</p>
      <p className="text-xl text-slate-700">{translation}</p>
    </div>
  )
}

export default WordCard
