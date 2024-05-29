import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const Testimonialtwo = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,  // This will help in creating gaps
        centerPadding: "20px"  // Adjust this value for desired gap
      };
    
      const data = [
        {
          name: "AGRI LOAN",
          img: "/images/product_image/carlgo.png",
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
          
        },
        {
          name: "AUTO LOAN",
          img: "/images/product_image/carlgo.png",
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
          
        },
        {
          name: "BUSINESS LOAN",
          img: "/images/product_image/carlgo.png",
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
         
        },
        {
          name: "Home Loan",
          img: "/images/product_image/carlgo.png",
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
         
        },
      ];
    
      return (
        
        <div className=''>
        <div className='w-4/5 m-auto  h-screen mb-10 mt-10'>
         
          
          <h1 className='text-center text-xl'>Testimonial&apos;s By Our VLE</h1>
          <div className='mt-10'>
            <Slider {...settings}>
              {data.map((d) => (
                <div key={d.name} className="p-2"> {/* Add padding to create gap */}
                  <div className="bg-gray-200 h-[480px] text-black rounded-xl"> {/* Set background color */}
                    <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                      <Image src={d.img} alt="" className="rounded-full" width={100} height={100}/>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 p-4">
                      <p className="text-xl font-semibold">{d.name}</p>
                      <p className="text-center">{d.review}</p>
                      <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                    </div>
                  </div>
                </div>
                
              ))}
            </Slider>
          </div>
          </div>
        </div>
       
        
      );
}

export default Testimonialtwo;
