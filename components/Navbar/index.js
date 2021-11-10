import { useRive, useStateMachineInput } from "rive-react";
import { useEffect, useState } from 'react'
import {signOut} from "next-auth/client"
import Link from 'next/link'
function Navbar() {
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
      document.querySelector(".navbar").className = "navbar fixed p-6 flex items-center justify-between left-0 right-0 container2 nav-scroll";
      document.querySelector(".menuOverlay").className = "menuOverlay text-bismark-700 lg:text-white  bg-yellow-500 lg:bg-bismark-700 menuOverlayScroll";
      document.querySelector(".quoteButton").className= "quoteButton  mr-16 px-4 py-1 rounded font-normal text-bismark-700  bg-yellow-300 ";
    } else {
      document.querySelector(".navbar").className = "navbar fixed p-6 flex items-center justify-between left-0 right-0 container2";
      document.querySelector(".menuOverlay").className = "menuOverlay text-bismark-700 lg:text-white  bg-yellow-500 lg:bg-bismark-700 ";
      document.querySelector(".quoteButton").className ="quoteButton mr-16 px-4 py-1 rounded font-normal text-bismark-700 lg:text-white  bg-yellow-300 lg:bg-bismark-700 ";
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
    <nav className="navbar fixed p-6 flex items-center justify-between left-0 right-0 container2 ">
      <div className="logoContainer">
        <div className={"text-3xl logo text-yellow-300"} title="INSCAPE">
          INSCAPE
        </div>
      </div>
      <div className={"flex items-center "}>
        <div className={"quoteButton mr-16 px-4 py-1 rounded font-normal text-bismark-700 lg:text-white  bg-yellow-300 lg:bg-bismark-700"}>
          <Link href="/">GET QUOTE</Link>
        </div>
        <div
          onClick={()=>setOpen(!open)}
          className={"relative flex items-center justify-center"}
        >
          <div style={style} className={"menuOverlay text-bismark-700 lg:text-white  bg-yellow-500 lg:bg-bismark-700 "}></div>
          <div className="z-50 overflow-hidden" style={{ maxHeight: "30px", maxWidth: "30px", width:"30px",height:"30px" }}>
              <RiveComponent/>
            </div>
        </div>
      </div>
      <aside style={style2} className="hardText tracking-widest sidemenu mx-auto p-5 text-bismark-700 lg:text-white">
        <div className="h-screen flex items-center ">
          <ul className="mb-16">
            <li className="pointer mb-6">
              <Link href="/">
                <div className="flex">
                  <div  className="text-3xl hardText pr-4">01.</div>
                  <div className={"logo text-7xl hover:underline "} title="HOME">
                    HOME
                  </div>
                </div>
              </Link>
            </li>
            <li className="pointer mb-6">
              <Link href="/about-us">
                 <div className="flex">
                  <div  className="text-3xl hardText pr-4">02.</div>
                <div className={"logo text-7xl hover:underline  "} title="ABOUT US">
                  ABOUT US
                </div>
                </div>
              </Link>
            </li>
            <li className="pointer mb-6">
              <Link href="/contact-us">
                <div className="flex">
                  <div  className="text-3xl hardText pr-4">03.</div>
                <div className={"logo text-7xl hover:underline"} title="CONTACT US">
                  CONTACT US
                </div>
                </div>
              </Link>
            </li>
            <li className="pointer mb-6">
              <Link href="/about-us">
                <div className="flex">
                  <div  className="text-3xl hardText pr-4">04.</div>
                <div className={"logo text-7xl hover:underline"} title="AFFILIATE">
                  AFFILIATE
                </div>
                </div>
              </Link>
            </li>
            <li className="pointer mb-6">
              <Link href="/account">
                <div className="flex">
                  <div  className="text-3xl hardText pr-4">05.</div>
                <div className={"logo text-7xl hover:underline"} title="ACCOUNT">
                  ACCOUNT
                </div>
                </div>
              </Link>
            </li>
            <li className=" pointer mb-6">
              <div className="flex">
                <div className="text-3xl hardText pr-4">06
                  .</div>
              <div onClick={() => signOut()} className={"logo text-7xl hover:underline"} title="SIGN OUT">
                  SIGN OUT
              </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </nav>
  );
}

export default Navbar;
