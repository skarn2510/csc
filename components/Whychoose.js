import React from 'react'
import Whychooseheader from './common/whychooseheader';
import Aboutblog from './common/aboutblog';

function Whychoose() {
  return (

 
    <div className="bg-gradient-to-tr from-gray-300 to-gray-100 py-10">
    
    <Whychooseheader title="Why Choose Us" />
    <div className="flex justify-center items-center">
      <div className="md:px-36 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:space-y-0">
        <Aboutblog
        
          title="Create Compelling Content And Ads"
          desc="We create creative ad copies and designs to help your brand stand out in the market and drive clicks."
         
        />
        <Aboutblog
         
          title="Chart Insights - Driven Strategies"
          desc="Our team expertise in multi-channel digital marketing helps us determine the right strategy to maximize ROI."
        
        />
        <Aboutblog
          
          title="Track And Optimize"
          desc="Campaigns don’t end once the Ads are live! We closely track the performance of the ads and optimize them to ensure efficient use of budgets to achieve the goals."
          
        />
      </div>
    </div>
  </div>
  
  )
}

export default Whychoose