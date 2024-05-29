import React from "react";
import Head from "next/head";
import CardHome from "./common/CardHome";
import SectionHeader from "./common/SectionHeader";
function TabSection() {
  return (
    <div>
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css"
        />
        <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
      </Head> */}

      <div className="max-w-5xl mx-auto">
        <div className="w-fit mx-auto border-b border-gray-200 dark:border-gray-700 mb-4">
          <ul
            className="flex flex-wrap -mb-px"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300  rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                id="overview-tab"
                data-tabs-target="#overview"
                type="button"
                role="tab"
                aria-controls="overview"
                aria-selected="false"
              >
                AEM Consulting and Development
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active"
                id="photo-tab"
                data-tabs-target="#photo"
                type="button"
                role="tab"
                aria-controls="photo"
                aria-selected="true"
              >
                AEM Integration
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                id="graphic-tab"
                data-tabs-target="#graphic"
                type="button"
                role="tab"
                aria-controls="graphic"
                aria-selected="false"
              >
                AEM Managed Services
              </button>
            </li>
            <li role="presentation">
              <button
                className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                id="video-tab"
                data-tabs-target="#video"
                type="button"
                role="tab"
                aria-controls="video"
                aria-selected="false"
              >
                AEM Migration and Upgrade
              </button>
            </li>
            <li role="presentation">
              <button
                className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                id="illustration-tab"
                data-tabs-target="#illustration"
                type="button"
                role="tab"
                aria-controls="illustration"
                aria-selected="false"
              >
                AEM Staff Augmentation
              </button>
            </li>
            {/* <li role="presentation">
              <button
                className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                id="ui-tab"
                data-tabs-target="#ui"
                type="button"
                role="tab"
                aria-controls="ui"
                aria-selected="false"
              >
                UI & UX
              </button>
            </li>
            <li role="presentation">
              <button
                className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                id="social-tab"
                data-tabs-target="#social"
                type="button"
                role="tab"
                aria-controls="social"
                aria-selected="false"
              >
                Social Media
              </button>
            </li> */}
          </ul>
        </div>
        <div id="myTabContent">
          <div
            className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"
            id="overview"
            role="tabpanel"
            aria-labelledby="overview-tab"
          >
            <SectionHeader
              title="AEM Consulting and Development"
              discription="Design a logo for your small business or a photo collage of your big dream. Warm up a cool image in a snap. Edit a social video or a blockbuster film. Whatever you want to create, we have what you need to make it amazing."
            />
            <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
              <div>
                <CardHome
                  title="First working Process"
                  desc="Manage AEM Team using your methodologies and business or a photo collage of your big dream."
                  image={"/images/consulting.jpeg"}
                />
              </div>
              <div>
                <CardHome
                  title="24/7 Live Support"
                  desc="Get real-time updates & full-scale development support on AEM"
                  image={"/images/consulting2.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Dedicated Teams"
                  desc="With AEM Developers, AEM Outsource assigns professionals to your particular project."
                  image={"/images/consulting3.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Outsource AEM Projects"
                  desc="AEM help you to create new and unique digital experiences for your customers."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Photoshop"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Photoshop"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
            </div>
          </div>
          <div
            className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800"
            id="photo"
            role="tabpanel"
            aria-labelledby="photo-tab"
          >
            <SectionHeader
              title="Take your photos from good to gorgeous."
              discription="We embrace proven methodologies, utilize our technical expertise, and deep integration experience to help enterprises integrate their AEM platform with their business systems like CRM, ERP, eCommerce, Marketing Automation, etc., and help optimize their digital operations."
            />

            <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
              <div>
                <CardHome
                  title="AEM Integration"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/consulting2.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Photoshop Lightroom"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/consulting4.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Photoshop Lightroom"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/consulting5.jpeg"}
                />
              </div>
              <div>
                <CardHome
                  title="Photoshop Lightroom"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Photoshop Lightroom"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Photoshop Lightroom"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
            </div>
          </div>
          <div
            className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"
            id="graphic"
            role="tabpanel"
            aria-labelledby="graphic-tab"
          >
            <SectionHeader
              title="Create dazzling designs for print, online or anywhere."
              discription="Design a logo for your small business or a photo collage of your big dream. Warm up a cool image in a snap. Edit a social video or a blockbuster film. Whatever you want to create, we have what you need to make it amazing."
            />

            <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
              <div>
                <CardHome
                  title="Illustrator"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/consulting3.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Illustrator"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/consulting.jpeg"}
                />
              </div>
              <div>
                <CardHome
                  title="Illustrator"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/consulting4.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Illustrator"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Illustrator"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Illustrator"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
            </div>
          </div>
          <div
            className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"
            id="video"
            role="tabpanel"
            aria-labelledby="video-tab"
          >
            <SectionHeader
              title="Make your ideas move with video, animation & special effects."
              discription="Design a logo for your small business or a photo collage of your big dream. Warm up a cool image in a snap. Edit a social video or a blockbuster film. Whatever you want to create, we have what you need to make it amazing."
            />

            <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
              <div>
                <CardHome
                  title="Premiere Pro"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Premiere Pro"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Premiere Pro"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Premiere Pro"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Premiere Pro"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Premiere Pro"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
            </div>
          </div>
          <div
            className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"
            id="illustration"
            role="tabpanel"
            aria-labelledby="illustration-tab"
          >
            <SectionHeader
              title="Cover your canvas with our painting and drawing apps."
              discription="Design a logo for your small business or a photo collage of your big dream. Warm up a cool image in a snap. Edit a social video or a blockbuster film. Whatever you want to create, we have what you need to make it amazing."
            />

            <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
              <div>
                <CardHome
                  title="Adobe Fresco"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Adobe Fresco"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Adobe Fresco"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Adobe Fresco"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Adobe Fresco"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
              <div>
                <CardHome
                  title="Adobe Fresco"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  image={"/images/outsourcing.jpg"}
                />
              </div>
            </div>
          </div>
          <div
            className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"
            id="ui"
            role="tabpanel"
            aria-labelledby="ui-tab"
          >
            <SectionHeader
              title="Bring your digital experiences to life."
              discription="Design a logo for your small business or a photo collage of your big dream. Warm up a cool image in a snap. Edit a social video or a blockbuster film. Whatever you want to create, we have what you need to make it amazing."
            />

            <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
              <div>
                <CardHome
                  title="XD"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  //   image={require("../assets/casestudy-1.png")}
                />
              </div>
              <div>
                <CardHome
                  title="XD"
                  desc="Create gorgeous images, rich graphics and incredible art."
                />
              </div>
              <div>
                <CardHome
                  title="XD"
                  desc="Create gorgeous images, rich graphics and incredible art."
                />
              </div>
              <div>
                <CardHome
                  title="XD"
                  desc="Create gorgeous images, rich graphics and incredible art."
                />
              </div>
              <div>
                <CardHome
                  title="XD"
                  desc="Create gorgeous images, rich graphics and incredible art."
                />
              </div>
              <div>
                <CardHome
                  title="XD"
                  desc="Create gorgeous images, rich graphics and incredible art."
                />
              </div>
            </div>
          </div>
          <div
            className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden"
            id="social"
            role="tabpanel"
            aria-labelledby="social-tab"
          >
            <SectionHeader
              title="Make social graphics that stand out."
              discription="Design a logo for your small business or a photo collage of your big dream. Warm up a cool image in a snap. Edit a social video or a blockbuster film. Whatever you want to create, we have what you need to make it amazing."
            />

            <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
              <div>
                <CardHome
                  title="Premiere Pro"
                  desc="Create gorgeous images, rich graphics and incredible art."
                  //   image={require("../assets/casestudy-1.png")}
                />
              </div>
              <div>
                <CardHome
                  title="Premiere Pro"
                  desc="Create gorgeous images, rich graphics and incredible art."
                />
              </div>
              <div>
                <CardHome
                  title="Premiere Pro"
                  desc="Create gorgeous images, rich graphics and incredible art."
                />
              </div>
              <div>
                <CardHome
                  title="Premiere Pro"
                  desc="Create gorgeous images, rich graphics and incredible art."
                />
              </div>
              <div>
                <CardHome
                  title="Premiere Pro"
                  desc="Create gorgeous images, rich graphics and incredible art."
                />
              </div>
              <div>
                <CardHome
                  title="Premiere Pro"
                  desc="Create gorgeous images, rich graphics and incredible art."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabSection;
