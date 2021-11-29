import React,{useEffect, useState} from "react";
import { BsLightning } from "react-icons/bs";
import { FaMobileAlt } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
function index() {
    const [feature1, setFeature1] = useState(true);
    const [feature2, setFeature2] = useState(false);
    const [feature3, setFeature3] = useState(false);
  return (
    <section
      style={{ maxWidth: "100vw", overflowX: "hidden" }}
      className="features min-h-screen features__area pt-24 relative container2"
    >
      <div className="features__shape-2">
        <img
          className="features-2-dot"
          src="/images/icon/features/home-1/features-dot.png"
          alt=""
        />
        <img
          className="features-2-dot-2"
          src="/images/icon/features/home-1/features-dot-2.png"
          alt=""
        />
        <img
          className="features-2-dot-3"
          src="/images/icon/features/home-1/features-dot-3.png"
          alt=""
        />
        <img
          className="features-2-triangle-1"
          src="/images/icon/features/home-1/features-triangle-1.png"
          alt=""
        />
        <img
          className="features-2-triangle-2"
          src="/images/icon/features/home-1/features-triangle-2.png"
          alt=""
        />
        <img
          className="features-2-triangle-3"
          src="/images/icon/features/home-1/features-triangle-3.png"
          alt=""
        />
      </div>
      <div className="">
        <div className="">
          <div className="">
            <div
              className="section__title-wrapper section__title-wrapper-2 text-center mb-75 wow fadeInUp"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
              }}
            >
              <span className="section__pre-title purple">Features</span>
              <h2 className="section__title section__title-2">
                We work together to create beautiful products.
              </h2>
              <p>Creaing products that are </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap py-16">
          <div className="w-full md:w-5/12 lg:w-3/12">
            <div className="features__tab">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button
                    className={
                      feature1
                        ? "nav-link blue-bg flex items-center active"
                        : "nav-link pink-bg flex items-center"
                    }
                    onClick={() => {
                      setFeature1(true);
                      setFeature2(false);
                      setFeature3(false);
                    }}
                  >
                    <BsLightning
                      className={
                        feature1 ? "mr-3 text-white" : "mr-3 text-brand"
                      }
                    />{" "}
                    Lightning Fast
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={
                      feature2
                        ? "nav-link blue-bg flex items-center active"
                        : "nav-link pink-bg flex items-center"
                    }
                    onClick={() => {
                      setFeature1(false);
                      setFeature2(true);
                      setFeature3(false);
                    }}
                  >
                    <MdSecurity
                      className={
                        feature2 ? "mr-3 text-white" : "mr-3 text-brand"
                      }
                    />{" "}
                    Secure
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={
                      feature3
                        ? "nav-link blue-bg flex items-center active"
                        : "nav-link pink-bg flex items-center"
                    }
                    onClick={() => {
                      setFeature1(false);
                      setFeature2(false);
                      setFeature3(true);
                    }}
                  >
                    <FaMobileAlt
                      className={
                        feature3 ? "mr-3 text-white" : "mr-3 text-brand"
                      }
                    />{" "}
                    Mobile Responsive
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-5/12 lg:w-8/12 pr-16">
            {feature1 && (
              <div
                className="tab-pane show active w-10/12 center"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                }}
              >
                <div className="features__thumb">
                  <div className="features__thumb-inner">
                    <img
                      className="fea-thumb"
                      src="/images/icon/features/home-1/speed.jpg"
                      alt=""
                    />
                    <img
                      className="fea-sm"
                      src="/images/icon/features/home-1/fea-sm.jpg"
                      alt=""
                    />
                    <img
                      className="fea-sm-2"
                      src="/images/icon/features/home-1/fea-sm-2.jpg"
                      alt=""
                    />
                    <img
                      className="fea-2-shape"
                      src="/images/icon/features/home-1/features-shape.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
            {feature2 && (
              <div
                className="tab-pane show active w-10/12 center"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                }}
              >
                <div className="features__thumb">
                  <div className="features__thumb-inner">
                    <img
                      className="fea-thumb"
                      src="/images/icon/features/home-1/security.jpg"
                      alt=""
                    />
                    <img
                      className="fea-sm"
                      src="/images/icon/features/home-1/fea-sm.jpg"
                      alt=""
                    />
                    <img
                      className="fea-sm-2"
                      src="/images/icon/features/home-1/fea-sm-2.jpg"
                      alt=""
                    />
                    <img
                      className="fea-2-shape"
                      src="/images/icon/features/home-1/features-shape.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
            {feature3 && (
              <div
                className="tab-pane show active w-10/12 center"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                }}
              >
                <div className="features__thumb">
                  <div className="features__thumb-inner">
                    <img
                      className="fea-thumb"
                      src="/images/icon/features/home-1/responsive.jpg"
                      alt=""
                    />
                    <img
                      className="fea-sm"
                      src="/images/icon/features/home-1/fea-sm.jpg"
                      alt=""
                    />
                    <img
                      className="fea-sm-2"
                      src="/images/icon/features/home-1/fea-sm-2.jpg"
                      alt=""
                    />
                    <img
                      className="fea-2-shape"
                      src="/images/icon/features/home-1/features-shape.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
