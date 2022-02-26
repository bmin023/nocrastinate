import type { NextPage } from 'next'
import { Interface } from 'readline'

type Assignment = {
  class: string,
  assignment: string,
  time: string,
}

//Make a type for a day that contains assignments
type Day = {
  date: string,
  assignments: Array<Assignment>,
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
  ]
}

interface DayProps {
  day: Day,
}

const Day: React.FC<DayProps> = ({ day }) => {
  return (
    <div className="w-full p-4">
      <h1 className="text-4xl font-bold text-center">{day.date}</h1>
      {day.assignments.map((assignment) => {
        return (
          <div className="flex justify-between p-4 m-4 rounded-lg bg-blue-300">
            <div className="w-1/2">
              <h1 className="text-2xl font-bold">{assignment.class}</h1>
              <p className="text-xl">{assignment.assignment}</p>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl font-bold">{assignment.time}</h1>
            </div>
          </div>
        );
      }
      )}
    </div>
  );
}

const Dashboard: NextPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Create a sidebar */}
      <div className="flex min-h-screen w-52 flex-col bg-slate-400">
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
      <div className='w-full'>
        <div className='w-full p-2 h-fit border-b-2 border-black  content-end justify-end flex'>
          <div className='bg-black h-20 w-20 rounded-full'></div>
        </div>
        <Day day={fakeDay} />
      </div>
    </div>
  )
}

export default Dashboard
