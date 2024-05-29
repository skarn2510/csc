import Link from "next/link";
import React from "react";
import Underline from "./Underline";
import Image from "next/image";

function ServiceCard({ num, title, desc, image,link }) {
  return (
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg hover:scale-105 duration-200">
      <h3 className=" text-xl font-bold text-red-600">{title}</h3>
      <Underline />
      <div className="relative">
        <Image className="w-full rounded-xl" src={image} alt="Colors"  width={500} height={500} />

        <p className="absolute top-0 bg-gradient-to-r from-red-700 to-red-400 text-black font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          {num}
        </p>
      </div>
      <p className="mt-6 pb-6 tracking-tight 
        leading-relaxed font-sans text-justify">{desc}</p>
      <Link href={link} type="button" className="text-center mb-4 w-full text-white bg-gradient-to-r from-red-700 to-red-400 py-2 rounded-xl shadow-lg">
        Know more
      </Link>
    </div>
  );
}

export default ServiceCard;
