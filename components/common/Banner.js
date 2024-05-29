import React from "react";

function Banner({ title, ctitle, image,btitle}) {
  return (
    <div
      style={{ backgroundImage: `url(${image})`,marginTop:`0px` }}
      className="w-full bg-center bg-cover h-96"
    >
      <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white Capitalize lg:text-4xl">
            {title} <span className="text-red-500">{ctitle}</span>
          </h1>
          {/* <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-red-600 rounded-md lg:w-auto hover:bg-red-700 focus:outline-none focus:bg-white">
            Start project
          </button> */}
          <p className="text-sm pt-2 p-2 text-white font-semibold underline underline-offset-4">
            HOME - <span className="text-red-500">{btitle} </span>
          </p>
          {/* <p className="text-sm pt-2 font-sans text-white">Create personalized and engaging experiences for your audience</p> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
