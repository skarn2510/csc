import React from 'react'
import SectionHeader from "./common/SectionHeader";

import SectioHomeChoose from './common/SectioHomeChoose';

const HomewhyChooseus = () => {
  return (
    <div className="bg-gradient-to-tr from-gray-300 to-gray-100 py-16 px-16">

    <SectionHeader title="Why Choose us" subtitle={"WE DELIVER OUR BEST"} />
    <div className="flex justify-center items-center">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:space-y-0">
        <SectioHomeChoose
          num="01"
          image="/images/component/component1.png"
          title="Well Balanced Team"
          desc="With a deep understanding of the IoT & IIoT ecosystem, we have delivered over 100 successful projects."
        />
        <SectioHomeChoose
          num="02"
          image="/images/component/component2.png"
          title="Workflow Transparency"
          desc="With regular milestone tracking, reporting, and adherence to best project management practices."
        />
        <SectioHomeChoose
          num="03"
          image="/images/component/component3.png"
          title="Domain Expertise"
          desc="With multiple projects done on Travel, Healthcare, Ecommerce, Utilities, and more. We know the trends well."
        />

        <SectioHomeChoose
          num="01"
          image="/images/component/component4.png"
          title="Comprehensive Consulting"
          desc="With the Optimum Solution, Methodology, Technology Stack, and Pricing model, we provide quality consulting."
        />
        <SectioHomeChoose
          num="02"
          image="/images/component/component5.png"
          title="Customer Centric Approach"
          desc="Ensures that the customer Idea is at the center of a business's philosophy. We work on end-user experience."
        />
        <SectioHomeChoose
          num="03"
          image="/images/component/component6.png"
          title="Clear Project vision"
          desc="A clear project vision that unifies the team, eliminates confusion, and inspires them to do the best."
        />
      </div>
    </div>
  </div>
  )
}

export default HomewhyChooseus