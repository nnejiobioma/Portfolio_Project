import React, { Component } from 'react'
import Style from './about.module.css' 
import Image from 'next/image'
import Passport from '../public/Passport.png'

const ABOUT = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-white text-black '>
      <div className=''>
        <header>
          <div className='text-7xl font-bold mt-20 text-cente font-sans hover:font-serif flex justify-center items-center  '>
          <h1>
          Hi, i'm
          </h1>
          </div>

           <div className='text-9xl font-extrabold text-center mt-2 hover:font-serif flex justify-center items-center'>
          <h1>
           Nneji Obioma 
          </h1>
          </div>


          <div className='mt-20 rotate-6 origin-center hover:origin-top flex justify-center  items-center '>
            <Image className='rounded-3xl border-8'
            src="/Passport.png"
            width={500}
            height={500}
            alt="Picture of the author"
    />
        </div>


          <div className='flex justify-center text-5xl font-bold text-center my-6'>
          <h1>
          a software engineer, 
          <br />who loves to cook
          </h1>
          
          </div>

          <div className='text-l font-bold text-center my-6 ' >
          <p className='whitespace-normal'>
          ⁋ One of the many blessing in life is the power of imagination. 
          <br /> When we are able to imaging things it leads to reality.
          <br /> having a good imagination has helped to create things
          <br /> that I would not have imagined possible
          <br />
          <br /> Being positive and patient even in difficult times has also
          <br /> helped me to archive my goal, and work well with others. ¶
          
          </p>
         </div>

         
        </header>

        <div className='mt-20 flex justify-center items-center text-l text-gray'>
    <h1>
      Copyright © 2022-2023 nnejiobioma. All rights reserved.
    </h1>
  </div>
 
      </div>      
    </div>
    
  )
}

export default ABOUT