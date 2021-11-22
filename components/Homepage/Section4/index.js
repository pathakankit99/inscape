import React from 'react'
import {
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiWordpress,
  SiBootstrap,
  SiRedux,
  SiAndroid,
  SiIos,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import Marquee from "react-fast-marquee";

function index() {
    return (
      <section className="container2 bg-white py-24">
        <h3 className="hardText text-3xl">Technology we use</h3>
          <Marquee gradientWidth={50} className="overflow-hidden my-6">
            <div className="flex flex-col items-center">
                <SiReact className="icon rotate" />
                <p className="p-4 font-medium">ReactJs</p>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs className="icon" />
              <p className="p-4 font-medium">NextJs</p>
            </div>
            <div className="flex flex-col items-center">
              <SiHtml5 className="icon" />
              <p className="p-4 font-medium">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <SiCss3 className="icon" />
              <p className="p-4 font-medium">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="icon" />
              <p className="p-4 font-medium">TailwindCSS</p>
            </div>
            <div className="flex flex-col items-center">
              <SiWordpress className="icon" />
              <p className="p-4 font-medium">Wordpress</p>
            </div>
            <div className="flex flex-col items-center">
              <SiBootstrap className="icon" />
              <p className="p-4 font-medium">Bootstrap</p>
            </div>
            <div className="flex flex-col items-center">
              <SiRedux className="icon rotate" />
              <p className="p-4 font-medium">Redux</p>
            </div>
            <div className="flex flex-col items-center">
              <SiAndroid className="icon" />
              <p className="p-4 font-medium">Android App</p>
            </div>
            <div className="flex flex-col items-center">
              <SiIos className="icon" />
              <p className="p-4 font-medium">IOS App</p>
            </div>
            <div className="flex flex-col items-center">
              <SiFigma className="icon" />
              <p className="p-4 font-medium">Figma Designs</p>
            </div>
            <div className="flex flex-col items-center">
              <SiAdobephotoshop className="icon" />
              <p className="p-4 font-medium">Photoshop</p>
            </div>
            <div className="flex flex-col items-center">
              <SiAdobeillustrator className="icon" />
              <p className="p-4 font-medium">Illustrator</p>
            </div>
          </Marquee>
      </section>
    );
}

export default index
