import Header from '@/ui/Header'
import React from 'react'
import Keyword from '../_components/Keyword'

function Dashboard() {
  return (
    <div>
      <Header title="Translation Management" />
      <form action="submit" className="  ">
        <div className="bg-white h-[500px] overflow-y-auto space-y-5 p-5 mb-8">
          <Keyword />
          <div className="border-b border-slate-400 flex justify-between p-2">
            <label htmlFor="">Hello</label>
            <input
              type="text"
              value="سلام"
              className="bg-pink-50 text-center w-28 p-1 rounded-md"
              dir="rtl"
            />
          </div>
          <div className="border-b border-slate-400 flex justify-between p-2">
            <label htmlFor="">Hello</label>
            <input
              type="text"
              value="سلام"
              className="bg-pink-50 text-center w-28 p-1 rounded-md"
              dir="rtl"
            />
          </div>
          <div className="border-b border-slate-400 flex justify-between p-2">
            <label htmlFor="">Hello</label>
            <input
              type="text"
              value="سلام"
              className="bg-pink-50 text-center w-28 p-1 rounded-md"
              dir="rtl"
            />
          </div>
          <div className="border-b border-slate-400 flex justify-between p-2">
            <label htmlFor="">Hello</label>
            <input
              type="text"
              value="سلام"
              className="bg-pink-50 text-center w-28 p-1 rounded-md"
              dir="rtl"
            />
          </div>
          <div className="border-b border-slate-400 flex justify-between p-2">
            <label htmlFor="">Hello</label>
            <input
              type="text"
              value="سلام"
              className="bg-pink-50 text-center w-28 p-1 rounded-md"
              dir="rtl"
            />
          </div>
          <div className="border-b border-slate-400 flex justify-between p-2">
            <label htmlFor="">Hello</label>
            <input
              type="text"
              value="سلام"
              className="bg-pink-50 text-center w-28 p-1 rounded-md"
              dir="rtl"
            />
          </div>
          <div className="border-b border-slate-400 flex justify-between p-2">
            <label htmlFor="">Hello</label>
            <input
              type="text"
              value="سلام"
              className="bg-pink-50 text-center w-28 p-1 rounded-md"
              dir="rtl"
            />
          </div>
        </div>
        <button className="w-full bg-blue-600 p-2 text-lg text-white rounded-lg">
          Add Keyword
        </button>
      </form>
    </div>
  )
}

export default Dashboard
