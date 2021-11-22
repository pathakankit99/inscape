import React from "react";
import { Parallax } from "react-scroll-parallax";

import Lottie from "react-lottie";
import * as ecommerce from "../../../public/lotties/ecommerce.json";
import * as startups from "../../../public/lotties/startups.json";
import * as resume from "../../../public/lotties/resume.json";
import * as music from "../../../public/lotties/music.json";
function index() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="p-6 relative container2 bg-white">
      <h1 className="hardText text-bismark-700 text-7xl">Our Services</h1>
      <Parallax className="relative" y={[0, 7]} tagOuter="figure">
        <div className="my-24 sectionCard lg:h-60vh shadow-xl bg-bismark-600 flex justify-center items-center flex-wrap">
          <div className="w-full min-h-full lg:w-6/12 p-6 ">
            <h3 className="hardText text-5xl text-yellow-400 ">Ecommerce Website</h3>
            <div className=" pt-2 pb-6">
              <span className="px-4 py-1 bg-green-200 inline-block mb-1 text-green-800 rounded-xl text-sm mr-2">
                Business Owners
              </span>
              <span className="px-4 py-1 bg-green-200 inline-block mb-1 text-green-800 rounded-xl text-sm mr-2">
                Shops
              </span>
              <span className="px-4 py-1 bg-green-200 inline-block mb-1 text-green-800 rounded-xl text-sm mr-2">
                Clothe Stores
              </span>
              <span className="px-4 py-1 bg-green-200 inline-block mb-1 text-green-800 rounded-xl text-sm mr-2">
                Digital/Physical goods
              </span>
            </div>
            <p className="text-bismark-200">
              If you are a new business or an existing one and want to take your
              business online and don't know where to start, don't worry, we got
              your back at Inscape. We help your business to create an ecommerce
              website with an interactive design and features which are easy to
              use for both you and your customers.
              <br />
              <br />
              We help you setup your store online and grow your business while
              you sit back and relax.
            </p>
            <div className="flex my-8 ">
              <div
                onMouseEnter={() => {
                  document.querySelector(".sectionCardButton").className =
                    "sectionCardButton bg-yellow-400 px-4 py-1 rounded-xl shadow-xl border-4 cursor-pointer border-black flex justify-center items-center demo-1";
                }}
                onMouseLeave={() => {
                  document.querySelector(".sectionCardButton").className =
                    "sectionCardButton bg-yellow-400 px-4 py-1 rounded-xl shadow-xl border-4 cursor-pointer border-black flex justify-center items-center";
                }}
                style={{ width: "200px", height: "50px" }}
                className="sectionCardButton bg-yellow-400 px-4 py-1 rounded-xl shadow-xl border-4 cursor-pointer border-black flex justify-center items-center"
              >
                <span className="hardText">Starting from Rs 10,000</span>
              </div>
            </div>
          </div>
          <div className="w-full min-h-full border-bismark-700 lg:w-6/12 border-l-4 flex justify-center items-center">
            <Lottie
              options={{
                animationData: ecommerce,
                ...defaultOptions,
              }}
            />
          </div>
        </div>
        <div className="my-24 sectionCard lg:h-60vh shadow-xl bg-bismark-600 flex justify-center items-center flex-wrap">
          <div className="order-2 w-full min-h-full lg:w-6/12 p-6 ">
            <h3 className="hardText text-5xl text-yellow-400 ">Websites for Startups</h3>
            <div className=" pt-2 pb-6">
              <span className="px-4 py-1 bg-green-200 inline-block mb-1 text-green-800 rounded-xl text-sm mr-2">
                Student Startups
              </span>
              <span className="px-4 py-1 bg-green-200 inline-block mb-1 text-green-800 rounded-xl text-sm mr-2">
                Bootstrapped Startups
              </span>
            </div>
            <p className="text-bismark-200">
              A startup is all about fresh and innovative ideas and when those
              ideas are not presented in the right way on the websites it can
              break your brand image. Here at Inscape, we help buzzing startups
              like yours to create a fully optimised site with great set of
              features at a pocket friendly price.
            </p>
            <div className="flex my-8 ">
              <div
                onMouseEnter={() => {
                  document.querySelector(".sectionCardButton2").className =
                    "sectionCardButton2 bg-yellow-400 px-4 py-1 rounded-xl shadow-xl border-4 cursor-pointer border-black flex justify-center items-center demo-1";
                }}
                onMouseLeave={() => {
                  document.querySelector(".sectionCardButton2").className =
                    "sectionCardButton2 bg-yellow-400 px-4 py-1 rounded-xl shadow-xl border-4 cursor-pointer border-black flex justify-center items-center";
                }}
                style={{ width: "200px", height: "50px" }}
                className="sectionCardButton2 bg-yellow-400 px-4 py-1 rounded-xl shadow-xl border-4 cursor-pointer border-black flex justify-center items-center"
              >
                <span className="hardText">Starting from Rs 5,000</span>
              </div>
            </div>
          </div>
          <div className="order-1 w-full min-h-full border-bismark-700 lg:w-6/12 border-r-4 flex justify-center items-center">
            <div className="w-8/12">
              <Lottie
                options={{
                  animationData: startups,
                  ...defaultOptions,
                }}
              />
            </div>
          </div>
        </div>
        <div className="my-24 sectionCard lg:h-60vh shadow-xl bg-bismark-600 flex justify-center items-center flex-wrap">
          <div className="w-full min-h-full lg:w-6/12 p-6 ">
            <h3 className="hardText text-5xl text-yellow-400 ">Resume Websites</h3>
            <div className=" pt-2 pb-6">
              <span className="px-4 py-1 bg-green-200 inline-block mb-1 text-green-800 rounded-xl text-sm mr-2">
                Freshers
              </span>
              <span className="px-4 py-1 bg-green-200 inline-block mb-1 text-green-800 rounded-xl text-sm mr-2">
                Students
              </span>
              <span className="px-4 py-1 bg-green-200 inline-block mb-1 text-green-800 rounded-xl text-sm mr-2">
                Professionals
              </span>
            </div>
            <p className="text-bismark-200">
              In the age of digital where everybody hold equal opportunities,
              present yopur employers with something which help you get a head
              start from your competitors and land you at your dream job.
              <br /> So let us help you create a resume which is unique and kick
              start your career at a super pocket friendly price.
            </p>
            <div className="flex my-8 ">
              <div
                onMouseEnter={() => {
                  document.querySelector(".sectionCardButton3").className =
                    "sectionCardButton3 bg-yellow-400 px-4 py-1 rounded-xl shadow-xl border-4 cursor-pointer border-black flex justify-center items-center demo-1";
                }}
                onMouseLeave={() => {
                  document.querySelector(".sectionCardButton3").className =
                    "sectionCardButton3 bg-yellow-400 px-4 py-1 rounded-xl shadow-xl border-4 cursor-pointer border-black flex justify-center items-center";
                }}
                style={{ width: "200px", height: "50px" }}
                className="sectionCardButton3 bg-yellow-400 px-4 py-1 rounded-xl shadow-xl border-4 cursor-pointer border-black flex justify-center items-center"
              >
                <span className="hardText">Starting from Rs 3,000</span>
              </div>
            </div>
          </div>
          <div className="w-full min-h-full border-bismark-700 lg:w-6/12 border-l-4 p-6 flex justify-center items-center">
            <div className="w-8/12">
              <Lottie
                options={{
                  animationData: resume,
                  ...defaultOptions,
                }}
              />
            </div>
          </div>
        </div>
        <div className="my-24 sectionCard lg:h-60vh shadow-xl bg-bismark-600 flex justify-center items-center flex-wrap">
          <div className="order-2 w-full min-h-full lg:w-6/12 p-6 ">
            <h3 className="hardText text-5xl text-yellow-400 ">Portfolio Websites</h3>
            <div className=" pt-2 pb-6">
              <span className="px-4 py-1 bg-green-200 inline-block mb-1 text-green-800 rounded-xl text-sm mr-2">
                Artists
              </span>
              <span className="px-4 py-1 bg-green-200 inline-block mb-1 text-green-800 rounded-xl text-sm mr-2">
                Musicians
              </span>
              <span className="px-4 py-1 bg-green-200 inline-block mb-1 text-green-800 rounded-xl text-sm mr-2">
                Photographers
              </span>
              <span className="px-4 py-1 bg-green-200 inline-block mb-1 text-green-800 rounded-xl text-sm mr-2">
                Creators
              </span>
            </div>
            <p className="text-bismark-200">
              Looking to showcase your skills online and don't know where to
              start? Here at Inscape we help you to create your portfolio with a
              customised landing page which can help you present your portfolio
              to the world on the web. This will take you to the next level,
              opening an ocean of opportunities for you.
            </p>
            <div className="flex my-8 ">
              <div
                onMouseEnter={() => {
                  document.querySelector(".sectionCardButton4").className =
                    "sectionCardButton4 bg-yellow-400 px-4 py-1 rounded-xl shadow-xl border-4 cursor-pointer border-black flex justify-center items-center demo-1";
                }}
                onMouseLeave={() => {
                  document.querySelector(".sectionCardButton4").className =
                    "sectionCardButton4 bg-yellow-400 px-4 py-1 rounded-xl shadow-xl border-4 cursor-pointer border-black flex justify-center items-center";
                }}
                style={{ width: "200px", height: "50px" }}
                className="sectionCardButton4 bg-yellow-400 px-4 py-1 rounded-xl shadow-xl border-4 cursor-pointer border-black flex justify-center items-center"
              >
                <span className="hardText">Starting from Rs 3,000</span>
              </div>
            </div>
          </div>
          <div className="order-1 w-full min-h-full border-bismark-700 lg:w-6/12 border-r-4 p-6 flex justify-center items-center">
            <div className="w-8/12">
              <Lottie
                options={{
                  animationData: music,
                  ...defaultOptions,
                }}
              />
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
}

export default index;
