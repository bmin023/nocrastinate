import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Wacode 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <span className="from-blue-600 to-red-400 bg-gradient-to-r text-transparent bg-clip-text">
            WACODE 2022
          </span>
        </h1>

        <p className="mt-3 text-2xl">
          This is going to be lit.
        </p>
      </main>
    </div>
  )
}

export default Home
