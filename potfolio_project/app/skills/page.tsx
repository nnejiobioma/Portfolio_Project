import React from 'react'
import style from './skills.module.css'
import { FaHtml5, FaCss3Alt, FaGithub, FaPython, FaReact  } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import {  } from "react-icons/fa6";
import Link from 'next/link'
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

const SKILLS = () => {
  return (
    <div className='w-full h-full my-20 flex justify-center items-center bg-black text-white'>
      <div>
        <div className='text-l font-bold text-center my-6 '>
        <p className='whitespace-normal'>
          like the saying, good things does not come easily, through
          <br /> many years of hard work and dedication,
          <br /> I have been able to learn and use these valuable skills,
          <br /> that have made me proficient and efficient in what i do.
          <br /> Such skill as:
        </p>
      </div>
      <div className=' grid grid-cols-4 gap-6'>
      <div className='hover:indent-8 my-10 place-content-around'>
   <Link href={"https://twitter.com/ojnneji"}>
     <FaHtml5 size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10'>
 <Link href={"https://www.facebook.com/onneji/"}>
     <FaGithub size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10'>
 <Link href={"https://www.instagram.com/ojnneji/"}>
     <FaCss3Alt size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10'>
 <Link href={"https://wa.me/message/6SMPLULSD2PPL1"}>
     <BiLogoTailwindCss size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10'>
 <Link href={"/"}>
     <IoLogoJavascript size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10'>
 <Link href={"https://github.com/nnejiobioma"}>
     <FaPython size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10'>
 <Link href={"https://www.linkedin.com/in/nneji-obioma"}>
     <FaReact size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10'>
 <Link href={"https://www.linkedin.com/in/nneji-obioma"}>
     <TbBrandNextjs size={100} />
</Link>
 </div>
 </div>
 
 </div>
 
 </div>
     

  )
}

export default SKILLS