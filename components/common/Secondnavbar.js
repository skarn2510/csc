import React, { useState, useEffect } from "react";

import Link from "next/link";

const Secondnavbar = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenone, setIsDropdownOpenone] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = (event) => {
    setIsDropdownOpen((prevState) => !prevState);
    event.stopPropagation(); // Prevent event bubbling
  };

  const toggleDropdownone = (event) => {
    setIsDropdownOpenone((prevState) => !prevState);
    event.stopPropagation(); // Prevent event bubbling
  };

  // Function to close dropdown when clicking outside
  const closeDropdown = () => {
    setIsDropdownOpen(false);
    toggleDropdownone(false);
  };

  // Set up a useEffect to add/remove click event listeners

  useEffect(() => {
    const closeHandler = () => {
      if (isDropdownOpen) setIsDropdownOpen(false);
      if (isDropdownOpenone) setIsDropdownOpenone(false);
    };

    document.addEventListener("click", closeHandler);

    return () => {
      document.removeEventListener("click", closeHandler);
    };
  }, [isDropdownOpen, isDropdownOpenone]);

  return (
    <div>
      <div className="flex mx-60 gap-3 py-4">
        <Link href="/" replace>
          Home
        </Link>

        <Link href="/about-us" replace>
          About Us
        </Link>

        {/**dropdown start */}
        <div className="relative inline-block text-left">
          <button
            id="dropdown-button"
            className="inline-flex items-center justify-between w-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 rounded-md shadow-sm hover:bg-gray-50"
            onClick={toggleDropdown} // Use React event handling
          >
            PARTNER
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.23 7.21a.75.75 0 011.06.02l3.71 4 3.71-4a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
            </svg>
          </button>

          <div
            id="dropdown-menu"
            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white border rounded-md shadow-lg ${
              isDropdownOpen ? "" : "hidden"
            }`}
          >
            <ul className="py-1">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  PARTNER 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  PARTNER 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  PARTNER 3
                </a>
              </li>
              <li>
                <form method="POST" action="#">
                  <button
                    type="submit"
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>

        {/**dropdown end */}

        {/**dropdown start */}
        <div className="relative inline-block text-left">
          <button
            id="dropdown-button"
            className="inline-flex items-center justify-between w-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 rounded-md shadow-sm hover:bg-gray-50"
            onClick={toggleDropdownone} // Use React event handling
          >
            PRODUCT
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.23 7.21a.75.75 0 011.06.02l3.71 4 3.71-4a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
            </svg>
          </button>

          <div
            id="dropdown-menu"
            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white border rounded-md shadow-lg ${
              isDropdownOpenone ? "" : "hidden"
            }`}
          >
            <ul className="py-1">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  PRODUCT 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  PRODUCT 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  PRODUCT 3
                </a>
              </li>
              <li>
                <form method="POST" action="#">
                  <button
                    type="submit"
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>

        {/**dropdown end */}

        <Link href="/gallerypage" replace>
          Gallery
        </Link>

        <Link href="/contact-us" replace>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Secondnavbar;
