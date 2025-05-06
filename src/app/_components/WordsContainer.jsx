import React from 'react'
import WordCard from './WordCard'

function WordsContainer() {
  return (
    <div className="space-y-4">
      <WordCard />
      <div className="border border-slate-300 shadow-2xl rounded-lg w-full p-4 flex flex-col gap-y-3">
        <p className="font-bold text-2xl">World</p>
        <p className="text-xl text-slate-700">جهان</p>
      </div>
      <div className="border border-slate-300 shadow-2xl rounded-lg w-full p-4 flex flex-col gap-y-3">
        <p className="font-bold text-2xl">apple</p>
        <p className="text-xl text-slate-700">no translation</p>
      </div>
    </div>
  )
}

export default WordsContainer
