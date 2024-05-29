import React from 'react'
import Image from 'next/image'

const SectionPartner = ({title,image}) => {
  return (
    <div>
   
    <Image className="mx-auto  rounded-full" src={image} alt="Colors" width={200} height={200}  />

    

 
    </div>
  )
}

export default SectionPartner