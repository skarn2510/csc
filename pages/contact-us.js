import React from "react";
import Banner from "../components/common/Banner";
import Footer from "../components/common/Footer";
import NavbarTwo from "../components/common/NavbarTwo";
import Underline from "../components/common/Underline";

function ContactUs() {
  return (
    <>
      <NavbarTwo />
      <Banner
        title="Contact-Us"
        btitle={"Contact-Us"}
        image="https://img.freepik.com/free-photo/business-website-page-contact-print-screen-wooden-block-cube-include-telephone-address-email-message-contact-us-customer-service-concept-from-self-service-by-3d-render_50039-2827.jpg?w=826"
      />
      <div className="bg-slate-200">
        <div className="container m-auto px-6 py-20 md:px-12 lg:px-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
            <div className="lg:w-3/6 lg:pr-0 pr-0 space-y-4">
              <h1 className="font-medium text-5xl text-black">
                Let&apos;s talk?
              </h1>
              <Underline />
              <p className="leading-relaxed mt-4 text-black">
                It&apos;s all about the humans behind a brand and those
                experiencing it, we&apos;re right there. In the middle
                performance quick.
              </p>
              <ol className="">
                <li>
                  <div className="flex flex-wrap gap-4 py-10 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 fill-red-500 hover:fill-red-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <div className="content">
                      <h5 className="font-medium text-3xl text-black">
                        Address
                      </h5>

                      <p className="leading-relaxed mt-4 text-black">
                        238, Okhla Phase 3 Rd, Okhla Phase III, Okhla Industrial
                        Estate, New Delhi, Delhi 110020
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-wrap gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 fill-red-500 hover:fill-red-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <div className="content">
                      <h5 className="font-medium text-3xl text-black">
                        CONTACT
                      </h5>

                      <p className="leading-relaxed mt-4 text-black">
                        +91-9878555641
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-50 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                  Phone
                </label>
                <input
                  type="text"  // Fixed the input type for phone
                  id="phone"
                  name="phone"
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                >
                  {" "}
                </textarea>
              </div>
              <button className="text-black bg-red-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-red-700 text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.296748138125!2d77.08783851549298!3d28.470608598140977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f2f26008ebf%3A0xe9042b797a7fc9d7!2sBizzeonline!5e0!3m2!1sen!2sin!4v1653904052688!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
