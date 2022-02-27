import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <div className="min-h-screen p-10">
            <Head>
                <title>Task Complete</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className="flex min-h-screen h-full w-full  flex-1 flex-col 
        items-center justify-center bg-purple-300 text-center rounded-3xl border-4 border-purple-900">

                <h1 className="m-5 text-6xl font-bold">
                    Task Complete!
                </h1>
                <h1 className=" mt-10 text-4xl font-bold">
                    Nice Job!
                </h1>
                <p className="mt-3 text-2xl">Time to complete: 17:38</p>
                <h1 className="mt-24 space-y-6 w-32 h-14 justify-center bg-purple-500 text-center border-2 border-purple-700 hover:bg-purple-400 text-xl  cursor-pointer;">
                    <Link href="/">
                        <a type="button" className="cursor-pointer font-extrabold">
                            Return to tasks!
                        </a>
                    </Link>
                </h1>
            </div>
        </div>
    )
}

export default Home
