'use client'
import Header from '@/ui/Header'
import React, { useState } from 'react'
import Keyword from '../_components/Keyword'
import { FaPlus } from 'react-icons/fa6'
import { Dialog, DialogContent } from '@mui/material'
import { useWord } from '@/context/WordContext'
import AddKeywordForm from '../_components/AddKeywordForm'

import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from '@dnd-kit/core'
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function SortableKeyword({ id, keyword, translation }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Keyword id={id} keyword={keyword} translation={translation} />
    </div>
  )
}

function Dashboard() {
  const [open, setOpen] = useState(false)
  const { words, language, setWords, reorderWords } = useWord()

  const sensors = useSensors(useSensor(PointerSensor))

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over || active.id === over.id) return

    const oldIndex = words.findIndex((w) => w.id === active.id)
    const newIndex = words.findIndex((w) => w.id === over.id)

    const newOrder = arrayMove(words, oldIndex, newIndex)
    reorderWords(newOrder)
  }

  return (
    <div>
      <Header title="Translation Management" />
      <div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={words.map((word) => word.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="bg-white h-[500px] overflow-y-auto space-y-5 p-5 mb-8 rounded-xl">
              {words.map((word) => (
                <SortableKeyword
                  key={word.id}
                  id={word.id}
                  keyword={word.keyword}
                  translation={word.translations[language]}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>

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
