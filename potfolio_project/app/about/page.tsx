import React, { Component } from 'react'
import Style from './about.module.css' 
import Image from 'next/image'
import Passport from '../public/Passport.png'

const ABOUT = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-white text-black '>
      <div className=''>
        <header>
          <div className='text-7xl font-bold mt-20 text-cente font-sans hover:font-serif flex justify-center items-center'>
          <h1>
          Hi, i'm
          </h1>
          </div>

           <div className='text-9xl font-extrabold text-center mt-2 hover:font-serif flex justify-center items-center'>
          <h1>
           Nneji Obioma
           <br /> Oj
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

{/* comment section */}
          <div className='text-l font-bold text-center my-6 ' >
          <p className='whitespace-normal'>
          ⁋ One of the many blessing in life is the power of imagination. 
          <br /> When we are able to imaging things it leads to reality.
          <br /> having a good imagination has helped to create things
          <br /> that I would not have imagined possible
          <br />🕊
          <br /> Being positive and patient even in difficult times has also
          <br /> helped me to archive my goal, and work well with others.
          <br /> 🕊
           <br />like the saying, good things does not come easily, through
          <br /> many years of hard work and dedication,
          <br /> I have been able to learn and use these valuable skills,
          <br /> that have made me proficient and efficient in what i do.
          <br /> Such skill as:
          <br />🕊
          <br /> To me coding is like cooking, you need differnt ingredients
          <br />mixed in a certing quantity and amount to achive a delisious meal.
          <br /> coding gives you the same opportunities to mix different
          <br />components in otther to produce a great application That will
          <br />wow the imagination of a client.
          <br />🕊
          <br />To live and to love life is one key factor for me, that is why
          <br />I do my best to impact in the life others, to make them feel
          <br />and enjoy life.¶
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