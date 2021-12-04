import React,{useState, useEffect} from 'react'
import axios from 'axios'
function index() {
  const [type, setType] = useState("none");
  const [tech, setTech] = useState("none");
  const [pages, setPages] = useState("none");
  const [template, setTemplate] = useState(false);
  const [seo, setSEO] = useState(false);
  const [total, setTotal] = useState(0);

  
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const typeOptions = {
    ecommerce: {
      price: 6000,
    },
    resume: {
      price: 3000,
    },
    startup: {
      price: 3000,
    },
    blog: {
      price: 6000,
    },
    portfolio: {
      price: 3000,
    },
    "single-product": {
      price: 4500
    }
  };
  const pagesOptions = {
    "1": {
      price: 1000,
    },
    "2": {
      price: 2000,
    },
    "3": {
      price: 3000,
    },
    "4": {
      price: 4000,
    },
    "4+": {
      price: 5000,
    },
  };
  const techOptions = {
    wordpress: {
      price: 2000,
    },
    react: {
      price: 4000,
    },
    nextjs: {
      price: 6000,
    },
    html: {
      price: type === "ecommerce" ? 10000 : 2000,
    },
  };
  useEffect(() => {
    setTotal(0);
    console.log(
      typeOptions[type]?.price ? typeOptions[type]?.price : 0,
      "+",
      techOptions[tech]?.price ? techOptions[tech]?.price : 0,
      "+",
      pagesOptions[pages]?.price ? pagesOptions[pages]?.price : 0
    );
    const typePrice = typeOptions[type]?.price ? typeOptions[type]?.price : 0;
    const techPrice = techOptions[tech]?.price ? techOptions[tech]?.price : 0;
    const pagesPrice = pagesOptions[pages]?.price ? pagesOptions[pages]?.price : 0;
    

    const temp = typePrice + techPrice + pagesPrice + (template? -2000 : 0) + (seo? + 3000 : 0);
    
    setTotal(temp);
  }, [type, tech, pages, template, seo])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type && email && contact && tech && pages) {
      const data = {
        type,
        email,
        contact,
        tech,
        pages,
        template,
        seo,
        total
      };
      if (contact.length > 9) {
        await axios
          .post("/api/quote", data)
          .then((res) => {
            setError("");
            setSuccess("We will Contact you soon.");
            setEmail("");
            setContact("");
            setType("none");
            setPages("none");
            setTech("none");
          })
          .catch((err) => {
            // console.log(err);
            setSuccess("")
            setError("Some Problem Occured");
          });
      } else {
        setError("Enter a valid phone number");
      }
    } else {
      setError("Fill All Required Fields");
    }
  };
    

    return (
      <div
        className="w-full flex items-center justify-center  pb-32 bg-brand-accent"
        // data-aos="fade-up"
        // data-aos-duration={1000}
        // data-aos-delay=".7s"
        // style={{
        //   visibility: "visible",
        //   animationDelay: "0.7s",
        // }}
      >
        <div className="bg-white relative shadow-2xl w-full sm:w-8/12 lg:w-7/12 container2 p-6 rounded-2xl -m-16 sm:-m-24 md:-m-36  lg:-m-24 xl:-m-36 z-50 ">
          <h5 className="section__title text-center font-medium text-3xl p-0">
            Your Estimate is{" "}
            {total && type !== "none" && tech !== "none" ? total : ""}
          </h5>
          <p className="pb-4 -mt-4 text-center">
            *These are rough estimates only.
          </p>
          {error && <div className="err">{error}</div>}
          {success && <div className="success">{success}</div>}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="type"
            >
              Type*
            </label>
            <select
              className="appearance-none border-2 border-brand-accent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="type"
              type="text"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="none">None</option>
              <option value="ecommerce">Ecommerce</option>
              <option value="startup">Startup</option>
              <option value="resume">Resume</option>
              <option value="portfolio">Portfolio</option>
              <option value="single-product">Single Product Startup</option>
              <option value="blog">Blog</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none border-2 border-brand-accent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="ANTHONY@GMAIL.COM"
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
              onChange={(e) => setContact(e.target.value)}
              className="appearance-none border-2 border-brand-accent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact"
              type="number"
              placeholder="+91 701785903"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tech"
            >
              Tech*
            </label>
            <select
              className="appearance-none border-2 border-brand-accent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tech"
              type="text"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="none">None</option>
              <option value="html">HTML/CSS</option>
              <option value="wordpress">Wordpress</option>
              <option value="react">React</option>
              <option value="nextjs">NextJs</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pages"
            >
              Pages*
            </label>
            <select
              onChange={(e) => setPages(e.target.value)}
              className="appearance-none border-2 border-brand-accent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pages"
              type="text"
            >
              <option value="none">Choose Pages</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4+">4+</option>
            </select>
          </div>

          <div className="mb-4 flex items-center p-0">
            <input
              value={template}
              onChange={() => setTemplate(!template)}
              type="checkbox"
              id="ui"
              name="ui"
            />
            <label
              className="block text-gray-700 text-sm font-bold px-2"
              htmlFor="ui"
            >
              Template
            </label>
            <input
              value={seo}
              onChange={() => setSEO(!seo)}
              type="checkbox"
              id="seo"
              name="seo"
              className="ml-6"
            />
            <label
              className="block text-gray-700 text-sm font-bold pl-2"
              htmlFor="seo"
            >
              SEO
            </label>
          </div>
          <div className="flex my-8 ">
            <button className="w-btn w-btn-2" onClick={(e)=>handleSubmit(e)}>Click to get discount</button>
          </div>
        </div>
      </div>
    );
}

export default index
