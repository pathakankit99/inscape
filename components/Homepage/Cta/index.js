import React from 'react'

function index() {
    return (
      <section
        style={{ maxWidth: "100vw", overflowX: "hidden" }}
        className="cta__area  relative"
      >
        <div className="circle-animation cta-1">
          <span></span>
        </div>
        <div className="circle-animation cta-1 cta-2">
          <span></span>
        </div>
        <div className="circle-animation cta-3">
          <span></span>
        </div>
        <div className="container2">
          <div
            className="cta__inner relative overflow-none"
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay=".5s"
            style={{
              visibility: "visible",
              zIndex: 1,
              animationDelay: "0.5s",
              overflow: "hidden",
            }}
          >
            <div className="cta__shape ">
              <img
                className="circle"
                src="/images/icon/cta/home-1/cta-circle.png"
                alt=""
              />
              <img
                className="circle-2"
                src="/images/icon/cta/home-1/cta-circle-2.png"
                alt=""
              />
              <img
                className="circle-3"
                src="/images/icon/cta/home-1/cta-circle-3.png"
                alt=""
              />
              <img
                className="triangle-1"
                src="/images/icon/cta/home-1/cta-triangle.png"
                alt=""
              />
              <img
                className="triangle-2"
                src="/images/icon/cta/home-1/cta-triangle-2.png"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="w-full">
                <div className="cta__wrapper flex justify-between items-center flex-wrap">
                  <div className="cta__content text-2xl md:text-3xl lg:text-5xl mb-16 md:mb-0">
                    <h3 className="cta__title text-md md:text-3xl lg:text-5xl">
                      Go Digital. Grow Online. <br /> With Our Support.
                    </h3>
                  </div>
                  <div className="cta__btn">
                    <button
                      className="w-btn w-btn-white text-xs md:text-md lg:text-xl"
                      href="/estimate"
                    >
                      Get Free Estimate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default index
