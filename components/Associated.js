import React from 'react'
import SectionAssociative from './common/SectionAssociative';

const Associated = () => {
  return (
    <div className='text-center py-16 px-20 bg-[#F3F5FA] m-auto w-full h-screen'>
    <div className='py-4 px-8 relative'>
    <h2 className='font-sans text-2xl'>WE ARE ASSOCIATED WITH</h2>
   
    
    </div>
  <div className="flex justify-center items-center p-10">
    <div className="md:px-4 md:grid md:grid-cols-6 lg:grid-cols-6 gap-5 md:space-y-0">
      

    
      {/* first */}

      <SectionAssociative
      image="/images/weservesection/sl-logo1.jpg"   
    />
      
      <SectionAssociative
        image="/images/weservesection/sl-logo2.jpg"
        
        
      />
      <SectionAssociative
        image="/images/weservesection/sl-logo3.jpg"
     
      />
       <SectionAssociative
        image="/images/weservesection/sl-logo4.jpg"
   
        
      />
      <SectionAssociative
        image="/images/weservesection/sl-logo5.jpg"
      
      />

      <SectionAssociative
      image="/images/weservesection/sl-logo6.jpg"
    
    />

      {/* second */}
      
    <SectionAssociative
    image="/images/weservesection/sl-logo7.jpg"
    />

    <SectionAssociative
    image="/images/weservesection/sl-logo8.jpg"
    />

    <SectionAssociative
    image="/images/weservesection/sl-logo9.jpg"
    />

    <SectionAssociative
    image="/images/weservesection/sl-logo10.jpg"
    />

    <SectionAssociative
    image="/images/weservesection/sl-logo11.jpg"
    />

    <SectionAssociative
    image="/images/weservesection/sl-logo12.jpg"
    />
      
    </div>
   
  </div>
    
  </div>
  )
}

export default Associated