import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";

const Testimonialone = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1000, 
  };

  const data = [
    {
      name: "AGRI LOAN",
      img: "/images/product_image/joint-liability.png",

     
      
    },
    {
      name: "AUTO LOAN",
      img: "/images/product_image/carlgo.png",
      
    },
    {
      name: "BUSINESS LOAN",
      img: "/images/product_image/apply.png",
     
    },
    {
      name: "CD CONSUMER DURABLE",
      img: "/images/product_image/consumer-durable.png",
     
    },
    {
      name: "COMMERCIAL VEHICLES",
      img: "/images/product_image/tractor-loan.png",
     
    },

    {
      name: "CONSTRUCTION EQUIPMENT",
      img: "/images/product_image/life-style.png",
     
    },

    {
      name: "DUKANDAR OVERDRAFT",
      img: "/images/product_image/life-style.png",
     
    },

    {
      name: "EDUCTION LOAN",
      img: "/images/product_image/apply.png",
     
    },
    {
      name: "FUND BASED FACILITY",
      img: "/images/product_image/apply.png",
     
    },

    {
      name: "GOLD LOAN",
      img: "/images/product_image/gold_loan.gif",

    },

    {
      name: "HEALTHCARE FINANCE",
      img: "/images/product_image/life-style.png",

    },

    {
      name: "HOME LOAN",
      img: "/images/product_image/home-loan.png",

    },

    {
      name: "IMPLEMENT FINANCE",
      img: "/images/product_image/tractor-loan.png",

    },

    {
      name: "IFRASTRUCTURE GROUP LOAN",
      img: "/images/product_image/consumer-durable.png",

    },

    {
      name: "JOINT LIABILITY GROUP",
      img: "/images/product_image/joint-liability.png",

    },
  ];

  return (
   
    <div className="w-3/4 h-screen m-auto">
      
        <h2 className="text-center justify-center text-2xl font-sans m-10">
          Our Product
        </h2>

        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="p-2" // Adding padding to create space between cards
            >
              <div className="bg-indigo-500 rounded-md flex flex-col items-center justify-center h-80 p-5 w">
                <div className="mt-10 ml-10">
                  <Image
                    src={d.img}
                    alt={d.name}
                    className="bg-white rounded-full  mb-4"
                    width={200}
                    height={200}
                  />
                  <p className="text-white text-center mr-6">{d.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      
    </div>

 
  );
};

export default Testimonialone;
