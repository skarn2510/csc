import React from 'react'
import NavbarTwo from '../components/common/NavbarTwo'
import Banner from '../components/common/Banner'
import Image from 'next/image';

const gallerypage = () => {
  return (
   <div>
   <NavbarTwo/>
   <Banner
   title="Gallery"
   btitle={"Gallery"}
   image= 'images/weservesection/b.png'
 />
 <h1 className='text-center my-4 text-[#2B4580] text-2xl'>Our Team</h1>

<div className='grid grid-cols-3 justify-center items-center mx-6 gap-10 my-10'>
 <div className="max-w-sm rounded overflow-hidden shadow-lg ">

 <Image
 src="/images/weservesection/b.png" // Path relative to the public directory
 alt="My Logo"
 width={1000} 
 height={500} 
/>
   <p className="text-gray-700 text-base">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
   </p>
</div>
<div className="max-w-sm rounded overflow-hidden shadow-lg">
<Image
src="/images/weservesection/b.png" // Path relative to the public directory
alt="My Logo"
width={1000} 
height={500} 
/>

 <p className="text-gray-700 text-base">
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
 </p>
</div>
<div className="max-w-sm rounded overflow-hidden shadow-lg">
<Image
src="/images/weservesection/b.png" // Path relative to the public directory
alt="My Logo"
width={1000} 
height={500} 
/>

 <p className="text-gray-700 text-base">
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
 </p>
</div>


<div className="max-w-sm rounded overflow-hidden shadow-lg">
<Image
src="/images/weservesection/b.png" // Path relative to the public directory
alt="My Logo"
width={1000} 
height={500} 
/>
<p className="text-gray-700 text-base">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
</p>
</div>

<div className="max-w-sm rounded overflow-hidden shadow-lg">
<Image
src="/images/weservesection/b.png" // Path relative to the public directory
alt="My Logo"
width={1000} 
height={500} 
/>
<p className="text-gray-700 text-base">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
</p>
</div>
<div className="max-w-sm rounded overflow-hidden shadow-lg">
<Image
src="/images/weservesection/b.png" // Path relative to the public directory
alt="My Logo"
width={1000} 
height={500} 
/>
<p className="text-gray-700 text-base">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
</p>
</div>
<div className="max-w-sm rounded overflow-hidden shadow-lg">
<Image
src="/images/weservesection/b.png" // Path relative to the public directory
alt="My Logo"
width={1000} 
height={500} 
/>
<p className="text-gray-700 text-base">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
</p>
</div>

<div className="max-w-sm rounded overflow-hidden shadow-lg">
<Image
src="/images/weservesection/b.png" // Path relative to the public directory
alt="My Logo"
width={1000} 
height={500} 
/>
<p className="text-gray-700 text-base">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
</p>
</div>
<div className="max-w-sm rounded overflow-hidden shadow-lg">
<Image
src="/images/weservesection/b.png" // Path relative to the public directory
alt="My Logo"
width={1000} 
height={500} 
/>
<p className="text-gray-700 text-base">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
</p>
</div>




<style>{`
.imageWrapper {
    width: 100%; 
    height: auto; 
  }
}
`}</style>




</div>







 





 
   </div>
  )
}

export default gallerypage


