import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
import logo from "../../public/images/logo/csc-logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Announcement from "../Announcement";

function NavLink({ to, children }) {
  const router = useRouter();
  return (
    <a
      className={
        router.pathname == to
          ? "text-orange font-semibold"
          : "text-primaryText hover:text-orange"
      }
      href={to}
    >
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute z-50 top-0 left-0 min-h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <Link passHref href={"/"}>
        <div
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
          className="flex items-center hover:cursor-pointer  justify-start  p-4 filter drop-shadow-md bg-white h-20"
        >
        <Image
        src="https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg"
        alt="Workflow"
        height={500}
        width={500}
      />  
        </div>
      </Link>
      <div className="flex flex-col p-5">
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full text-gray justify-between py-2 text-left text-xl font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>Our Services</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-blue-100 text-gray-500">
                <ul className="list list-disc list-inside space-y-3 text-lg text-black">
                  <li className="border border-b-gray-300">
                    <Link passHref href="hireaemteam">
                      <a
                        className="text-xl font-normal my-4"
                        onClick={() =>
                          setTimeout(() => {
                            setOpen(!open);
                          }, 100)
                        }
                      >
                        AEM consulting
                      </a>
                    </Link>
                  </li>
                  <li className="border border-b-gray-300">
                    <Link passHref href="hireaemteam">
                      <a
                        className="text-xl font-normal my-4"
                        onClick={() =>
                          setTimeout(() => {
                            setOpen(!open);
                          }, 100)
                        }
                      >
                        Hire AEM team
                      </a>
                    </Link>
                  </li>
                  <li className="border border-b-gray-300">
                    <Link passHref href="/services/resource-augmentation">
                      <a
                        className="text-xl font-normal my-4"
                        onClick={() =>
                          setTimeout(() => {
                            setOpen(!open);
                          }, 100)
                        }
                      >
                        Outsource AEM projects
                      </a>
                    </Link>
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Link passHref href="/clients">
          <a
            className="text-xl font-medium my-4"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            Clients
          </a>
        </Link>
        <Link passHref href="/become-partner">
          <a
            className="text-xl font-medium my-4"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            About Us
          </a>
        </Link>
        <Link passHref href="/about-us">
          <a
            className="text-xl font-medium my-4"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            Company-About
          </a>
        </Link>
        <Link passHref href="/contact-us">
          <a
            className="text-xl font-medium my-4"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            Contact Us
          </a>
        </Link>
        <Link passHref href="/request-demo">
          <a
            className="text-primaryText text-xl max-w-sm my-4 py-2 px-4 border border-primaryText"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            Request Demo
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function NavbarTwo() {
  const [open, setOpen] = useState(false);

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
   <div>
    <Announcement />

  
    <nav className="flex lg:flex   top-0 left-0 right-0 filter drop-shadow-md bg-white z-50  lg:px-0  md:px-4 px-2 py-0 h-20 items-center justify-between">
      <div className="">
        <MobileNav open={open} setOpen={setOpen} />
      </div>
      <div className="w-28 h-auto">
        <Image
          src={logo}
          alt="logo
      <div></div>"
        />
      </div>

      <div className="w-9/12 flex lg:justify-between justify-end items-center">
        <div
          className="z-50 flex relative w-6 h-6 flex-col justify-between items-center lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full  rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-[11px] bg-orange" : "bg-secondary"
            }`}
          />
          <span
            className={`h-1 w-full bg-secondary rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full  rounded-lg transform transition duration-300 ease-in-out ${
              open
                ? "-rotate-45 -translate-y-[11px]  bg-orange"
                : "bg-secondary"
            }`}
          />
        </div>

        <div className="hidden lg:flex space-x-8 m-10">
          <NavLink to="/">Home</NavLink>
          <div className="relative cursor-pointer group duration-1000 transition">
            <NavLink to="/about-us">About Us</NavLink>
            {/* <div className="hidden p-5 top-5 bg-white -left-5 hover:flex group-hover:flex transition absolute opacity-0 duration-1000 group-hover:opacity-100 peer-hover:opacity-100  md:min-w-[250px] lg:min-w-[250px]">
              <div className=" grid gap-3">
                <NavLink to="/about-us">Who We Are</NavLink>
              </div>
          </div> ***/}
          </div>
          <div className="relative cursor-pointer group duration-1000 transition">
            <NavLink to="/team">PARTNER</NavLink>
         
          </div>

          <div className="relative cursor-pointer group duration-1000 transition">
            <NavLink>PRODUCT</NavLink>
            <div className="hidden p-5 top-5 bg-white -left-5 hover:flex group-hover:flex transition absolute opacity-0 duration-1000 group-hover:opacity-100 peer-hover:opacity-100  md:min-w-[250px] lg:min-w-[250px]">
              <div className=" grid gap-3">
                <NavLink to="/casestudy">PRODUCT</NavLink>
              </div>
            </div>
          </div>

          
          {/** <NavLink to="/gallerypage">GALLERY</NavLink> */}
          <NavLink to="/team">GALLERY</NavLink>
        
      
          
          <NavLink to="/contact-us">CONTACT US</NavLink>
          
          
       
        </div>
        {/* hamburger start ***/}

        <nav>
          <section className="MOBILE-MENU flex px-10 ">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              {" "}
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] large:hidden">
                <li className=" ">
                  <Link href="/Emicalculator">EMI CALCULATOR</Link>
                </li>

                <li className=" ">
                <Link href="/Incentivestructure">INCENTIVE STRUCTURE</Link>
              </li>

                
                <li className=" ">
                  <Link href="/Createbanner">CREATE BANNERS</Link>
                </li>
                <li className=" ">
                  <Link href="/Vletestimonials">VLE TETIMONIALS</Link>
                </li>
                <li className=" ">
                  <Link href="/Reference">REFERENCE</Link>
                </li>

                <li className="">
                  <Link href="/Locateus">LOCATE US</Link>
                </li>
                <li className="">
                  <Link href="/Ribbon">RIBBON</Link>
                </li>
                <li className="">
                  <Link href="/Queryform">QUERY FORM</Link>
                </li>
                <li className="">
                  <Link href="/Becomepartner">BECOME A PARTNER</Link>
                </li>
                <li className="">
                  <Link href="/Feedback">GIVE FEEDBACK</Link>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8  lg:hidden">
            <li>
              <Link href="/Emicalculator">EMI CALCULATOR</Link>
            </li>

            <li className=" ">
            <Link href="/Incentivestructure">INCENTIVE STRUCTURE</Link>
          </li>
          
            <li>
              <Link href="/Createbanner">CREATE BANNERS</Link>
            </li>
            <li>
              <Link href="/Vletestimonials">VLE TETIMONIALS</Link>
            </li>
            <li>
              <Link href="/Reference">REFERENCE</Link>
            </li>
            <li>
              <Link href="/Locateus">LOCATE US</Link>
            </li>

            <li>
              <Link href="/Ribbon">RIBBON</Link>
            </li>
            <li>
              <Link href="/Queryform">QUERY FORM</Link>
            </li>
            <li>
              <Link href="/Becomepartner">BECOME A PARTNER</Link>
            </li>
            <li>
              <Link href="/Feedback">GIVE FEEDBACK</Link>
            </li>
          </ul>
        </nav>
        <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 30%;
            height: calc(100vh - .5px);
            top: 0;
            right: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            overflow-y:auto;
          }
          .showMenuNav ul li{
            margin:8px 0px!important;
            text-align:left;
          }
          .showMenuNav ul li a{
            text-decoration:none;
          }
        `}</style>

        {/* hamburger end***/}
      </div>
    </nav>

    </div>
 
  );
}
