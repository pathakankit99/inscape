import React from "react";
import Rive from "rive-react";
import { Parallax } from "react-scroll-parallax";
function index() {
  return (
    <section className="p-6 relative container2">
      <h1 className="hardText text-yellow-400 text-7xl">Our Services</h1>
      <Parallax className="relative" y={[0, 7]} tagOuter="figure">
        <div className="my-6 sectionCard lg:h-96 bg-white flex justify-center items-center flex-wrap">
          <div className="w-full min-h-full lg:w-6/12 p-6 ">
            <h3 className="hardText text-5xl ">Wordpress Site</h3>
            <div className=" mt-2 mb-6">
              <span className="px-4 py-1 bg-green-200 text-green-800 rounded-xl text-sm mr-2">
                Economical
              </span>
              <span className="px-4 py-1 bg-green-200 text-green-800 rounded-xl text-sm mr-2">
                Easy to use
              </span>

              <span className="px-4 py-1 bg-red-200 text-red-800 rounded-xl text-sm mr-2">
                Slow
              </span>
            </div>
            <p>
              Ad magna elit magna ea veniam nisi amet quis adipisicing enim
              culpa labore occaecat non. Dolore laborum reprehenderit sint nisi
              anim eu velit consectetur reprehenderit aliquip aliqua cupidatat
              ipsum labore. Cillum laborum dolore officia non consequat
              deserunt. Irure qui id mollit ullamco magna exercitation veniam
              excepteur ex in.
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
          <div className="w-full min-h-full border-bismark-700 lg:w-6/12 border-l-4 p-6 bg-bismark-800 flex justify-center items-center">
            <img
              className="w-full"
              src="https://s.w.org/style/images/about/WordPress-logotype-alternative.png"
            />
          </div>
        </div>
        <div className="my-6 sectionCard lg:h-96 bg-white flex justify-center items-center flex-wrap">
          <div className="order-2 w-full min-h-full lg:w-6/12 p-6 ">
            <h3 className="hardText text-5xl ">React Site</h3>
            <div className=" mt-2 mb-6">
              <span className="px-4 py-1 bg-green-200 text-green-800 rounded-xl text-sm mr-2">
                Fast
              </span>
              <span className="px-4 py-1 bg-green-200 text-green-800 rounded-xl text-sm mr-2">
                Fully Customisable
              </span>
              <span className="px-4 py-1 bg-red-200 text-red-800 rounded-xl text-sm mr-2">
                Bad SEO
              </span>
            </div>
            <p>
              Ad magna elit magna ea veniam nisi amet quis adipisicing enim
              culpa labore occaecat non. Dolore laborum reprehenderit sint nisi
              anim eu velit consectetur reprehenderit aliquip aliqua cupidatat
              ipsum labore. Cillum laborum dolore officia non consequat
              deserunt. Irure qui id mollit ullamco magna exercitation veniam
              excepteur ex in.
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
                <span className="hardText">Starting from Rs 25,000</span>
              </div>
            </div>
          </div>
          <div className="order-1 w-full min-h-full border-affair-700 lg:w-6/12 border-r-4 p-6 bg-affair-500 flex justify-center items-center">
            <img
              className="w-full"
              src="https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png"
            />
          </div>
        </div>
        <div className="my-6 sectionCard lg:h-96 bg-white flex justify-center items-center flex-wrap">
          <div className="w-full min-h-full lg:w-6/12 p-6 ">
            <h3 className="hardText text-5xl ">NextJS Site</h3>
            <div className=" mt-2 mb-6">
              <span className="px-4 py-1 bg-green-200 text-green-800 rounded-xl text-sm mr-2">
                Fast
              </span>
              <span className="px-4 py-1 bg-green-200 text-green-800 rounded-xl text-sm mr-2">
                Great SEO
              </span>

              <span className="px-4 py-1 bg-red-200 text-red-800 rounded-xl text-sm mr-2">
                Expensive
              </span>
            </div>
            <p>
              Ad magna elit magna ea veniam nisi amet quis adipisicing enim
              culpa labore occaecat non. Dolore laborum reprehenderit sint nisi
              anim eu velit consectetur reprehenderit aliquip aliqua cupidatat
              ipsum labore. Cillum laborum dolore officia non consequat
              deserunt. Irure qui id mollit ullamco magna exercitation veniam
              excepteur ex in.
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
                <span className="hardText">Starting from Rs 40,000</span>
              </div>
            </div>
          </div>
          <div className="w-full min-h-full border-bismark-00 lg:w-6/12 border-l-4 p-6 bg-bismark-200 flex justify-center items-center">
            <img
              className="max-w-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png"
            />
          </div>
        </div>
        <div className="my-6 sectionCard lg:h-96 bg-white flex justify-center items-center flex-wrap">
          <div className="order-2 w-full min-h-full lg:w-6/12 p-6 ">
            <h3 className="hardText text-5xl ">Static Site</h3>
            <div className=" mt-2 mb-6">
              <span className="px-4 py-1 bg-green-200 text-green-800 rounded-xl text-sm mr-2">
                Economical
              </span>
              <span className="px-4 py-1 bg-green-200 text-green-800 rounded-xl text-sm mr-2">
                Good SEO
              </span>

              <span className="px-4 py-1 bg-red-200 text-red-800 rounded-xl text-sm mr-2">
                Not Dynamic
              </span>
            </div>
            <p>
              Ad magna elit magna ea veniam nisi amet quis adipisicing enim
              culpa labore occaecat non. Dolore laborum reprehenderit sint nisi
              anim eu velit consectetur reprehenderit aliquip aliqua cupidatat
              ipsum labore. Cillum laborum dolore officia non consequat
              deserunt. Irure qui id mollit ullamco magna exercitation veniam
              excepteur ex in.
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
                <span className="hardText">Starting from Rs 10,000</span>
              </div>
            </div>
          </div>
          <div className="order-1 w-full min-h-full border-green-700 lg:w-6/12 border-r-4 p-6 bg-green-300 flex justify-center items-center">
            <img
              className="max-w-full"
              src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-image-logo-html-7.png"
            />
          </div>
        </div>
      </Parallax>
    </section>
  );
}

export default index;
