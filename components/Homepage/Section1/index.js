import React from 'react'
import Rive from "rive-react";
function index() {
    return (
      <section className="flex justify-center items-center flex-wrap max-h-screen h-screen">
        <div className="p-6 lg:pl-36 text-center lg:text-left w-full lg:w-6/12 h-full lg:h-auto pt-24 lg:pt-0 flex items-center">
          <div>
            <h1 className="heading">Get Your Business online</h1>
            <h4 className="sub-heading">We help you go digital</h4>
          </div>
        </div>
        <div className="w-full lg:w-6/12 h-screen flex justify-between items-center hero-gradient bg-affair-800">
          <Rive
            src="https://piggish-wind.000webhostapp.com/marty.riv"
            autoPlay
          />
        </div>
      </section>
    );
}

export default index
