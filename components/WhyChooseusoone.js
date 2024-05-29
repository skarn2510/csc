import React from 'react'
import Image from "next/image";

const WhyChooseusoone = () => {
  return (
    <div className="grid grid-cols-2 ">
    {/** first */}
      <div className="bg-[#F3F5FA] p-20 ">
      <article className="text-pretty ml-20">
    
       
        <div className="pt-3">
        <h2 className="text-4xl font-normal text-[#333]">Who we are</h2>
        <ul className="list-disc pt-5">
          <li>We are team of Ex- Bankers, C.A. & professional consultants.</li>
          <li>We have 20 years of experience in loan and finance.</li>
          <li>We can facilitate loans up-to Rs. 100 Crore</li>
          <li>
            We have specialization in providing loan to:-
            <ul>
              <li>Cash Salary Employee</li>
              <li> No Income Proof Loan.</li>
              <li>Loan based on market value of property.</li>
              <li>Loan based on previous loans repayment history.</li>
              <li>Loan to Low Cibil Score or No Cibil Scroe.</li>
              <li>Bouncing in previous loans repayment track records.</li>
              <li>
                Providing loan to all kinds of profiles. There is no negative
                profile for us.
              </li>
            </ul>
          </li>

          <li>
            We are the best loan service provider in Delhi offering all types of
            property like:-
            <ul>
              <li>
                Property originated from any authority i.e. DDA, GDA, NOIDA,
                HUDA etc.
              </li>
              <li> Lal Dora Property</li>
              <li>All Regularized Area Property</li>
              <li>Dual Unit or Multiple Unit Property</li>
              <li>Property Without Map</li>
            </ul>
          </li>
          <li>
            We deals in all type of loans like Home Loan, Loan Against Property,
            Commercial Loan, OD Limit, CC Limit, Project Loan, Business Loan,
            etc.
          </li>
        </ul>
        </div>
        
        </article>
      </div>

    {/** second */}
      <div className="bg-[#E7EAF1] p-20">

    <article className="text-pretty ">
        <h1 className="text-4xl font-normal pb-7">WHY CHOOSE US?</h1>
        <Image
          src="/images/why-us.png"
          alt="Example Image"
          width={500}
          height={300}
        />
        <div className="pt-32">
        <ul className="list-disc">
          <li>Lowest interest rate and processing fee.</li>
          <li>Maximum loan amount with lowest EMI.</li>
          <li>Professional and dedicated loan advisor.</li>
          <li>Attractive loan offers and personalised loan products.</li>
          <li>Minimum documentations.</li>
          <li>Door step services.</li>
          <li>Fastest loan approval guaranteed.</li>
          <li>Amicable after sales service.</li>
          <li>No hidden charges.</li>
          <li>Private information &amp; data safety guaranteed.</li>
        </ul>
        </div>
        </article>
      </div>
      
    </div>
  )
}

export default WhyChooseusoone