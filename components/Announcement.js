import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image"; // Import Image component from next/image if you're using Next.js

const Announcement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="py-2 bg-blue-300 text-red-600 cursor-pointer">
        <Marquee>Loan based on market value of property.</Marquee>
      </div>

      {isModalOpen && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-700 h-[600px]">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={handleModalToggle}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
            
          
              <Image src="/images/Banners/creative-Awarness_and_query.jpg" alt="asdfas" width={5000} height={7000} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Announcement;
