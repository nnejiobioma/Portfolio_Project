import React from 'react'
import style from './skills.module.css'
import { FaHtml5, FaCss3Alt, FaGithub, FaPython, FaReact,FaFlask  } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import {  } from "react-icons/fa6";
import Link from 'next/link'
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs, TbBrandDjango } from "react-icons/tb";

const SKILLS = () => {
  return (
    <div className='w-full h-full my-40 flex justify-center items-center bg-black text-white'>
      <div>
       
      <div className=' grid grid-cols-4 gap-6'>
      <div className='hover:indent-8 my-10 place-content-around hover:animate-spin '>
   <Link href={"https://developer.mozilla.org/en-US/docs/Web/HTML"}>
     <FaHtml5 size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10 hover:animate-spin'>
 <Link href={"https://docs.github.com/en/"}>
     <FaGithub size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10 hover:animate-spin'>
 <Link href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}>
     <FaCss3Alt size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10 hover:animate-spin'>
 <Link href={"https://v2.tailwindcss.com/docs"}>
     <BiLogoTailwindCss size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10 hover:animate-spin'>
 <Link href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}>
     <IoLogoJavascript size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10 hover:animate-spin'>
 <Link href={"https://docs.python.org/3/"}>
     <FaPython size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10 hover:animate-spin'>
 <Link href={"https://react.dev/"}>
     <FaReact size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10 hover:animate-spin'>
 <Link href={"https://nextjs.org/docs"}>
     <TbBrandNextjs size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10 hover:animate-spin'>
 <Link href={"https://nextjs.org/docs"}>
     <TbBrandDjango size={100} />
</Link>
 </div>
 <div className='hover:indent-8 my-10 hover:animate-spin'>
 <Link href={"https://nextjs.org/docs"}>
     <FaFlask size={100} />
</Link>
 </div>

 </div>
 
 </div>
 
 </div>
     

  )
}

export default SKILLS