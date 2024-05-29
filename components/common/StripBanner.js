import React from "react";
import { Link } from "react-scroll";


function StripBanner() {
  return (
    <div className="bg-[url('https://t4.ftcdn.net/jpg/02/72/31/43/360_F_272314351_9gOQ8G7jofMRqtpoGACN9yQ6DllTzXAz.jpg')] bg-cover">
      <div className="lg:grid lg:grid-cols-1">
        <div className="py-10 px-20 text-center w-full   mx-auto">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
            <span className="block">Ready to dive in?</span>
            <span className="block">Start your free trial today.</span>
          </h2>
          <p className="text-gray-300 mt-5 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="inline-block shadow mt-5">
            <Link
              href="/hireteam"
              type="button"
              className="w-52 m-auto px-6 py-2.5  text-red-700 bg-white font-medium text-sm leading-tight uppercase rounded-md shadow-md hover:text-white hover:bg-red-800 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out border"
            >
              Get Started
            </Link>
          </div>
        </div>
  
      </div>
    </div>
  );
}

export default StripBanner;
