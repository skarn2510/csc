import React from "react";

import Servicecards from "./common/Servicecards";
import Servicecardone from "./common/Servicecardone";

export const HomeOurservice = () => {
  return (
    <>
      <div className="text-center justify-center py-16 px-20 bg-[#20203E] m-auto h-[580px] w-full">
        <h1 className="text-4xl font-sans  text-white  ">
          OUR SERVICES
        </h1>
        <div className="flex justify-center items-center">
          <div className="md:grid md:grid-cols-12 lg:grid-cols-7 gap-0 m-14 mr-32 ml-0 ">
          
            <Servicecards
              image="/images/weservesection/home-loan.png"
              title="Home Loan"
            />

            <Servicecardone
              image="/images/weservesection/loan-against-property.png"
              title="Loan Against Property"
            />

            <Servicecards
              image="/images/weservesection/balance-transfer.png"
              title="Balance Transfer"
            />

            <Servicecardone
              image="/images/weservesection/commercial-loans.png"
              title="Commercial Loan"
            />

            <Servicecards
              image="/images/weservesection/od-limit.png"
              title="OD Limit"
            />

            <Servicecardone
              image="/images/weservesection/cash-credit-limit.png"
              title="CC Limit"
            />

            <Servicecards
              image="/images/weservesection/specialized-loan.png"
              title="Specialized Loans"
            />
          </div>
        </div>
      </div>
    </>
  );
};
