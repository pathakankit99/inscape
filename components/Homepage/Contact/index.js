import {useState, useEffect} from 'react'
import { useRive, useStateMachineInput } from "rive-react";
import axios from 'axios'
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

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [contact, setContact] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

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
  }, [hands_up, check])
  
    const handleSubmit=async(e)=>{
      e.preventDefault()
      if(name && email && contact)
      {
        const data = {
          name,
          email,
          company,
          contact
       };
        if (contact.length > 9) {
          await axios.post('/api/contact', data)
          .then(res => {
            //   toast({
            //   title: "Submitted Data Successfully",
            //   description: res.data.message,
            //   status: "success",
            //   duration: 3000,
            //   isClosable: true,
            // })
            setSuccess(res.message)
            setName("")
            setMessage("")
            setEmail("")
            setCompany("")
            setContact("")
          })
            .catch(err => {
            // console.log(err);
            setError("Some Problem Occured");
          });
        }
        else {
          setError("Enter a valid phone number")
        }
      }
      else {
        setError("Fill All Required Fields");
      }
    }
    return (
      <section 
         data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay=".5s"
            style={{
              visibility: "visible",
              zIndex: 1,
              animationDelay: "0.5s",
              overflow: "hidden",
            }}
        className="lg:max-h-screen bg-yellow-400 flex justify-center items-center flex-wrap min-h-screen overflow-hidden pt-24">
        <div className="w-full lg:w-6/12 h-screen -mb-36 md:-mb-16 lg:-mb-16" onMouseEnter={()=>setHands_up(true)} onMouseLeave={()=>setHands_up(false)}>
          <RiveComponent />
        </div>
        <div
           id="contact-us"
         data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay=".5s"
            style={{
              visibility: "visible",
              zIndex: 1,
              animationDelay: "0.5s",
              overflow: "hidden",
          }}
          className="container2 z-10 bg-white rounded-3xl lg:h-auto p-6 text-center lg:text-left w-full lg:w-6/12 h-full lg:h-auto lg:px-16 flex items-center justify-center lg:justify-start">
          <div className="w-full">
            <h5  className=" section__title font-medium text-3xl">Interested? Contact Us</h5>
            {
              error && (
                <div className="err">{ error}</div>
              )
            }
            {
              success && (
                <div className="success">{ success}</div>
              )
            }
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Full Name*
              </label>
              <input
                required
                className="appearance-none border-2 border-brand-accent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
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
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
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
                value={company}
                onChange={(e)=>setCompany(e.target.value)}
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
                value={contact}
                onChange={(e)=>setContact(e.target.value)}
                className="appearance-none border-2 border-brand-accent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contact"
                type="number"
                placeholder="+91 701785903"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Tell us about the project...
              </label>
              <textarea
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                className="appearance-none border-2 border-brand-accent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                type="text"
                placeholder="Project, Budget, Tech Stack etc"
              ></textarea>
            </div>
            <div className="flex my-8 ">
              <button className="w-btn w-btn-2" onClick={(e)=>handleSubmit(e)}>
                submit
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default index
