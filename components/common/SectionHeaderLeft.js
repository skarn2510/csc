import React from "react";

function SectionHeaderLeft({ title }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-700 capitalize lg:text-3xl dark:text-white">
        {title}
      </h1>
      <div className="mt-2">
        <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
        <span className="inline-block w-3 h-1 ml-1 rounded-full bg-red-500"></span>
        <span className="inline-block w-1 h-1 ml-1 rounded-full bg-red-500"></span>
      </div>
    </div>
  );
}

export default SectionHeaderLeft;
