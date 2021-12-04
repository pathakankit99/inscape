import React from "react";
import AOS from "aos";

import Lottie from "react-lottie";
import * as ecommerce from "../../../public/lotties/ecommerce.json";
import * as startups from "../../../public/lotties/startups.json";
import * as resume from "../../../public/lotties/resume.json";
import * as music from "../../../public/lotties/music.json";
import Link from "next/link";
function index() {
   const defaultOptions = {
     loop: true,
     autoplay: true,
     rendererSettings: {
       preserveAspectRatio: "xMidYMid slice",
     },
   };
  return (
    <section
      style={{ maxWidth: "100vw", overflowX: "hidden" }}
      className="services container2 relative min-h-screen py-24"
    >
      {/* <img className="absolute top-0 bottom-0 hero-img" src="/images/bg.jpg" /> */}
      <div className="services__shape">
        <img
          className="services-circle-1"
          src="/images/icon/services/home-1/circle-1.png"
          alt=""
        />
        <img
          className="services-circle-2"
          src="/images/icon/services/home-1/circle-2.png"
          alt=""
        />
        <img
          className="services-dot"
          src="/images/icon/services/home-1/dot.png"
          alt=""
        />
        <img
          className="services-triangle"
          src="/images/icon/services/home-1/triangle.png"
          alt=""
        />
      </div>
      <div
        className="section__title-wrapper text-center mb-8"
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-delay=".3s"
        style={{ visibility: "visible", animationDelay: "0.3s" }}
      >
        <h2 className="section__title">
          Get Answers, Insights Result in Simple Steps.
        </h2>
      </div>
      <div className="cards-container flex justify-evenly items-center flex-wrap">
        <div
          className="card"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay=".3s"
          style={{ visibility: "visible", animationDelay: "0.3s" }}
        >
          <div className="pb-12 flex justify-center w-full">
            <Lottie
              height={150}
              width={150}
              options={{
                animationData: ecommerce,
                ...defaultOptions,
              }}
            />
          </div>
          <div className="card-content">
            <h4 className="card-heading">Ecommerce Websites</h4>
            <p className="card-para">
              If you are a new business or an existing one and want to take your
              business online and don't know where to start, don't worry, we got
              your back at Inscape. We help your business to create an ecommerce
              website with an interactive design and features which are easy to
              use for both you and your customers.
            </p>
            <div className="absolute bottom-0 flex justify-center left-0 right-0">
              <Link href="/#contact-us">
                <button className="w-btn w-btn-2 w-8/12 my-6">Get Quote</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay=".3s"
          style={{ visibility: "visible", animationDelay: "0.3s" }}
        >
          <div className="pb-12 flex justify-center w-full">
            <Lottie
              height={150}
              width={150}
              options={{
                animationData: startups,
                ...defaultOptions,
              }}
            />
          </div>
          <div className="card-content">
            <h4 className="card-heading">Startups</h4>
            <p className="card-para">
              A startup is all about fresh and innovative ideas and when those
              ideas are not presented in the right way on the websites it can
              break your brand image. Here at Inscape, we help buzzing startups
              like yours to create a fully optimised site with great set of
              features at a pocket friendly price.
            </p>
            <div className="absolute bottom-0 flex justify-center left-0 right-0">
              <Link href="/#contact-us">
                <button className="w-btn w-btn-2 w-8/12 my-6">Get Quote</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay=".3s"
          style={{ visibility: "visible", animationDelay: "0.3s" }}
        >
          <div className="pb-12 flex justify-center w-full">
            <Lottie
              height={150}
              width={150}
              options={{
                animationData: resume,
                ...defaultOptions,
              }}
            />
          </div>
          <div className="card-content">
            <h4 className="card-heading">Resume</h4>
            <p className="card-para">
              In the age of digital where everybody hold equal opportunities,
              present yopur employers with something which help you get a head
              start from your competitors and land you at your dream job. So let
              us help you create a resume which is unique and kick start your
              career at a super pocket friendly price.
            </p>
            <div className="absolute bottom-0 flex justify-center left-0 right-0">
              <Link href="/#contact-us">
                <button className="w-btn w-btn-2 w-8/12 my-6">Get Quote</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay=".3s"
          style={{ visibility: "visible", animationDelay: "0.3s" }}
        >
          <div className="pb-12 flex justify-center w-full">
            <Lottie
              height={150}
              width={150}
              options={{
                animationData: music,
                ...defaultOptions,
              }}
            />
          </div>
          <div className="card-content">
            <h4 className="card-heading">Portfolio</h4>
            <p className="card-para">
              Looking to showcase your skills online and don't know where to
              start? Here at Inscape we help you to create your portfolio with a
              customised landing page which can help you present your portfolio
              to the world on the web. This will take you to the next level,
              opening an ocean of opportunities for you.
            </p>
            <div className="absolute bottom-0 flex justify-center left-0 right-0">
              <Link href="/#contact-us">
                <button className="w-btn w-btn-2 w-8/12 my-6">Get Quote</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
