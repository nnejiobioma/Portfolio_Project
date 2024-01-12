import Image from 'next/image'
import about from './about/page'
import contact from './contact/page'
import skills from './skills/page'
import Link from 'next/link'
import React from "react"; 
import login from './login/page'

  

export default function Home() {
  return (
    <main className='w-full h-full'>

    <div className=' my-20 text-8xl font-bold flex flex-col space-y-5 justify-center items-center '>
  <div className='hover:indent-8'>
    <Link href="/about">i'am. </Link>
  </div>
  <div className='hover:indent-8'>
    <Link  href="/skills">Skills.</Link>
  </div>
  <div className='hover:indent-8'>
  <Link href="/contact">Contact.</Link>
  </div>
  <div className='hover:indent-8'>
  <Link href="/login">Login.</Link>
  </div>
  <div className="hover:animate-spin ">
  ✨
  </div>
  </div>

  <div className='flex justify-center items-center text-2xl font-bold '>
    <h1 className=''>
      Let's Code it!
    </h1>
  </div>

  <div className='mt-20 flex justify-center items-center text-l text-gray'>
    <h1>
      Copyright © 2022-2023 nnejiobioma. All rights reserved.
    </h1>
  </div>
 
    </main>
  )
}
