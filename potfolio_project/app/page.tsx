import Image from 'next/image'
import about from './about/page'
import contact from './contact/page'
import skills from './skills/page'
import Link from 'next/link'

export default function Home() {
  return (
    <main>

<div className="grid grid-cols-2 gap-4">
  <div className='left_side'>01
   <h1>
    This is the cat story
   </h1>
  </div>
  
  <div className='right_side'>09
<Link href="/about">Who Am i</Link>
<Link href="/contact">Contact</Link>
<Link href="/skills">Skills</Link>
  </div>
</div>
      
    </main>
  )
}
