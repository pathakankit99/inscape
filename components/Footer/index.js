import React from 'react'
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link"
function index() {
    return (
      <footer className="footer__area bg-gray-200 pt-24 overflow-hidden relative container2">
        <div className="footer__shape">
          <img
            className="footer-circle-1 footer-2-circle-1"
            src="/images/icon/footer/circle-1.png"
            alt=""
          />
          <img
            className="footer-circle-2 footer-2-circle-2"
            src="/images/icon/footer/circle-2.png"
            alt=""
          />
        </div>
        <div className="footer__top pb-24">
          <div className="">
            <div className="flex flex-wrap">
              <div
                className="w-6/12  lg:w-3/12"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                }}
              >
                <div className="footer__widget mb-24">
                  <div className="footer__widget-title mb-6">
                    <div className="footer__logo">
                      <Link href="/">
                        <img
                          width={100}
                          src="../images/logo/logo_dark_cropped.png"
                          alt="logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="footer__widget-content">
                    <p>Converting vision into reality.</p>
                  </div>
                </div>
              </div>
              <div
                className="w-6/12  lg:w-2/12"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                }}
              >
                <div className="footer__widget mb-24 pl-6">
                  <div className="footer__widget-title mb-6">
                    <h3>Overview</h3>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__link footer__link-2">
                      <ul>
                        <li>
                          <a href="/">Terms</a>
                        </li>
                        <li>
                          <a href="/">Privacy Policy</a>
                        </li>
                        {/* <li>
                          <a href="/">Cookies</a>
                        </li> */}
                        <li>
                          <a href="/">Refund</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-6/12  lg:w-2/12"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay=".7s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.7s",
                }}
              >
                <div className="footer__widget mb-24">
                  <div className="footer__widget-title mb-6">
                    <h3>Quick Links</h3>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__link footer__link-2">
                      <ul>
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/#contact-us">Contact Us</Link>
                        </li>
                        <li>
                          <Link href="/estimate">Estimate</Link>
                        </li>
                        {/* <li>
                          <a href="/services-details#">Integrations</a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-6/12  lg:w-2/12"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay=".9s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.9s",
                }}
              >
                <div className="footer__widget mb-24">
                  <div className="footer__widget-title mb-6">
                    <h3>Offers</h3>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__link footer__link-2">
                      <ul>
                        <li>
                          <a href="/">Influencer Discount</a>
                        </li>
                        <li>
                          <a href="/">Student Offer</a>
                        </li>
                        <li>
                          <a href="/">Coupon Validation</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-6/12  lg:w-3/12"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay="1.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "1.2s",
                }}
              >
                <div className="footer__widget mb-24 float-md-end fix">
                  <div className="footer__widget-title mb-6">
                    <h3>Follow Us</h3>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__social footer__social-2">
                      <ul className="flex ">
                        <li className="mr-5">
                          <a href="/services-details#">
                            <div className="center">
                              <AiFillInstagram />
                            </div>
                          </a>
                        </li>
                        <li className="mr-5">
                          <a href="/">
                            <div className="center">
                              <AiFillLinkedin />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="">
            <div className="footer__copyright">
              <div>
                <div>
                  <div className="footer__copyright-wrapper footer__copyright-wrapper-2 text-center">
                    <p>
                      Copyright © 2021 All Rights Reserved by {" "}
                      <a href="/">Inscape Technologies</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default index
