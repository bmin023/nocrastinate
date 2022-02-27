import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { AddTaskModal } from '../Components/AddTaskModal'

type Assignment = {
  class: string
  assignment: string
  time: string
}

//Make a type for a day that contains assignments
type Day = {
  date: string
  assignments: Array<Assignment>
}

//Make a fake day
const fakeDay: Day = {
  date: '2020-01-01',
  assignments: [
    {
      class: 'MATH',
      assignment: 'MATH 1',
      time: '0:36:37',
    },
    {
      class: 'MATH',
      assignment: 'MATH 2',
      time: '0:36:37',
    },
  ],
}

interface DayProps {
  day: Day
}

const Day: React.FC<DayProps> = ({ day }) => {
  return (
    <div className="w-full p-4">
      <h1 className="text-center text-4xl font-bold">{day.date}</h1>
      {day.assignments.map((assignment) => {
        return (
          <div className="m-4 flex justify-between rounded-lg bg-blue-300 p-4 shadow">
            <div className="w-1/2">
              <h1 className="text-2xl font-bold">{assignment.class}</h1>
              <p className="text-xl">{assignment.assignment}</p>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl font-bold">{assignment.time}</h1>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const Dashboard: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(true)
  return (
    <div className="flex min-h-screen">
      {/* Create a sidebar */}
      <div className="flex min-h-screen w-52 flex-col bg-gray-300 shadow-xl">
        <button className="mx-2 border-2 border-l-0 border-r-0 border-t-0 border-black py-2 text-left">
          <p className="text-lg font-bold">Filter by...</p>
        </button>
        <button className="mx-8 border-b-2 border-transparent bg-opacity-90 py-1 text-left hover:border-slate-900 active:border-dotted">
          <p className=" text-lg ">Class</p>
        </button>
        <button className="mx-8 border-b-2 border-transparent bg-opacity-90 py-1 text-left hover:border-slate-900 active:border-dotted">
          <p className="text-lg">Priority</p>
        </button>
        <button className="mx-8 border-b-2 border-transparent py-1 text-left hover:border-slate-900 active:border-dotted">
          <p className="text-lg">Length</p>
        </button>
        <button className="mx-8 border-b-2 border-transparent py-1 text-left hover:border-slate-900 active:border-dotted">
          <p className="text-lg">Due Date</p>
        </button>
      </div>
      <div className="w-full">
        <div className="relative flex h-24 w-full border-b-2 border-black p-2">
          <Link href="/weekview">
            <a className="mx-2 mt-auto h-11 w-44 rounded-lg bg-orange-400 p-2 text-center shadow-lg hover:bg-orange-300 active:bg-orange-500">
              Week at a Glance
            </a>
          </Link>
          <button
            onClick={() => {
              setModalOpen(true)
            }}
            className="mx-2 mt-auto h-11 w-24 rounded-lg bg-orange-400 p-2 shadow-lg hover:bg-orange-300 active:bg-orange-500"
          >
            Add a Task
          </button>
          <div className="py-auto absolute right-5 h-20 w-20 rounded-full bg-red-300 shadow"></div>
        </div>
        <Day day={fakeDay} />
      </div>
      {modalOpen && (
        <AddTaskModal
          onClose={() => {
            setModalOpen(false)
          }}
          onSubmit={(task) => {
            console.log(task)
            setModalOpen(false)
          }}
        />
      )}
    </div>
  )
}

export default Dashboard
