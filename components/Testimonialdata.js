import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';

const Testimonialdata = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = new KeenSlider(sliderRef.current, {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 2.5,
            spacing: 32,
          },
        },
      },
    });

    // Clean up the slider when the component is unmounted
    return () => {
      slider.destroy();
    };
  }, []);

  const handlePrev = () => {
    sliderRef.current.moveToIdx(sliderRef.current.track.details.rel - 1);
  };

  const handleNext = () => {
    sliderRef.current.moveToIdx(sliderRef.current.track.details.rel + 1);
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:py-16 lg:px-8 xl:py-24">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
          Testimonial&apos;s  by our VLE
        </h2>


        <div ref={sliderRef} className="keen-slider mt-8 flex  items-center justify-center">
     
          <div className="keen-slider__slide">
            <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
              <div>
                <div className="flex gap-0.5 text-green-500">
                  {/* Star icons or ratings */}
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292..."
                    />
                  </svg>
                  {/* Repeat SVG 4 times for 5 stars */}
                </div>

                <div className="mt-4">
                  <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin&apos; Alive</p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    No, Rose, they are not breathing. And they have no arms or legs … Where are they?
                    You know what? If we come across somebody with no arms or legs, do we bother
                    resuscitating them? I mean, what quality of life do we have there?
                  </p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Michael Scott
              </footer>
            </blockquote>
          </div>
          
          {/* Add more slider slides here */}

          <div className="keen-slider__slide">
          <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
            <div>
              <div className="flex gap-0.5 text-green-500">
                {/* Star icons or ratings */}
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292..."
                  />
                </svg>
                {/* Repeat SVG 4 times for 5 stars */}
              </div>

              <div className="mt-4">
                <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin&apos; Alive</p>

                <p className="mt-4 leading-relaxed text-gray-700">
                  No, Rose, they are not breathing. And they have no arms or legs … Where are they?
                  You know what? If we come across somebody with no arms or legs, do we bother
                  resuscitating them? I mean, what quality of life do we have there?
                </p>
              </div>
            </div>

            <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
              &mdash; Michael Scott
            </footer>
          </blockquote>
        </div>


      


        


       

        </div>


        <div className="flex items-center mt-5 justify-center">
  
        <div className="flex gap-4">
          <button
            aria-label="Previous slide"
            className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            aria-label="Next slide"
            className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonialdata;
