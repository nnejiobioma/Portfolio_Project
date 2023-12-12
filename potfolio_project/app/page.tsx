import Image from 'next/image'
import about from './about/page'
import contact from './contact/page'
import skills from './skills/page'
import Link from 'next/link'

export default function Home() {
  return (
    <main>

<div className="grid grid-cols-2 gap-20">
  <div className='left_side'>01
   <div>
   <strong>Have you read the story
    The Tale of a Naughty Kitten by Lisa Spray</strong> 
    <span>😺There once were two cats who lived across the road from the school in a
    small town near you. One of them, named Fluff, lived in a nice house and her
    best friend, Kat, lived next door in a rather old and ugly house. The owners of the cats were best friends too. 
    One year both cats had kittens at the same time. The first kitten born to
Fluff was pretty little white cat. She was bigger than her brothers and sisters 
and her owners named her Beauty. Everyone who saw her felt that her name fit her perfectly.

Just a few hours later Kat had her kittens. But because her owners did not have much 
money they could not feed her as well as Fluff was fed, so her kittens were smaller 
and not as strong and pretty. Her very last kitten born was a tiny little black kitty 
that they named Midnight. Midnight was not large, but she had a very big heart and loved everyone.

Now Beauty, because she was so pretty, became quite spoiled. She knew she was lovely 
to look at and she was strong so she began bossing the other kittens around. One day 
she decided to pick on the neighbor’s kittens. And so she started to make life miserable 
for them. She called them names and laughed at them. She told all her brothers and sisters
 to stay away from them because they were small and weak and dirty. She was especially mean to little Midnight.

This went on for several days until one day Fluff, her mother, overheard her teasing 
Midnight. “Beauty, come here at once,” Fluff scolded. Beauty was startled to hear her
 mother so upset and looked up.

“Don’t you know that Kat saved my life years ago by distracting a big dog who would have 
killed me? If she had not risked her own life to save mine, you would not be here today. 
So you must be nice to her and her kittens if for no other reason than that,” her mother said.
 And then she continued, “Besides, the One Who Created Us All (who you smart children know as God) 
 tells us to be nice to everyone when we can.”

Now Beauty was spoiled but she was not a bad kitten. When she heard what Kat had done for her 
dear mother she became very ashamed of herself. “Oh, Mama, what should I do to make it up to 
Midnight and her brothers and sisters?”

“Please go to Kat and her kittens and apologize at once,” her mother replied. And so that is what Beauty did.

And she never made fun of anyone else for the rest of her long and happy life because she 
found out that making others happy makes us happy too.😸</span>

   </div>
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
