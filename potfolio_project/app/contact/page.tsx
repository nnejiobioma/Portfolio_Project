import React from 'react'
import Link from 'next/link'
import style from './contact.module.css'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

const CONTACT = () => {
  return (
    <div className='w-full h-full flex justify-center items-center my-40'>
    <div className='grid grid-cols-3 gap-10'>
       
   {/* link creation */}
  <div className='hover:indent-8 my-10'>
   <Link href={"https://twitter.com/ojnneji"}>
     <BsTwitterX size={80} />
</Link>
 </div>
 <div className='hover:indent-8 my-10'>
 <Link href={"https://www.facebook.com/onneji/"}>
     <FaFacebookF size={80} />
</Link>
 </div>
 <div className='hover:indent-8 my-10'>
 <Link href={"https://www.instagram.com/ojnneji/"}>
     <FaInstagram size={80} />
</Link>
 </div>
 <div className='hover:indent-8 my-10'>
 <Link href={"https://wa.me/message/6SMPLULSD2PPL1"}>
     <FaWhatsapp size={80} />
</Link>
 </div>
 <div className='hover:indent-8 my-10'>
 <Link href={"/"}>
     <FaYoutube size={80} />
</Link>
 </div>
 <div className='hover:indent-8 my-10'>
 <Link href={"https://github.com/nnejiobioma"}>
     <FaGithub size={80} />
</Link>
 </div>
 <div className='hover:indent-8 my-10'>
 <Link href={"https://www.linkedin.com/in/nneji-obioma"}>
     <FaLinkedin size={80} />
</Link>
 </div>
 
 </div>
   
    </div>
    
  )
}

export default CONTACT