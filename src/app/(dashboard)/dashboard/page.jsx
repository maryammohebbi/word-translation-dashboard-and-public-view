'use client'
import Header from '@/ui/Header'
import React, { useState } from 'react'
import Keyword from '../_components/Keyword'
import { FaPlus } from 'react-icons/fa6'
import { Dialog, DialogContent } from '@mui/material'
import { useWord } from '@/context/WordContext'
import AddKeywordForm from '../_components/AddKeywordForm'

function Dashboard() {
  const [open, setOpen] = useState(false)
  const { words, language } = useWord()
  return (
    <div>
      <Header title="Translation Management" />
      <div>
        <div className="bg-white h-[500px] overflow-y-auto space-y-5 p-5 mb-8 rounded-xl">
          {words.map((word) => {
            return (
              <Keyword
                key={word.id}
                id={word.id}
                keyword={word.keyword}
                translation={word.translations[language]}
              />
            )
          })}
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full bg-blue-600 p-2 text-xl text-white rounded-lg flex justify-center items-center gap-x-1"
        >
          <FaPlus className="w-5 h-5" /> <span>Add Keyword</span>
        </button>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <AddKeywordForm onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Dashboard
