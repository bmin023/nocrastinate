import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Plan } from '../types/schoolTypes'
import { getWeek, splitByWeekday } from '../utils/classUtils'
import fakeUser from '../utils/fake'
import moment from 'moment'

interface WeekProps {
  day: string
  color: 'red' | 'blue' | 'green' | 'yellow' | 'orange' | 'purple'
  schedule: Plan[]
}

const Weekday: React.FC<WeekProps> = ({ day, color, schedule }) => {
  const midnight = schedule[0]
    ? moment(schedule[0].startTime).startOf('day')
    : moment().startOf('day')
  const bgcol = {
    red: 'bg-red-300',
    blue: 'bg-blue-300',
    green: 'bg-green-300',
    yellow: 'bg-yellow-300',
    orange: 'bg-orange-300',
    purple: 'bg-purple-300',
  }
  const style = `grid shadow-lg rounded-3xl w-full h-full p-2 ${bgcol[color]}`
  return (
    <div className="h-5/6 w-1/5">
      <p className="text-center text-xl font-semibold">
        {day} {schedule[0] ? moment(schedule[0].startTime).format('Do') : ''}
      </p>
      <div
        className={style}
        style={{ columnCount: 1, gridTemplateRows: 'repeat(168,auto)' }}
      >
        {schedule &&
          schedule.map((plan, index) => {
            const column = `${(
              moment(plan.startTime).diff(midnight, 'minutes') / 5 -
              96
            ).toFixed(0)} / ${(
              moment(plan.endTime).diff(midnight, 'minutes') / 5 -
              96
            ).toFixed(0)}`
            return (
              <div
                key={index}
                className="rounded-xl bg-gray-100 bg-opacity-10 p-1 shadow-sm"
                style={{ gridRow: column }}
              >
                <p className="text-xs">{plan.activity.subject}</p>
                <p className="text-sm font-semibold">{plan.activity.name}</p>
                <p className="text-xs">
                  {moment(plan.startTime).format('h:mm a')}-
                  {moment(plan.endTime).format('h:mm a')}
                </p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

const Home: NextPage = () => {
  const [page, setPage] = useState(1)
  const [schedule, setSchedule] = useState(splitByWeekday(getWeek(fakeUser, page)))
  const resetWeek = () => {
    console.log(page)
    if (localStorage.getItem('user')) {
      setSchedule(
        splitByWeekday(
          getWeek(JSON.parse(localStorage.getItem('user') as string), page)
        )
      )
      console.log(schedule)
    } else {
      setSchedule(splitByWeekday(getWeek(fakeUser, page)))
    }
  }
  useEffect(() => {
    resetWeek()
  }, [])

  return (
    <div className="min-h-screen">
      <Head>
        <title>Week View</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <button
        onClick={() => {
          if (page > 0) {
            setPage(page - 1)
          }
          resetWeek()
        }}
        className="active:translate-y-1 -left-5 absolute top-1/2 flex h-12 w-12 content-center justify-center rounded-full bg-white bg-opacity-30 text-4xl font-bold backdrop-blur-md transition-transform hover:translate-x-5"
      >
        {'<'}
      </button>
      <button
        onClick={() => {
          if (page > 0) {
            setPage(page + 1)
          }
          resetWeek()
        }}
        className="absolute -right-5 top-1/2 flex h-12 w-12 content-center justify-center rounded-full bg-white bg-opacity-30 text-4xl font-bold backdrop-blur-md transition-transform hover:-translate-x-5 active:translate-y-1"
      >
        {'>'}
      </button> */}
      <div className="flex">
        <p className="m-4 text-4xl font-bold">week at a glance</p>
        <div className="grow"></div>
        <Link href="/dashboard">
          <a className="m-4 mx-6 rounded-xl bg-indigo-300 p-3 text-2xl font-bold shadow-xl hover:bg-indigo-200 active:bg-indigo-400">
            Dashboard
          </a>
        </Link>
      </div>
      <div className="flex h-screen w-full space-x-4 px-4">
        <Weekday day="Monday" color="red" schedule={schedule[1]} />
        <Weekday day="Tuesday" color="blue" schedule={schedule[2]} />
        <Weekday day="Wednesday" color="green" schedule={schedule[3]} />
        <Weekday day="Thursday" color="yellow" schedule={schedule[4]} />
        <Weekday day="Friday" color="orange" schedule={schedule[5]} />
        <Weekday
          day="Weekend"
          color="purple"
          schedule={schedule[6].concat(schedule[0])}
        />
      </div>
    </div>
  )
}

export default Home
