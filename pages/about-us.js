import React from "react";
import Banner from "../components/common/Banner";
import Whychoose from "../components/Whychoose";
import Footer from "../components/common/Footer";
import NavbarTwo from "../components/common/NavbarTwo";
import SectionHeaderLeft from "../components/common/SectionHeaderLeft";
import Image from 'next/image'

function about_us() {
  return (
    <>
      <NavbarTwo />
      <Banner title="Who We Are" ctitle="" image="/images/about.webp" btitle="About Us" />
      <div>
        <div className="container px-5 py-24 mx-auto">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <Image
                  className="rounded"
                  src="/images/consulting3.jpg"
                  alt="Consulting"
                  loading="lazy"
                  width={500}
                  height={500}
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <SectionHeaderLeft title="About CSC" />
                <p className="mt-6 text-gray-600 text-justify">
                  We are a premier digital marketing company with expertise in Brand management, Digital marketing services, and Enterprise solutions. Digital appearance through websites or social media channels is not enough to stand in the market. Businesses need smart tools to outshine the competition and lead the audience towards their brand.
                </p>
                <p className="text-gray-600 text-justify">
                  SSTECH Innovation understands the need and requirement of business growth and is working to help you reach the target with an analytical approach towards marketing and business assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Whychoose />

      <div>
        <div className="container px-5 py-24 mx-auto">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:7/12 lg:w-6/12">
                <SectionHeaderLeft title="What we Do.." />
                <p className="mt-6 text-gray-600 text-justify">
                  There are several odds and evens for any business. From the beginning of the journey, they follow up and participate in your success and failure. With our approach, one can convert the odds into growth and achieve the strata among the endlessly available competitors.
                </p>
                <p className="text-gray-600 text-justify">
                  Climb the ladder with analytics and logistic solutions, build your empire with reasonable ideology, and create an influence on the digital world.
                </p>
              </div>
              <div className="md:5/12 lg:w-5/12">
                <Image
                  className="rounded"
                  src="/images/consulting3.jpg"
                  alt="Consulting"
                  loading="lazy"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default about_us;
