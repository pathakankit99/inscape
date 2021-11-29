import React,{useState, useEffect} from 'react'
const typeOptions = {
  ecommerce: {
    price: 3000,
  },
  resume: {
    price: 1500,
    },
    startup: {
      price:1500,
    },
    blog: {
        price: 3000,
    }
};
const pageOptions = {
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
  }
};
const techOptions = {
  wordpress: {
    price: 2000,
  },
  react: {
    price: 3000,
  },
  next: {
    price: 4000,
  },
  html: {
    price: 2000,
  },
};
function index() {
    const [type, setType] = useState("none");
    const [totalPrice, setTotal] = useState(0);
    useEffect(() => {
        console.log(totalPrice,'before');
        setTotal(
          () => totalPrice + typeOptions[type]?.price?typeOptions[type]?.price:0
        );
    }, [type])
    
        console.log(totalPrice);

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
        <div className="bg-white relative shadow-2xl container2 rounded-2xl -m-16 sm:-m-24 md:-m-36  lg:-m-24 xl:-m-36 z-50 ">
          <h5 className="pb-4 section__title font-medium text-3xl p-0">
            Your Estimate is {totalPrice?totalPrice:""}
          </h5>
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
                onChange={(e)=>setType(e.target.value)}
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
              onFocus={() => setCheck(true)}
              onBlur={() => setCheck(false)}
              className="appearance-none border-2 border-brand-accent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact"
              type="number"
              placeholder="+91 701785903"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pages"
            >
              Pages*
            </label>
            <select
              className="appearance-none border-2 border-brand-accent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pages"
              type="text"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4+">4+</option>
            </select>
          </div>

          <div className="mb-4 flex items-center p-0">
            <input type="checkbox" id="ui" name="ui" />
            <label
              className="block text-gray-700 text-sm font-bold px-2"
              htmlFor="ui"
            >
              UI Ready
            </label>
            <input type="checkbox" id="seo" name="seo" className="ml-6" />
            <label
              className="block text-gray-700 text-sm font-bold pl-2"
              htmlFor="seo"
            >
              SEO
            </label>
          </div>
          <div className="flex my-8 ">
            <button className="w-btn w-btn-2">submit</button>
          </div>
        </div>
      </div>
    );
}

export default index
