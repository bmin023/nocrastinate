import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
      if (counter === 0) { 
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
        <h1 className="text-5xl font-bold">
          you are working on...
        </h1>
        <h1 className=" text-6xl py-16 font-bold">
          MATH
        </h1>
        <p className=" -mt-8 text-2xl">Time left: {counter}</p>
      </div>
    </div>
  )
}

export default Home
