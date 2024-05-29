import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Servicecardone = ({image, title}) => {
  return (
    
    <div className="w-0 h-0 
    border-l-[150px] border-l-transparent
    border-t-[220px] border-t-red-500
    border-r-[150px] border-r-transparent">
    <div  className=' absolute pb-20 mb-30 ml-[-58px] mt-[-200px]'>
    <Image className="mx-28 " src={image} alt="Colors"  width={60} height={60}/>
  
    <Link href="#">
         <h5 className="mb-20 text-xs font-bold tracking-tight text-white">{title}</h5>
    </Link>
    </div>

</div>
    
  );
  
}

export default Servicecardone