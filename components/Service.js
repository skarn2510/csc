import React from "react";
import SectionHeader from "./common/SectionHeader";
import ServiceCard from "./common/ServiceCard";

function Service() {
  return (
    <div className="bg-gradient-to-tr from-gray-300 to-gray-100 py-10">
      <SectionHeader title="What We Bring To You" />
      <div className="min-h-screen  flex justify-center items-center">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:space-y-0">
          <ServiceCard
            num="01"
            image="/images/consulting2.jpg"
            title="AEM consulting"
            desc="AEM consultation add smoothness in your business.For a consistent and engaging digital experience to users across channels, AEM consulting is a full-scale solution that also reduces TAT. It helps in the seamless delivery of content across channels"
            link="/aemconsulting"
          />
          <ServiceCard
            num="02"
            image="/images/consulting3.jpg"
            title="Hire AEM team"
            desc="Hire AEM developers in India to experience the personalised website interface. Manage engaging content for individual experience and seamless content updates via multiple channels. The AEM team works to provide flexibility and secure applications"
            link="/hireaemteam"
          />
          <ServiceCard
            num="03"
            image="/images/consulting4.jpg"
            title="Outsource AEM projects"
            desc="AEM outsourcing of projects simplifies your task with AEM experts. When you Outsource AEM projects, you cut the cost for the internal team, provide an Optimal AEM environment, regular bug fixations, DAM, CMS, and uptime of AEM.AEM outsourcing of projects simplifies."
            link="/outsourceaemprojects"
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
