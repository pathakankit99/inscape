import React from 'react'
import AOS from 'aos';
function index() {
    return (
      <section className="relative min-h-screen lg:h-120vh">
        <img
          className="absolute top-0 bottom-0 hero-img"
          src="/images/bg.jpg"
        />
        <div className="hero__shape">
          <img
            className="hero-circle-1"
            src="/images/icon/hero/home-1/circle-1.png"
            alt=""
          />
          <img
            className="hero-circle-2"
            src="/images/icon/hero/home-1/circle-2.png"
            alt=""
          />
          <img
            className="hero-triangle-1"
            src="/images/icon/hero/home-1/triangle-1.png"
            alt=""
          />
          <img
            className="hero-triangle-2"
            src="/images/icon/hero/home-1/triangle-2.png"
            alt=""
          />
        </div>
        <div className="hero z-50 flex justify-center items-center flex-wrap relative pt-24 p-6 lg:p-0">
          <div className="lg:px-12 w-full lg:w-6/12">
            <div className="hero__content">
              <h2
                className="hero__title"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay=".3s"
                style={{ visibility: "visible", animationDelay: "0.3s" }}
              >
                Converting Vision Into Reality
              </h2>
              <p
                className="wow "
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay=".5s"
                style={{ visibility: "visible", animationDelay: "0.5s" }}
              >
                Inscape technologies provides a pleothra of services that help
                you take your business online.
              </p>
              <div
                className="hero__search wow "
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay=".7s"
                style={{ visibility: "visible", animationDelay: "0.7s" }}
              >
                <button type="submit" className="w-btn w-btn-2">
                  Get Free Estimates
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 lg:min-h-screen flex justify-center items-end p-6 py-24 lg:p-0">
            <div className="hero__thumb text-end">
              <div className="hero__thumb-wrapper relative ">
                <img
                  className="hero-circle"
                  src="/images/hero/home-1/hero-circle.png"
                  alt=""
                />
                <div className="hero__thumb-shape shape-1">
                  <img src="/images/hero/home-1/hero-1.png" alt="" />
                </div>
                <div className="hero__thumb-shape shape-2">
                  <img src="/images/hero/home-1/hero-2.png" alt="" />
                </div>
                <div className="hero__thumb-shape shape-3">
                  <img src="/images/hero/home-1/hero-3.png" alt="" />
                </div>
                <div className="hero__thumb-shape shape-4">
                  <img src="/images/hero/home-1/hero-4.png" alt="" />
                </div>
                <div className="hero__thumb-shape shape-5">
                  <img src="/images/hero/home-1/hero-5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default index
