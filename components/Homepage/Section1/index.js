import {useState, useEffect} from 'react'
import { useRive, useStateMachineInput } from "rive-react";
function index() {
  const [value, setValue] = useState(50);
  
  const STATE_MACHINE_NAME = "State Machine 1";
  const ON_PRESSED_INPUT_NAME = "input";

  const { RiveComponent, rive } = useRive({
    src: "https://piggish-wind.000webhostapp.com/tree.riv",
    stateMachines: STATE_MACHINE_NAME,
    artboard: "New Artboard",
    autoplay: true,
  });
  const onPressedInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    ON_PRESSED_INPUT_NAME
  );
  
  useEffect(() => {
    setValue(15);
    onPressedInput?.value=value;
  }, [onPressedInput])
  useEffect(() => {
    onPressedInput?.value = value;
  }, [value])
  
    // console.log(onPressedInput, value);
    return (
      <section className="lg:max-h-screen bg-indigo-900 flex justify-center items-center flex-wrap min-h-screen">
        <div className="container2 min-h-screen lg:h-auto p-6 text-center lg:text-left w-full lg:w-6/12 h-full lg:h-auto pt-24 lg:pt-0 flex items-center justify-center lg:justify-start">
          <div>
            <h1 className="heading">Get Your Business online</h1>
            <h2 className="sub-heading">We help you go digital</h2>
          </div>
        </div>
        <div className="w-full lg:w-6/12 min-h-screen hero-gradient">
          <div className="w-full h-screen flex flex-col justify-between">
            <div className="w-full h-5/6"><RiveComponent /></div>
            <div className="w-full bg-gray-100 p-6">
              <p className="text-center ">Slide to see your Business Grow</p>
              <input
                type="range"
                min="0"
                max="100"
                onChange={(e) => setValue(Number(e.target.value))}
                value={value}
                className="slider"
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default index
