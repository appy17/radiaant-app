// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Aspect.css";

function Aspect() {
  return (
    <div className="home_aspects_of_life___E_wU overflow-hidden flex-wrap ">
      <div className="row justify-center wow ">
        <div className="col-12 col-lg-8 col-sm-10 text-center opacity-[1] translate-x-0 flex flex-col gap-y-[7px] justify-center">
          <span
            className="bg-gradient-to-r from-blue-600 via-pink-500 to-pink-600 text-transparent bg-clip-text"
            style={{ fontSize: "15px", letterSpacing: "1px" }}
          >
            UNIQUE TEACHINGS
          </span>
          <br></br>
          <h3
            className="page-heading font-semibold inline-block mb-[13px] "
            style={{ fontSize: "30px" }}
          >
            Works on all 4 Aspects of Life
          </h3>
          <p
            className="lg:w-[780px] mb-[20px] md:w-auto p-1"
            style={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: "15px",
            }}
          >
            As individuals our primary goal in life is to try and improve our
            state of well-being, and of those who are near and dear to us.
            Well-being is not simply the absence of sickness but instead a total
            state of physical, emotional, mental, financial, and spiritual
            well-being
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex justify-center font-[sans-serif] text-[#333] ">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-[15px] w-[84vw]   mt-16 max-md:max-w-lg ">
          <div className="text-center border rounded-md p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-blue-600 w-12 mb-4 inline-block bg-blue-50 p-3 rounded-full"
              viewBox="0 0 32 32"
            >
              <path
                d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                data-original="#000000"
              />
              <path
                d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                data-original="#000000"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Customization</h3>
            <p className="text-gray-500 text-sm">
              Tailor our product to suit your needs.
            </p>
            {/* <button
              type="button"
              className="border px-4 py-2 rounded-md font-bold flex items-center text-sm mt-6 hover:bg-gray-50"
            >
              Learn more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                className="rotate-90 ml-1.5"
              >
                <path
                  fill="#333"
                  d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z"
                  data-original="#000000"
                  paintOrder="fill markers stroke"
                ></path>
              </svg>
            </button> */}
          </div>
          
          <div className="text-center border rounded-md p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 mb-4 inline-block bg-blue-50 p-3 rounded-full"
              viewBox="0 0 682.667 682.667"
            >
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000" />
                </clipPath>
              </defs>
              <g
                fill="none"
                className="stroke-blue-600"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="40"
                clipPath="url(#a)"
                transform="matrix(1.33 0 0 -1.33 0 682.667)"
              >
                <path
                  d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                  data-original="#000000"
                />
                <path
                  d="M178 271.894 233.894 216 334 316.105"
                  data-original="#000000"
                />
              </g>
            </svg>
            <h3 className="text-xl font-semibold mb-2">Security</h3>
            <p className="text-gray-500 text-sm">
              Your data is protected by the latest security measures.
            </p>
            {/* <button
              type="button"
              className="border px-4 py-2 rounded-md font-bold flex items-center text-sm mt-6 hover:bg-gray-50"
            >
              Learn more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                className="rotate-90 ml-1.5"
              >
                <path
                  fill="#333"
                  d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z"
                  data-original="#000000"
                  paintOrder="fill markers stroke"
                ></path>
              </svg>
            </button> */}
          </div>
          <div className="text-center border rounded-md p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-blue-600 w-12 mb-4 inline-block bg-blue-50 p-3 rounded-full"
              viewBox="0 0 512.001 512.001"
            >
              <path
                d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                data-original="#000000"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-500 text-sm">
              24/7 customer support for all your inquiries.
            </p>
            {/* <button
              type="button"
              className="border px-4 py-2 rounded-md font-bold flex items-center text-sm mt-6 hover:bg-gray-50"
            >
              Learn more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                className="rotate-90 ml-1.5"
              >
                <path
                  fill="#333"
                  d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z"
                  data-original="#000000"
                  paintOrder="fill markers stroke"
                ></path>
              </svg>
            </button> */}
          </div>
          <div className="text-center border rounded-md p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-blue-600 w-12 mb-4 inline-block bg-blue-50 p-3 rounded-full"
              viewBox="0 0 512.001 512.001"
            >
              <path
                d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                data-original="#000000"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-500 text-sm">
              24/7 customer support for all your inquiries.
            </p>
            {/* <button
              type="button"
              className="border px-4 py-2 rounded-md font-bold flex items-center text-sm mt-6 hover:bg-gray-50"
            >
              Learn more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                className="rotate-90 ml-1.5"
              >
                <path
                  fill="#333"
                  d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z"
                  data-original="#000000"
                  paintOrder="fill markers stroke"
                ></path>
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aspect;
