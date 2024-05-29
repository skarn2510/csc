import Link from "next/link";
function StripBannerMini({ image, title, discription, onClick }) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="lg:h-[40vh] h-auto bg-cover bg-center  bg-no-repeat w-full flex flex-col text-white p-10 lg:p-20 text-center space-y-8 justify-center "
    >
      <h1 className="w-2/4 m-auto lg:text-2xl sm:text-2xl">{title}</h1>
      <Link passHref href="/contact-us">
        <button
          type="button"
          className="w-52 m-auto px-6 py-2.5  text-white bg-gradient-to-r from-red-600 to-red-800 text-sm font-medium leading-tight uppercase rounded-md shadow-md hover:bg-gray-900 hover:shadow-lg hover:scale-105 drop-shadow-md focus:bg-gray-900 focus:shadow-lg focus:outline focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out border"
        >
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default StripBannerMini;
