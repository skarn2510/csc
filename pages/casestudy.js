import React from "react";
import Banner from "../components/common/Banner";
import Footer from "../components/common/Footer";
import NavbarTwo from "../components/common/NavbarTwo";
import SectionHeader from "../components/common/SectionHeader";
import Image from 'next/image';

function CaseStudy() {
  return (
    <>
      <NavbarTwo />
      <Banner
        title="Case Study"
        image="https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?size=626&ext=jpg&uid=R14357029&ga=GA1.2.139273041.1654232675&uid=R14357029&ga=GA1.2.139273041.1654232675"
      />
      <SectionHeader title="Case Study" />
      <div className="container m-auto px-6 md:px-12">
        <section className="py-12">
          <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
            <div className="row-span-2 flex flex-col rounded-md border border-red-500 bg-red-600">
              <div className="h-1/2 flex-1 relative">
                <Image
                  src="https://img.freepik.com/free-vector/data-inform-illustration-concept_114360-864.jpg?w=740&t=st=1654256357~exp=1654256957~hmac=037a7214f835ff4e6788f364f789dc51566a714a7a0678e4d9f888cb8f3891c8"
                  className="object-cover object-right-top rounded-lg"
                  alt="omnichannel"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-10 space-y-4">
                <h3 className="text-xl font-medium text-white underline underline-offset-8">
                  Omnichannel support center
                </h3>
                <p className="mt-2 text-md text-white">
                  Chatwoot connects with popular customer communication channels
                  like Email, Website live-chat, Facebook, Twitter, WhatsApp,
                  Instagram, Line, etc., and helps you deliver a consistent
                  customer experience across channels.
                </p>
              </div>
            </div>
            <div className="flex rounded-md">
              <div className="flex-1 p-10">
                <h3 className="text-xl font-medium text-gray-700">
                  Overview
                </h3>
                <div className="">
                  <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
                  <span className="inline-block w-3 h-1 ml-1 rounded-full bg-red-500"></span>
                  <span className="inline-block w-1 h-1 ml-1 rounded-full bg-red-500"></span>
                </div>
                <p className="mt-2 text-slate-500">
                  Connect with your website visitors, communicate with them in
                  realtime and give them quality support with a live-chat widget
                  that fits your brand.
                </p>
              </div>
              <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                <div className="absolute h-full w-full">
                  <Image
                    src="https://img.freepik.com/free-vector/lying-arrow-concept-illustration_114360-8531.jpg?size=338&ext=jpg&uid=R14357029&ga=GA1.2.139273041.1654232675"
                    className="object-cover object-left-top"
                    alt="Lying Arrow Concept"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex rounded-md">
              <div className="flex-1 p-10">
                <h3 className="text-xl font-medium text-gray-700">
                  Challenges
                </h3>
                <div className="">
                  <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
                  <span className="inline-block w-3 h-1 ml-1 rounded-full bg-red-500"></span>
                  <span className="inline-block w-1 h-1 ml-1 rounded-full bg-red-500"></span>
                </div>
                <p className="mt-2 text-slate-500">
                  Integrate with chatbots using Rasa or Dialogflow to automate
                  conversations. Qualify using chatbots and seamlessly handoff
                  to human agents.
                </p>
              </div>
              <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                <div className="absolute h-full w-full">
                  <Image
                    src="https://img.freepik.com/free-vector/growth-analytics-concept-illustration_114360-2220.jpg?size=338&ext=jpg&uid=R14357029&ga=GA1.2.139273041.1654232675"
                    className="object-cover object-left-top"
                    alt="Growth Analytics Concept"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="flex flex-col px-8 mx-auto space-y-12 max-w-8xl xl:px-12 py-12">
            <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
              <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                <Image
                  className="rounded-lg shadow-xl"
                  src="https://cdn.devdojo.com/imgs/december2020/dashboard-011.png"
                  alt="Dashboard 011"
                  width={500}
                  height={300}
                />
              </div>
              <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                <p className="mb-2 text-sm font-semibold leading-none text-left text-red-600 uppercase">
                  Case Study Section
                </p>
                <h3 className="mt-2 text-2xl sm:text-left md:text-3xl">
                  Success
                </h3>
                <p className="text-sm text-gray-600 text-justify tracking-wide pt-6">
                  A multinational consumer goods company wanted to hit the
                  market running with a new vitamin subscription brand. Ameex
                  Digital assessed their needs and quickly delivered SEM, SEO,
                  analytics, UI/UX and web development strategies to drive
                  qualified leads, ROI, repeat purchases and more.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
              <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                <Image
                  className="rounded-lg shadow-xl"
                  src="https://cdn.devdojo.com/imgs/december2020/dashboard-04.png"
                  alt="Dashboard 04"
                  width={500}
                  height={300}
                />
              </div>
              <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
                <p className="mb-2 text-sm font-semibold leading-none text-left text-red-600 uppercase">
                  Case Study Section
                </p>
                <h3 className="mt-2 text-2xl sm:text-left md:text-3xl">
                  How we cultivated high yields for a leading agricultural
                  equipment dealer
                </h3>
                <p className="text-sm text-gray-600 text-justify tracking-wide pt-6">
                  A 100-year-old Midwestern dealer adopted ecommerce early, but
                  needed help rising above the competition online. Discover how
                  Ameex Digital’s SEO experts optimized their site to reap
                  higher traffic and conversions.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
              <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                <Image
                  className="rounded-lg shadow-xl"
                  src="https://cdn.devdojo.com/imgs/december2020/dashboard-03.png"
                  alt="Dashboard 03"
                  width={500}
                  height={300}
                />
              </div>
              <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                <p className="mb-2 text-sm font-semibold leading-none text-left text-red-600 uppercase">
                  Case Study Section
                </p>
                <h3 className="mt-2 text-2xl sm:text-left md:text-3xl">
                  See the Results for Yourself
                </h3>
                <p className="text-sm text-gray-600 text-justify tracking-wide pt-6">
                  As an SEO partner you have stepped up to not only help us
                  provide a solve for it but also provide an extra hand by
                  contributing to the learning journey of every individual who
                  has been on this journey whether it was in-market or region.
                  And that is a quality rare in a partner. Thank you for always
                  partnering in our success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default CaseStudy;
