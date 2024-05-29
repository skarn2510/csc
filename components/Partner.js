import React from 'react'
import SectionPartner from './common/SectionPartner'

const Partner = () => {
  return (
    <div>

 <div className='text-center p-40 bg-[#242442] w-full m-auto h-[780px]'>
    <h2 className='font-medium text-4xl text-white'>Become our partner</h2>
    <p className='text-white'>Join as a partner, Live as a family</p>
    <div className="flex justify-center items-center">
    <div className="grid grid-cols-2 gap-4">   
      {/* first */}
      <SectionPartner
        image="/images/weservesection/loan-on-phone1.png"
        title="Loan On Phone"
      />
    
      <SectionPartner
      image="/images/weservesection/loan-on-phone2.png"
      title="Loan On Phone"
    />
    <p className='text-white'>Join us as a partner in building the business, so we can grow together.</p>
    <p className='text-white'>  Refer your friends & family members and earn referal incentive upon successful disbursement of loan.</p>
    <button className="border-2 bg-[#242442] text-white inline-block w-48 m-auto font-bold p-2 rounded-xl">
    JOIN US
    </button>
    <button className="border-2 bg-[#242442] text-white inline-block m-auto w-48 font-bold p-2 rounded-xl">
    REFER NOW
    </button>
    </div>    
    </div>
   
  </div>

  
    </div>
  )
}

export default Partner