import {useState} from 'react';
import CardHomeTwo from './common/CardHomeTwo';

const TabSectionThree = () => {
  const [select, setSelect] = useState("PAYMENTS");
  return (
    <>
      <div     
        className="w-full min-h-full object-cover bg-no-repeat "
      >
      </div>
      <div className="container-gem mx-auto space-y-8 pb-10">
        <div className="grid md:grid-cols-3 grid-cols-3 bg-red-400 lg:px-24">
          <div
            onClick={() => setSelect("PAYMENTS")}
            className={`p-4 text-center cursor-pointer font-semibold md:text-sm text-xs ${
              select == "PAYMENTS"
                ? "bg-white text-gray-700"
                : "hover:bg-red-500 text-white"
            }`}
          >
            <h1>Digital asset Management</h1>
          </div>

          <div
            onClick={() => setSelect("ORDERING")}
            className={`p-4 text-center cursor-pointer font-semibold md:text-sm text-xs ${
              select == "ORDERING"
                ? "bg-white  text-gray-700"
                : "hover:bg-red-500 grayack text-white"
            }`}
          >
            <h1>Content Management System</h1>
          </div>

          <div
            onClick={() => setSelect("Cloud Services")}
            className={`p-4 text-center cursor-pointer font-semibold md:text-sm text-xs ${
              select == "Cloud Services"
                ? "bg-white text-gray-700"
                : "hover:bg-red-500 text-white"
            }`}
          >
            <h1>Cloud Services</h1>
          </div>

         
        </div>

        <div className="md:ml-10">
          <div>
            {select == "PAYMENTS" ? (
              <div>
                  <CardHomeTwo
                  title="Digital asset Management"
                  desc="AEM provides a dynamic strategy to maintain your digital assets. It sustains social engagement and connection portals with flexibility. DAM is done at a majestic level to provide each user with a personalised experience."
                  image={
                    "https://images.pexels.com/photos/8101929/pexels-photo-8101929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                />
              </div>
            ) : select == "ORDERING" ? (
                <div>
                <CardHomeTwo
                  title="Content Management System"
                  desc="AEM provides a smooth interface for authors and predefined templates through which an author generates creative and engaging content. A hybrid content management system provides an immediate update for the content through multiple channels."
                  image={"/images/consulting3.jpg"}
                />
              </div>
            ) :  (
                <div>
                <CardHomeTwo
                  title="Cloud Services"
                  desc="AEM added Cloud service in 2019 with Microsoft Azure and is providing low-cost ownership to the cloud. AEM cloud is scalable and secure with any time and anywhere availability to use with an upgraded version of itself."
                  image={"/images/consulting4.jpg"}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      
    </>
  );
};

export default TabSectionThree;