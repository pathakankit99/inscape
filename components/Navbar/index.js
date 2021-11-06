import { useRive, useStateMachineInput } from "rive-react";
import { useEffect, useState } from 'react'
import {signOut} from "next-auth/client"
import Link from 'next/link'
function Navbar({textColor,bgColor}) {
  const [open, setOpen] = useState(false);

  const STATE_MACHINE_NAME = "Remember State";
  const ON_PRESSED_INPUT_NAME = "Open";

  const { RiveComponent, rive } = useRive({
    src: "https://piggish-wind.000webhostapp.com/menu.riv",
    stateMachines: STATE_MACHINE_NAME,
    artboard: "New Artboard",
    autoplay: true,
  });
  const menuOverlay = { true: "scale(70)", false: "scale(1)" };
  var style = {
    transform: menuOverlay[open],
  };
  const sidemenu = { true: "translateX(0%)", false: "translateX(100%)" };
  var style2 = {
    transform: sidemenu[open],
    minHeight: "90vh",
    marginTop: "10vh",
  };

   // Both onHoverInput and onPressedInput are boolean inputs. To transition
  // states we need to set the value property to true or false.
  const onPressedInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    ON_PRESSED_INPUT_NAME
  );

  useEffect(() => {
    if (open) {
      document.body.setAttribute("style", "overflow-y: hidden;");
    } else {
      document.body.setAttribute("style", "overflow-y: scroll;");
    }
    onPressedInput?.value = open;
  
  }, [open]);

  const handleScroll = () => {
    if (window.scrollY > 250) {
      document.querySelector(".navbar").className="navbar fixed p-6 flex items-center justify-between left-0 right-0 container2 nav-scroll";
    } else {
      document.querySelector(".navbar").className="navbar fixed p-6 flex items-center justify-between left-0 right-0 container2";
    }
    // console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll",handleScroll);
    }
  }, [])

  return (
    <nav className="navbar fixed p-6 flex items-center justify-between left-0 right-0 container2">
      <div className="logoContainer">
        <div className={"text-3xl logo " + textColor} title="INSCAPE">
          INSCAPE
        </div>
      </div>
      <div className="flex items-center">
        <div className={"mr-16 text-white px-4 py-1 rounded font-light hover:bg-affair-500 "+bgColor}>
          <Link href="/">GET QUOTE</Link>
        </div>
        <div
          onClick={()=>setOpen(!open)}
          className={"relative flex items-center justify-center"}
        >
          <div style={style} className={"menuOverlay text-affair-200 " + bgColor}></div>
          <div className="z-50 overflow-hidden" style={{ maxHeight: "30px", maxWidth: "30px", width:"30px",height:"30px" }}>
              <RiveComponent/>
            </div>
        </div>
      </div>
      <aside style={style2} className="sidemenu mx-auto p-5">
        <div className="h-screen flex justify-center items-center ">
          <ul className="mb-16">
            <li className="hover:underline pointer mb-6">
              <Link href="/">
                <div className="logo text-3xl" title="HOME">
                  HOME
                </div>
              </Link>
            </li>
            <li className="hover:underline pointer mb-6">
              <Link href="/about-us">
                <div className="logo text-3xl" title="ABOUT US">
                  ABOUT US
                </div>
              </Link>
            </li>
            <li className="hover:underline pointer mb-6">
              <Link href="/contact-us">
                <div className="logo text-3xl" title="CONTACT US">
                  CONTACT US
                </div>
              </Link>
            </li>
            <li className="hover:underline pointer mb-6">
              <Link href="/about-us">
                <div className="logo text-3xl" title="AFFILIATE">
                  AFFILIATE
                </div>
              </Link>
            </li>
            <li className="hover:underline pointer mb-6">
              <Link href="/account">
                <div className="logo text-3xl" title="ACCOUNT">
                  ACCOUNT
                </div>
              </Link>
            </li>
            <li className="hover:underline pointer mb-6">
              <div onClick={() => signOut()} className="logo text-3xl" title="SIGN OUT">
                  SIGN OUT
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </nav>
  );
}

export default Navbar;
