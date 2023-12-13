import Image from 'next/image'
import about from './about/page'
import contact from './contact/page'
import skills from './skills/page'
import Link from 'next/link'
import React from "react"; 
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

  

export default function Home() {
  return (
    <main>

<div className="grid grid-cols-2 gap-15">
  <div className='leftSide p-10 my-20 text-9xl font-bold flex flex-col space-y-5 animate-bounce w-20 h-20 '>
   <div className='bg-red-100'>
   <div className='hover:indent-8'>
    <Link href={"/"}>
      <BsTwitterX size={80} />
</Link>
  </div>
  <div className='hover:indent-8'>
  <Link href={"/"}>
      <FaFacebookF size={80} />
</Link>
  </div>
  <div className='hover:indent-8'>
  <Link href={"/"}>
      <FaInstagram size={80} />
</Link>
  </div>
  <div className='hover:indent-8'>
  <Link href={"/"}>
      <FaWhatsapp size={80} />
</Link>
  </div>
  <div className='hover:indent-8'>
  <Link href={"/"}>
      <FaYoutube size={80} />
</Link>
  </div>
   </div>
  </div>
  
  <div className='rightSide p-10 my-20 text-9xl font-bold flex flex-col space-y-5  animate-bounce w-20 h-20 '>
  
  <div className='hover:indent-8'>
    <Link href="/about">i'am</Link>
  </div>
  <div className='hover:indent-8'>
    <Link  href="/skills">Skills</Link>
  </div>
  <div className='hover:indent-8'>
  <Link href="/contact">Contact</Link>
  </div>
  <div className="hover:animate-spin ">
  ✨
  </div>
</div>
</div>
      
    </main>
  )
}
