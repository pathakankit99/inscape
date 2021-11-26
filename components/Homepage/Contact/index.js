import {useState, useEffect} from 'react'
import { useRive, useStateMachineInput } from "rive-react";
function index() {
  const [hands_up, setHands_up] = useState(false);
  const [check, setCheck] = useState(false);
  const [look, setLook] = useState(0);
  
  const STATE_MACHINE_NAME = "State Machine 1";
  const ON_SUCCESS = "success";
  const ON_LOOK = "Look";
  const ON_CHECK = "Check";
  const ON_FAIL = "fail";
  const ON_HANDS_UP = "hands_up";

  const { RiveComponent, rive } = useRive({
    src: "https://inscape.mo.cloudinary.net/rives/teddy.riv",
    stateMachines: STATE_MACHINE_NAME,
    artboard: "Artboard",
    autoplay: true,
  });
  const onHoverInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    ON_HANDS_UP
  );
  const onCheckInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    ON_CHECK
  );
  useEffect(() => {
    onHoverInput?.value = hands_up;
    onCheckInput?.value = check;
  }, [hands_up,check])
    return (
      <section id="contact-us"
         data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay=".5s"
            style={{
              visibility: "visible",
              zIndex: 1,
              animationDelay: "0.5s",
              overflow: "hidden",
            }}
        className="lg:max-h-screen bg-yellow-400 flex justify-center items-center flex-wrap min-h-screen lg:max-h-screen overflow-hidden">
        <div className="w-full lg:w-6/12 h-screen -mb-36 md:-mb-16 lg:-mb-16" onMouseEnter={()=>setHands_up(true)} onMouseLeave={()=>setHands_up(false)}>
          <RiveComponent />
        </div>
        <div
         data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay=".5s"
            style={{
              visibility: "visible",
              zIndex: 1,
              animationDelay: "0.5s",
              overflow: "hidden",
          }}
          className="container2 z-10 bg-white rounded-3xl lg:h-auto p-6 text-center lg:text-left w-full lg:w-6/12 h-full lg:h-auto lg:p-16 flex items-center justify-center lg:justify-start">
          <div className="w-full">
            <h5 className="pb-4 section__title font-medium text-4xl p-0">Issues? Contact Us</h5>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Full Name*
              </label>
              <input
                className="appearance-none border-2 border-brand-accent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="ANTHONY GONSALVES"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email*
              </label>
              <input
                className="appearance-none border-2 border-brand-accent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="ANTHONY@GMAIL.COM"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="company"
              >
                Company Name
              </label>
              <input
                className="appearance-none border-2 border-brand-accent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="company"
                type="text"
                placeholder="INSCAPE"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contact"
              >
                Contact Number*
              </label>
              <input
                onFocus={()=>setCheck(true)} onBlur={()=>setCheck(false)}
                className="appearance-none border-2 border-brand-accent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contact"
                type="number"
                placeholder="+91 701785903"
              />
            </div>
            <div className="flex my-8 ">
              <button className="w-btn w-btn-2">
                    submit
                  </button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default index
