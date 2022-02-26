import type { NextPage } from 'next'
import Head from 'next/head'

interface WeekProps {
  day: string
  color: "red" | "blue" | "green" | "yellow" | "orange" | "purple"
}

const Weekday: React.FC<WeekProps> = ({ day, color }) => {
  const bgcol = {
    red: "bg-red-400",
    blue: "bg-blue-400",
    green: "bg-green-400",
    yellow: "bg-yellow-400",
    orange: "bg-orange-400",
    purple: "bg-purple-400",
  }
  const style = "rounded-3xl w-full h-full p-2 " + bgcol[color];
  return (
    <div className="h-5/6 w-1/5">
      <p className="text-center text-xl font-semibold">{day}</p>
      <div className={style}></div>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Week View</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="m-4 text-4xl font-bold">week at a glance</p>
      <div className="flex h-screen w-full space-x-4 px-4">
        <Weekday day="Monday" color="red" />
        <Weekday day="Tuesday" color="blue" />
        <Weekday day="Wednesday" color="green" />
        <Weekday day="Thursday" color="yellow" />
        <Weekday day="Friday" color="orange" />
        <Weekday day="Weekend" color="purple" />
      </div>
    </div>
  )
}

export default Home
