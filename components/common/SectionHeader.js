function SectionHeader({ subtitle, title, discription, cTitle }) {
  return (
    <div className="pt-8 pb-0 px-5 md:pb-5 md:px-10    flex flex-col justify-center items-center text-center">
       <span className="text-red-400">{subtitle}</span>
      <h1 className="lg:text-3xl text-2xl text-gray-600 capitalize font-bold">
        {title}
  
        <span className="text-red">{cTitle}</span>
      </h1>
      <div className="">
        <span className="inline-block w-96 h-1 rounded-full bg-red-500"></span>
        <span className="inline-block w-3 h-1 ml-1 rounded-full bg-red-500"></span>
        <span className="inline-block w-1 h-1 ml-1 rounded-full bg-red-500"></span>
      </div>
      <p className="pt-4 text-sm text-orange  text-gray-600 font-serif">
        {discription}
      </p>
    </div>
  );
}

export default SectionHeader;
