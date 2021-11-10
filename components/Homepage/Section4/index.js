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
    src: "https://piggish-wind.000webhostapp.com/teddy.riv",
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
      <section className="lg:max-h-screen bg-yellow-400 flex justify-center items-center flex-wrap min-h-screen">
        <div className="w-full lg:w-6/12 h-screen" onMouseEnter={()=>setHands_up(true)} onMouseLeave={()=>setHands_up(false)}>
          <RiveComponent />
        </div>
        <div className="container2 bg-white rounded-3xl lg:h-auto p-6 text-center lg:text-left w-full lg:w-6/12 h-full lg:h-auto lg:p-16 flex items-center justify-center lg:justify-start">
          <div className="w-full">
            <h5 className="pb-4 hardText font-medium text-4xl">Let's Solve Your Issue</h5>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="name"
              >
                Full Name*
              </label>
              <input
                class="appearance-none border-2 border-yellow-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="ANTHONY GONSALVES"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email*
              </label>
              <input
                class="appearance-none border-2 border-yellow-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="ANTHONY@GMAIL.COM"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="company"
              >
                Company Name
              </label>
              <input
                class="appearance-none border-2 border-yellow-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="company"
                type="text"
                placeholder="INSCAPE"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="contact"
              >
                Contact Number*
              </label>
              <input
                onFocus={()=>setCheck(true)} onBlur={()=>setCheck(false)}
                class="appearance-none border-2 border-yellow-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contact"
                type="number"
                placeholder="+91 701785903"
              />
            </div>
            <div className="flex my-8 ">
              <div
                onMouseEnter={() => {
                  document.querySelector(".submitButton").className =
                    "submitButton bg-yellow-400 px-4 py-1 rounded-xl shadow-xl border-4 cursor-pointer border-black flex justify-center items-center demo-1";
                }}
                onMouseLeave={() => {
                  document.querySelector(".submitButton").className =
                    "submitButton bg-yellow-400 px-4 py-1 rounded-xl shadow-xl border-4 cursor-pointer border-black flex justify-center items-center";
                }}
                style={{ width: "200px", height: "50px" }}
                className="submitButton bg-yellow-400 px-4 py-1 rounded-xl shadow-xl border-4 cursor-pointer border-black flex justify-center items-center"
              >
                <span className="text-3xl hardText">SUBMIT</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default index
