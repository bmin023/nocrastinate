import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen p-10">
      <Head>
        <title>Wacode 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex min-h-screen h-full w-full  flex-1 flex-col 
        items-center justify-center bg-blue-200 text-center rounded-3xl border-4 border-blue-700">
          <h1 className="text-6xl font-bold">
            you are working on...
          </h1>
            <h1 className=" text-6xl py-16 font-bold">
              MATH
            </h1>
          <p className="mt-3 text-2xl">Time left: 0:36:37</p>
        </div>
    </div>
  )
}

export default Home
