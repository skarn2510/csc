import React from 'react'
import Underline from "./Underline";


const Aboutblog = ({ title, desc }) => {
  return (
    
   
       <>
        <div className="flex flex-col items-start  bg-white border rounded-3xl shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-10">
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
            </div>
        </div>
        </>

  
     
  );
}

export default Aboutblog