import React from "react";
import SectionHeader from "./common/SectionHeader";
import TriCard from "./common/TriCard";

function HomeTriCard() {
  return (
    <>
      <section className="md:h-full flex items-center text-gray-600">
        <div className="container px-5 pb-24 mx-auto">
          <SectionHeader title="Testimonials" />
          <div className="flex flex-wrap -m-4 px-8">
            <div className="p-2 sm:w-1/2 lg:w-1/3">
              <TriCard
                image={"/images/workflow.jpg"}
                title="We create workflow models"
                desc="AEM outsourcing is indeed the one-stop solution, but we believe that without a workflow model, the results suffer mismanagement. We work in a team following a workflow model to save time and add efficiency to our work. The model is created by keeping in mind the need of the project and client. We work differently for a better experience and output."
                link="/about-us"
              />
            </div>
            <div className="p-2 sm:w-1/2 lg:w-1/3">
              <TriCard
                image={"/images/relation.jpg"}
                title="We build B2C Relations"
                desc="The time has come when both businesses and customers are engaged in the market equally. They both can not directly communicate but can communicate through their digital window. AEM gives hybrid CMS for the centralised content development, and we make sure it reaches the customer. Our team engages in B2C relations aside from AEM to create a communication chain."
                link="/about-us"
              />
            </div>
            <div className="p-2 sm:w-1/2 lg:w-1/3">
              <TriCard
                image={"/images/solution.jpg"}
                title="We design, operate & manage"
                desc="AEM provides two parts for web development, one for content and one for designing. The author part provides easy templates for the authors to publish content and the publishing part is where the designer and developer works. We design, operate and manage the websites with creativity, smoothness, and direction."
                link="/about-us"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeTriCard;
