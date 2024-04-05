// eslint-disable-next-line no-unused-vars
import React from "react";
import "./CheckoutStore.css";
// import image1 from "../images/person-experiencing-spiritual-awakening.jpg";

function CheckoutStore() {
  return (
    <div className="mb-[50px] w-[100%] flex justify-center">
      <div
        className="flex justify-center"
        style={{ opacity: "1", transform: "none", flexWrap: "wrap" }}
      >
        <div className="w-[100%]  text-center" style={{ flex: "0 0 auto" }}>
          <span
            className="mb-[20px] bg-gradient-to-r from-blue-600 via-pink-500 to-pink-600 text-transparent bg-clip-text text-[15px]"
            style={{ letterSpacing: "1px" }}
          >
            MORE FROM OUR COMMUNITY
          </span>
          <h3 className=" text-4xl mt-5  font-semibold ">
            News, Research and Articles
          </h3>
        </div>
        <div className="justify-center flex">
          <div className="bg-white font-[sans-serif]">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
                <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                  <img
                    src="https://readymadeui.com/Imagination.webp"
                    alt="Blog Post 1"
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
                    <span className="text-sm block text-gray-600 mb-2">
                      10 FEB 2023 | BY JOHN DOE
                    </span>
                    <h3 className="text-xl font-bold text-[#333]">
                      A Guide to Igniting Your Imagination
                    </h3>
                    <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                      <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis accumsan, nunc et tempus blandit, metus mi
                        consectetur felis turpis vitae ligula.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                  <img
                    src="https://readymadeui.com/hacks-watch.webp"
                    alt="Blog Post 2"
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
                    <span className="text-sm block text-gray-600 mb-2">
                      7 JUN 2023 | BY MARK ADAIR
                    </span>
                    <h3 className="text-xl font-bold text-[#333]">
                      Hacks to Supercharge Your Day
                    </h3>
                    <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                      <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis accumsan, nunc et tempus blandit, metus mi
                        consectetur felis turpis vitae ligula.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                  <img
                    src="https://readymadeui.com/prediction.webp"
                    alt="Blog Post 3"
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
                    <span className="text-sm block text-gray-600 mb-2">
                      5 OCT 2023 | BY SIMON KONECKI
                    </span>
                    <h3 className="text-xl font-bold text-[#333]">
                      Trends and Predictions
                    </h3>
                    <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                      <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis accumsan, nunc et tempus blandit, metus mi
                        consectetur felis turpis vitae ligula.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
          
      </div>
    </div>
  );
}

export default CheckoutStore;
