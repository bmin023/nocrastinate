import moment from 'moment'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AddTaskModal } from '../Components/AddTaskModal'
import { Activity, Plan } from '../types/schoolTypes'
import fakeUser from '../utils/fake'

interface DayProps {
  day: Activity
}

const Day: React.FC<DayProps> = ({ day }) => {
  return (
    <div className="m-4 flex justify-between rounded-lg bg-blue-300 p-4 shadow">
      <div className="w-1/2">
        <h1 className="text-xl">{day.subject}</h1>
        <p className="text-2xl font-bold">{day.name}</p>
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl font-semibold">
          {moment(day.dueDate).format('MMMM DD, YYYY')}
        </h1>
        <h1 className="text-2xl font-regular">
          {moment(day.dueDate).format('dddd HH:mm')}
        </h1>
      </div>
    </div>
  )
}

const Dashboard: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [user, setUser] = useState(fakeUser);
  useEffect(() => {
    if(localStorage.getItem('user') !== null) {
      setUser(JSON.parse(localStorage.getItem('user') as string))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])
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
        <div className="grow"></div>
        <Link href="/">
          <a className="m-2 rounded-lg bg-orange-400 p-2 text-center shadow-lg hover:bg-orange-300 active:bg-orange-500">
            Focus Mode
          </a>
        </Link>
      </div>
      <div className="w-full">
        <div className="relative flex h-24 w-full border-b-2 border-black p-2">
          <Link href="/weekview">
            <a className="mx-2 mt-auto h-11 w-44 rounded-lg bg-orange-400 p-2 text-center text-lg font-semibold shadow-lg hover:bg-orange-300 active:bg-orange-500">
              Week at a Glance
            </a>
          </Link>
          <button
            onClick={() => {
              setModalOpen(true)
            }}
            className="mx-2 mt-auto h-11 w-40 rounded-lg bg-orange-400 p-2 text-lg font-semibold shadow-lg hover:bg-orange-300 active:bg-orange-500"
          >
            Add a Task
          </button>
          <div className="py-auto absolute right-5 h-20 w-20 rounded-full bg-red-300 shadow"></div>
        </div>
        {user.activities.concat(user.fixedPlans.map((plan)=>(plan.activity))).map((day, index) => (
          <Day key={index} day={day} />
        ))}
      </div>
      {modalOpen && (
        <AddTaskModal
          onClose={() => {
            setModalOpen(false)
          }}
          onSubmit={(task) => {
            setUser({
              ...user,
              activities: [...user.activities, task],
            })
            setModalOpen(false)
          }}
        />
      )}
    </div>
  )
}

export default Dashboard
