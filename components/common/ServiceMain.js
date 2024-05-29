import React from "react";
import SectionHeader from "./SectionHeader";
import SectionHeaderLeft from "./SectionHeaderLeft";
import Image from "next/image";
import Link from "next/link";

function ServiceMain({ image, sub, title, desc, thead }) {
  return (
    <div
      className="bg-gradient-to-b from-gray-100 to-gray-200 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/clean-red-web-template-banner-minimal-style_1017-15409.jpg?t=st=1653983068~exp=1653983668~hmac=0117115ae1758eb11b840fe3d3ea9c650dcdd57891bb328577d7d228a373f45a&w=900")`,
      }}
    >
      <div className="container m-auto px-6 py-10 md:px-12 lg:px-20">
        <SectionHeader title={thead} />
        <div className="m-auto text-center lg:w-8/12 xl:w-7/12"></div>
        <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-12/12">
          <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
            <div
              aria-hidden="true"
              className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110 border-4 border-y-red-500"
            ></div>
            <div className="relative p-6 lg:p-8">
              <Image
                className="rounded"
                src={image}
                alt="image"
                loading="lazy"
                width= {400}
                height={400}
              />
            </div>
          </div>

          <div className="relative group md:w-6/12 lg:w-7/12">
            <div
              aria-hidden="true"
              className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105 border-4 border-y-red-500"
            ></div>
            <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
              <header className="flex font-light text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rotate-90 -ml-2"
                  viewBox="0 0 24 24"
                  stroke="#b91c1c"
                >
                  <path
                    strokeLinecap="round"
                   strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  />
                </svg>
                <p>{sub}</p>
              </header>

              <SectionHeaderLeft title={title} />

              <p className="text-sm text-gray-600 text-justify tracking-wide pt-6">{desc}</p>

              <Link href="/contact-us" className="bg-red-600 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group">
                 Discuss Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                   strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

              <div className="mt-6 flex justify-between gap-6">
                <Image
                  className="w-16 lg:w-24"
                  src="https://tailus.io/sources/blocks/organization/preview/images/clients/airbnb.svg"
                  loading="lazy"
                  alt="airbnb"
                  width={60}
                  height={60}
                />
                <Image
                  className="w-8 lg:w-16"
                  src="https://tailus.io/sources/blocks/organization/preview/images/clients/bissell.svg"
                  loading="lazy"
                  alt="bissell"
                  width={60}
                  height={60}
                />
                <Image
                  className="w-6 lg:w-12"
                  src="https://tailus.io/sources/blocks/organization/preview/images/clients/ge.svg"
                  loading="lazy"
                  alt="ge"
                  width={60}
                  height={60}
                />
                <Image
                  className="w-20 lg:w-28"
                  src="https://tailus.io/sources/blocks/organization/preview/images/clients/microsoft.svg"
                  loading="lazy"
                  alt="microsoft"
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceMain;
