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
        items-center justify-center bg-blue-200 text-center rounded-3xl border-4 border-blue-600">
          {currPlan.activity.name !== 'break' && <h1 className="text-5xl font-bold"> you are working on... </h1>}
      
        { currPlan.activity.name === 'break' ?
            <h1 className=" text-6xl py-16 font-bold ">take a break! you earned it</h1>
          :
            <h1 className=" text-6xl py-16 font-bold">currPlan.activity.name</h1>
        } 
        
        { currPlan.activity.name !== 'break' && <p className=" -mt-8 text-2xl">Time left: {counter}</p>}
      </div>
      <h1 className="-m-20 mx-20">
        <Link href="/weekview">
            <a type="button" className="cursor-pointer font-extrabold rounded-xl bg-orange-100 p-3 text-2xl shadow-l hover:bg-orange-200 active:bg-orange-400">
                week at a glance
            </a>
        </Link>
      </h1>
    </div>
  )
}

export default Home
