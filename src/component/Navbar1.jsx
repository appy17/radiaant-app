// eslint-disable-next-line no-unused-vars
import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import image1 from '../images/RadiaantLogo.jpg'

const Navbar1 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <header className={`border-b bg-white font-sans min-h-[60px] `} >
      <div className="flex flex-wrap items-center justify-between xl:px-10 px-6 py-1 relative lg:gap-y-2 gap-y-4 gap-x-4">
        <a href="javascript:void(0)">
          <img src={image1} alt="logo" className="w-[61px] " />
        </a>{" "}
        <div className="flex items-center max-lg:ml-auto lg:order-1  " style={{display: 'none'}} >
          <span className="relative">
            <i className="fa-brands fa-facebook"></i>
            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white"></span>
          </span> 

          <span className="relative ml-8">
            {/* Icon elements */}
          </span> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px" className="cursor-pointer fill-[#000] hover:fill-yellow-300 inline ml-7">
            {/* Path elements for SVG icon */}
          </svg>
          <button id="toggle" className="lg:hidden ml-7" onClick={toggleMenu}>
            {/* Icon for the toggle button  */}
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          id="collapseMenu"
          style={{ display: isMenuOpen ? "block" : "none" }}
          className="lg:!flex max-lg:hidden max-lg:w-full lg:space-x-10 max-lg:space-y-3 max-lg:my-4"
        >
          <li className="max-lg:border-b max-lg:py-2">
            <Link to= "/"
              href="javascript:void(0)"
              className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"

            >
              Home
            </Link>
          </li>
          <li className='group max-lg:border-b max-lg:py-2 relative'>
            <a
              href="javascript:void(0)"
              className='hover:text-blue-300 font-bold text-[#000] text-[15px] lg:hover:fill-blue-300 block'>About<svg
              xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' className="ml-1 inline-block"
              viewBox="0 0 24 24">
              <pat
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16" data-original="#000000" />
            </svg>
            </a>
            <ul
              className='absolute hidden group-hover:block shadow-lg max-lg:border max-lg:border-gray-500 bg-white px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 lg:-left-6 min-w-[250px] z-50'>
              <li className='border-b py-2'><Link to='/about'
                  className='hover:text-blue-300 font-bold text-[#000] text-[15px] block'>WPHF</Link></li>
              <li className='border-b py-2'><Link to='/founder'
                  className='hover:text-blue-300 font-bold text-[#000] text-[15px] block'>Our Founder</Link></li>
              <li className='border-b py-2'><a href='/pranic'
                  className='hover:text-blue-300 font-bold text-[#000] text-[15px] block'>Pranic Healing</a></li>
              <li className='border-b py-2'><a href='/pranic'
                  className='hover:text-blue-300 font-bold text-[#000] text-[15px] block'>Twin Heart</a></li>
            </ul>
          </li>

          <li className='group max-lg:border-b max-lg:py-2 relative'>
            <a href='javascript:void(0)'
              className='hover:text-blue-300 font-bold text-[#000] text-[15px] lg:hover:fill-blue-300 block'>Courses<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' className="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </a>
            <ul
              className='absolute hidden group-hover:block shadow-lg max-lg:border max-lg:border-gray-500 bg-white px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 lg:-left-6 min-w-[250px] z-50'>
              <li className='border-b py-2'><a href='javascript:void(0)'
                  className='hover:text-blue-300 font-bold text-[#000] text-[15px] block'>WELLNESS</a></li>
              <li className='border-b py-2'><a href='javascript:void(0)'
                  className='hover:text-blue-300 font-bold text-[#000] text-[15px] block'>PROSPERITY
                  </a></li>
              <li className='border-b py-2'><a href='javascript:void(0)'
                  className='hover:text-blue-300 font-bold text-[#000] text-[15px] block'>SPIRITUALITY</a></li>
              <li className='border-b py-2'><a href='javascript:void(0)'
                  className='hover:text-blue-300 font-bold text-[#000] text-[15px] block'>HIGHER COURSES</a></li>
             
            </ul>
          </li>

          <li className='group max-lg:border-b max-lg:py-2 relative'>
            <a href='javascript:void(0)'
              className='hover:text-blue-300 font-bold text-[#000] text-[15px] lg:hover:fill-blue-300 block'> Donation<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' className="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </a>
            <ul
              className='absolute hidden group-hover:block shadow-lg max-lg:border max-lg:border-gray-500 bg-white px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 lg:-left-6 min-w-[250px] z-50'>
              <li className='border-b py-2'><a href='/donate'
                  className='hover:text-blue-300 font-bold text-[#000] text-[15px] block'>Donation -India National</a></li>
              <li className='border-b py-2'><a href='javascript:void(0)'
                  className='hover:text-blue-300 font-bold text-[#000] text-[15px] block'>Donation International</a></li>
              <li className='border-b py-2'><a href='javascript:void(0)'
                  className='hover:text-blue-300 font-bold text-[#000] text-[15px] block'>WPHF Charities</a></li>
              <li className='border-b py-2'><a href='javascript:void(0)'
                  className='hover:text-blue-300 font-bold text-[#000] text-[15px] block'>Food for Hungry</a></li>
                <li className="border-b py-2">
                <a
                  href="/mks"
                  className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
                >
                MCKS Trust Funds
                </a>
              </li>
            </ul>
         
          </li>

          <li className="max-lg:border-b max-lg:py-2">
            <a
              href="javascript:void(0)"
              className="hover:text-blue-300 font-bold text-[#000] text-[15px] block"
            >
              Contact Us
            </a>
          </li>

          {/* More list items */}
        </ul>
        {/* <div className=""> */}
        <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2">LOGIN</button>
        {/* </div> */}
      </div>
    </header>
  );
};

export default Navbar1;