import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const Home: NextPage = () => {
    <meta charSet="UTF-8"></meta>
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
                &#129395; Task Complete! &#129395;
                </h1>
                <h1 className=" mt-10 text-4xl font-bold">
                    Nice Job!
                </h1>
                <p className="mt-3 text-2xl">Time to complete: 17:38</p>
                <div className="mt-24 space-y-6 text-l animate-bounce cursor-pointer;">
                    <Link href="/">
                        <a className="relative cursor-pointer font-extrabold">
                            <svg width="300" height="200" className="fill-yellow-400 stroke-yellow-600">
                                <polygon points="150,30 90,198 240,88 60,88 210,198" />
                            </svg>
                            <p className='absolute -left-7 top-20'>Return to tasks!</p>
                        </a>
                    </Link>
                </div>
                <figure>
                    <audio id="myAudio" controls
                        src="aaronping.ogg"
                        autoPlay>
                    </audio>
                </figure>
            </div>
        </div>
    )
}

export default Home
