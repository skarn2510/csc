import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Servicecards = ({image, title}) => {
  return (
   

    
    <div className="w-0 h-0 
    border-l-[150px] border-l-transparent
    border-b-[220px] border-b-yellow-500
    border-r-[150px] border-r-transparent ">

    <div className='absolute pt-20  ml-[-38px]'>
    <Image className="mx-auto" src={image} alt="Colors"  width={60} height={60}/> 
  
    <Link href="#">
         <h5 className=" text-xs font-bold tracking-tight text-white mb-2 ">{title}</h5>
    </Link>
    </div>
    
   
    </div>
 

    
  )
}

export default Servicecards