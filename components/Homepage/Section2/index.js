import Rive from "rive-react";
import { Parallax } from "react-scroll-parallax";
function index() {
  return (
    <section className="p-6 container2 min-h-screen bg-bismark-600 flex justify-center items-center relative">
      <Parallax
        y={[-0, 7]}
        tagOuter="figure"
        className="text-white p-6 lg:p-24 h-full w-full"
      >
        <div className="float-element -m-4 lg:-m-10">
          <Rive
            src="https://piggish-wind.000webhostapp.com/runner_boy.riv"
            autoPlay
          />
        </div>
        <div className="w-full text-white">
          <p className="hardText tracking-wider uppercase text-3xl break-normal pb-6">
            Get started.{" "}
            <span className="text-yellow-400 hardText">Get Digital.</span>
          </p>
          <p className="hardText tracking-wider uppercase text-7xl break-normal">
            Over <span className="text-yellow-400 hardText">4.5 billion </span>
            People have access to Internet and plenty among them can be your
            <span className="text-yellow-400 hardText"> customers.</span>
          </p>
        </div>
        {/* <div className="float-element float-right">
          <Rive
            src="https://piggish-wind.000webhostapp.com/worm.riv"
            autoPlay
          />
        </div> */}
      </Parallax>
    </section>
  );
}

export default index;
