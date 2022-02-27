import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Plan } from '../types/schoolTypes'
import { splitByWeekday } from '../utils/classUtils'
import fakeUser from '../utils/fake'
import moment from 'moment'

interface WeekProps {
  day: string
  color: 'red' | 'blue' | 'green' | 'yellow' | 'orange' | 'purple'
  schedule: Plan[]
}

const Weekday: React.FC<WeekProps> = ({ day, color, schedule }) => {
  const midnight = schedule[0] ? moment(schedule[0].startTime).startOf('day') : moment().startOf('day');
  const bgcol = {
    red: 'bg-red-300',
    blue: 'bg-blue-300',
    green: 'bg-green-300',
    yellow: 'bg-yellow-300',
    orange: 'bg-orange-300',
    purple: 'bg-purple-300',
  }
  const style =
    `grid shadow-lg rounded-3xl w-full h-full p-2 ${bgcol[color]}`
  return (
    <div className="h-5/6 w-1/5">
      <p className="text-center text-xl font-semibold">{day}</p>
      <div className={style} style={{columnCount: 1, gridTemplateRows: "repeat(168,auto)"}}>
        {schedule &&
          schedule.map((plan, index) => {
            const column = `${(
              (moment(plan.startTime).diff(midnight, 'minutes') / 5) - 96
            ).toFixed(0)} / ${(
              (moment(plan.endTime).diff(midnight, 'minutes') / 5) - 96
            ).toFixed(0)}`
            return (
              <div
                key={index}
                className="bg-gray-100 bg-opacity-10 rounded-xl shadow-sm p-1"
                style={{ gridRow: column }}
              >
                <p className="text-xs">{plan.activity.subject}</p>
                <p className="text-sm font-semibold">{plan.activity.name}</p>
                <p className='text-xs'>{moment(plan.startTime).format('h:mm a')}-{moment(plan.endTime).format('h:mm a')}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

const Home: NextPage = () => {
  const [schedule, setSchedule] = useState(splitByWeekday(fakeUser.fixedPlans))
  useEffect(() => {
    setSchedule(splitByWeekday(fakeUser.fixedPlans))
  }, [])

  return (
    <div className="min-h-screen">
      <Head>
        <title>Week View</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
