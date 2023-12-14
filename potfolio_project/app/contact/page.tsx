import React from 'react'
import Link from 'next/link'
import style from './contact.module.css'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

const CONTACT = () => {
  return (
    <div className='w-full h-screen'>
    <div className='mx-5 my-20 text-9xl font-bold flex flex- space-x-10 justify-center items-center'>
       
   {/* link creation */}
  <div className='hover:indent-8'>
   <Link href={"https://twitter.com/ojnneji"}>
     <BsTwitterX size={80} />
</Link>
 </div>
 <div className='hover:indent-8'>
 <Link href={"https://www.facebook.com/onneji/"}>
     <FaFacebookF size={80} />
</Link>
 </div>
 <div className='hover:indent-8'>
 <Link href={"https://www.instagram.com/ojnneji/"}>
     <FaInstagram size={80} />
</Link>
 </div>
 <div className='hover:indent-8'>
 <Link href={"https://wa.me/message/6SMPLULSD2PPL1"}>
     <FaWhatsapp size={80} />
</Link>
 </div>
 <div className='hover:indent-8'>
 <Link href={"/"}>
     <FaYoutube size={80} />
</Link>
 </div>
 <div className='hover:indent-8'>
 <Link href={"https://github.com/nnejiobioma"}>
     <FaGithub size={80} />
</Link>
 </div>
 <div className='hover:indent-8'>
 <Link href={"https://www.linkedin.com/in/nneji-obioma"}>
     <FaLinkedin size={80} />
</Link>
 </div>
 </div>

 <div className='flex justify-center items-center'>
  <h1>
    Contact form
  </h1>
 </div>



    {/* copy right section */}
 <div className='my-20 flex justify-center items-center text-l text-gray'>
    <h1>
      Copyright © 2022-2023 nnejiobioma. All rights reserved.
    </h1>
  </div>
    </div>
    
  )
}

export default CONTACT