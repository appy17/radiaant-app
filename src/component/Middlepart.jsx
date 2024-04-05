// eslint-disable-next-line no-unused-vars
import React from "react";
import image1 from '../images/3921140.jpg'
import styled from "styled-components";

function Middlepart() {
  return (

//     <div className="bg-white font-sans text-[#333] font-medium px-6 py-12 border-2 border-blue-500 md:text-center">
//   <div className="grid md:grid-cols-2 items-center gap-8 max-w-5xl max-md:max-w-md mx-auto">
//     <div className="w-full max-w-md bg-white shadow-[0_2px_22px_-8px_rgba(93,96,127,0.2)] rounded-lg sm:px-8 px-4 py-6 relative">
//       <div className="text-center">
//         <h4 className="text-sm text-gray-500">EXPERIENCE BLISS AND INNER PEACE</h4>
//         <p className="text-2xl text-black font-extrabold mt-2">Join us for a Meditation Session</p>
//       </div>
//       <form className="space-y-4 mt-10">
//         {/* Form Inputs */}
//       </form>
//       <hr className="my-4" />
//       {/* Additional Content */}
//     </div>
//     <div className="max-md:text-center ">
//       <div className="image1">
//         <img src={image1} className="w-[519px] h-[519px]" />
//       </div>
//     </div>
//   </div>
// </div>

    <DIV className="bg-white font-sans text-[#333] font-medium px-6 py-12 ">
      <div className="grid md:grid-cols-2 items-center gap-8 max-w-5xl max-md:max-w-md mx-auto">
        <div className="w-full max-w-md bg-white shadow-[0_2px_22px_-8px_rgba(93,96,127,0.2)] rounded-lg sm:px-8 px-4 py-6 relative   max-md:text-center mx-auto">
          <div className="text-center">
            <h4 className="text-sm text-gray-500">EXPERIENCE BLISS AND INNER PEACE</h4>
            <p className="text-2xl text-blackfont-extrabold mt-2">
            Join us for a Meditation Session to
            </p>
          </div>
          <form className="space-y-4 mt-10">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Enter Name"
                className="px-4 py-2.5 bg-white w-full text-sm border-2 focus:border-[#333] outline-none rounded-lg"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-4"
                viewBox="0 0 24 24"
              >
                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                <path
                  d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter Email"
                className="px-4 py-2.5 bg-white w-full text-sm border-2 focus:border-[#333] outline-none rounded-lg"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-4"
                viewBox="0 0 682.667 682.667"
              >
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                  </clipPath>
                </defs>
                <g
                  clipPath="url(#a)"
                  transform="matrix(1.33 0 0 -1.33 0 682.667)"
                >
                  <path
                    fill="none"
                    strokeMiterlimit="10"
                    strokeWidth="40"
                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                    data-original="#000000"
                  ></path>
                </g>
              </svg>
            </div>
            {/* <div className="flex">
              <input type="checkbox" className="w-4" />
              <label className="text-sm ml-4 text-gray-500">
                I have read and accept the{" "}
                <a
                  href="javascript:void(0)"
                  className="text-sm text-blue-600 font-semibold"
                >
                  Terms and Conditions
                </a>
              </label>
            </div> */}
            <div className="!mt-10">
              <button
                type="button"
                className="px-6 py-2.5 w-full font-semibold bg-[#333] hover:bg-[#222] text-white rounded-lg"
              >
               Join Us
              </button>
              <button
                type="button"
                className="px-6 py-2.5 mt-4 w-full font-semibold bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22px"
                  fill="#fff"
                  className="inline mr-2"
                  viewBox="0 0 512 512"
                > */}
                  {/* <path
                    fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    data-original="#fbbd00"
                  />
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    data-original="#0f9d58"
                  />
                  <path
                    fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    data-original="#31aa52"
                  />
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    data-original="#3c79e6"
                  />
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    data-original="#cf2d48"
                  />
                  <path
                    fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    data-original="#eb4132"
                  />
                </svg> */}
                Register Now 
              </button>
            </div>
          </form>
          <hr className="my-4" />
          {/* <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <a
              href="javascript:void(0)"
              className="text-sm text-blue-600 font-semibold whitespace-nowrap"
            >
              Sign in
            </a>
          </p> */}
        </div>
        <div className="max-md:text-center">
         <div className="image1 ">
          <img src={image1} className="w-[519px] h-[362px]" />
         </div>
        </div>
      </div>
    </DIV>
  );
}

export default Middlepart;

const DIV = styled.div`
  

`
