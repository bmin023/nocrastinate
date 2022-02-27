import moment from 'moment';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getCurrTask } from '../utils/classUtils';
import fakeUser from '../utils/fake';
import Link from 'next/link'

const Home: NextPage = () => {
  const [currPlan,setCurrPlan] = useState(getCurrTask(fakeUser));
  const [counter, setCounter] = useState(moment(currPlan.endTime).diff(moment(),'seconds'));
  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
      if (counter === 0 && currPlan.activity.name !== 'break') { 
        let taskNum = 0;
        taskNum++
        clearInterval(timer) 
          location.href = '/taskcomplete';
      }
    }, 1000)
    return () => clearInterval(timer);
  }, [counter])
  return (
    <div className="min-h-screen p-10">
      <Head>
        <title>Wacode 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex min-h-screen h-full w-full  flex-1 flex-col 
        items-center justify-center bg-blue-200 active:bg-indigo-400 text-center rounded-3xl shadow-xl">
          {currPlan.activity.name !== 'break' && <h1 className="text-5xl font-bold"> you are working on... </h1>}
      
        { currPlan.activity.name === 'break' ?
            <h1 className=" text-6xl py-16 font-bold ">take a break! you earned it</h1>
          :
            <h1 className=" text-6xl py-16 font-bold">{currPlan.activity.name}</h1>
        } 
        
        { currPlan.activity.name !== 'break' && <p className=" -mt-8 text-2xl">Time left: {moment.utc(counter*1000).format("HH:mm:ss")}</p>}
      </div>
      
    <Link href="/weekview">
        <a type="button" className="absolute top-10 left-10 m-4 mx-6 cursor-pointer font-extrabold rounded-xl bg-red-200 p-3 text-2xl shadow-l hover:bg-red-100 active:bg-red-400">
            week at a glance
        </a>
    </Link>
    <Link href="/dashboard">
        <a type="button" className="absolute top-10 right-10 m-4 mx-6 cursor-pointer font-extrabold rounded-xl bg-orange-200 p-3 text-2xl shadow-l hover:bg-orange-100 active:bg-orange-400">
            dashboard
        </a>
    </Link>
    </div>
  )
}

export default Home
