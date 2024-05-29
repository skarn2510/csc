import React from "react";
import Head from "next/head";
import CardHomeTwo from "./common/CardHomeTwo";
function TabSectionTwo() {
  return (
    <div>
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css"
        />
        <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
      </Head> */}

      <div className="mx-auto">
        <div className=" mx-auto">
          <ul
            className="flex flex-wrap justify-center bg-red-400 pt-12"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li role="presentation">
              <button
                className="inline-block text-black tracking-tight 
                leading-relaxed font-sans hover:bg-gray-100 py-4 px-4 text-center font-semibold border-transparent dark:text-gray-400 dark:hover:text-gray-300"
                id="overview-tab"
                data-tabs-target="#overview"
                type="button"
                role="tab"
                aria-controls="overview"
                aria-selected="false"
              >
                Digital asset Management
              </button>
            </li>
            <li role="presentation">
              <button
                className="inline-block text-black tracking-tight 
leading-relaxed font-sans hover:bg-gray-100 py-4 px-4 text-center font-semibold border-transparent dark:text-gray-400 dark:hover:text-gray-300"
                id="photo-tab"
                data-tabs-target="#photo"
                type="button"
                role="tab"
                aria-controls="photo"
                aria-selected="true"
              >
                Content Management System
              </button>
            </li>
            <li role="presentation">
              <button
                className="inline-block text-black tracking-tight 
leading-relaxed font-sans hover:bg-gray-100 py-4 px-4 text-center font-semibold border-transparent dark:text-gray-400 dark:hover:text-gray-300"
                id="graphic-tab"
                data-tabs-target="#graphic"
                type="button"
                role="tab"
                aria-controls="graphic"
                aria-selected="false"
              >
                Cloud Services
              </button>
            </li>
          </ul>
        </div>
        <div className=" py-12 bg-gray-200">
          <div id="myTabContent" className="max-w-6xl mx-auto">
            <div
              className="bg-gray-200 p-4 rounded-lg dark:bg-gray-800 hidden"
              id="overview"
              role="tabpanel"
              aria-labelledby="overview-tab"
            >
              <div>
                <CardHomeTwo
                  title="Digital asset Management"
                  desc="AEM provides a dynamic strategy to maintain your digital assets. It sustains social engagement and connection portals with flexibility. DAM is done at a majestic level to provide each user with a personalised experience."
                  image={
                    "https://images.pexels.com/photos/8101929/pexels-photo-8101929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                />
              </div>
            </div>
            <div
              className="bg-gray-200 p-4 rounded-lg dark:bg-gray-800"
              id="photo"
              role="tabpanel"
              aria-labelledby="photo-tab"
            >
              <div>
                <CardHomeTwo
                  title="Content Management System"
                  desc="AEM provides a smooth interface for authors and predefined templates through which an author generates creative and engaging content. A hybrid content management system provides an immediate update for the content through multiple channels."
                  image={"/images/consulting3.jpg"}
                />
              </div>
            </div>
            <div
              className="bg-gray-200 p-4 rounded-lg dark:bg-gray-800 hidden"
              id="graphic"
              role="tabpanel"
              aria-labelledby="graphic-tab"
            >
              <div>
                <CardHomeTwo
                  title="Cloud Services"
                  desc="AEM added Cloud service in 2019 with Microsoft Azure and is providing low-cost ownership to the cloud. AEM cloud is scalable and secure with any time and anywhere availability to use with an upgraded version of itself."
                  image={"/images/consulting4.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabSectionTwo;
