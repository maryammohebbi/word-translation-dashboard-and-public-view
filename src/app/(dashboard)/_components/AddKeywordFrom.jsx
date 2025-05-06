import React from 'react'
import { FaPlus } from 'react-icons/fa6'

function AddKeywordFrom() {
  return (
    <div className="space-y-20">
      <h3 className="font-bold text-center">Add New Keyword</h3>
      <form action="submit">
        <div className="border-b border-slate-400 flex justify-between p-5 gap-x-2">
          <input
            type="text"
            className="bg-green-50 text-center w-36 p-1 rounded-md text-slate-700 border border-green-100 shadow-2xl text-lg"
            placeholder="New Word..."
          />
          <input
            type="text"
            value=""
            placeholder="Translation"
            className="bg-pink-50 text-center w-36 p-1 rounded-md text-slate-700 border border-pink-100 shadow-2xl text-lg"
            dir="rtl"
          />
        </div>
        <button className="w-full bg-blue-600 p-1 text-lg text-white rounded-lg flex justify-center items-center gap-x-1">
          <FaPlus className="w-4 h-4" /> <span>Add Keyword</span>
        </button>
      </form>
    </div>
  )
}

export default AddKeywordFrom
