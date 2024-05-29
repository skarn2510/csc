import React from 'react'
import Image from 'next/image'

const SectionAssociative = ({image}) => {
  return (
    <div>
    <div className="max-w-sm p-1 bg-white border border-white rounded-lg ">
    <Image className="mx-auto" src={image} alt="Colors" width={300} height={100}/>
  
    </div>
    </div>
  )
}

export default SectionAssociative