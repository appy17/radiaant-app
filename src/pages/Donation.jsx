// eslint-disable-next-line no-unused-vars
import React from "react";
import image1 from "../images/rendering-wizard-controlling-magic.jpg";
import Footer from "../component/Footer";

function Donation() {
  return (
    <div>
      <div className="relative  font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0  before:opacity-50 before:z-10 h-[300px]">
        <div className="relative h-[300px] text-center flex justify-center text-white">
          <img
            src={image1}
            alt="Banner Image"
            className="inset-0 w-full h-full object-cover"
          />
          <h2 className="md:text-8xl text-3xl font-bold mb-8 absolute top-[40%]">
            Donation{" "}
            {/* <span className="text-yellow-500 md:text-5xl text-3xl font-bold mb-8">
              WPHF
            </span> */}
          </h2>
        </div>
        <div>
          <div className="bg-white sm:px-6 p-4 font-[sans-serif]">
            <div className="max-w-2xl mx-auto">
              <div>
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                  Donations - Indian Nationals
                </h2>
                <p className="text-gray-500 text-sm mt-4">
                  Discover inspiring articles that ignite your imagination and
                  creativity. Duis accumsan, nunc et tempus blandit, metus mi
                  consectetur felis turpis vitae ligula.
                </p>
              </div>
              <hr className="my-10" />
              <div className="grid gap-16">
                <div>
                  <h3 className="text-m font-bold text-gray-800">
                    FOOD FOR THE HUNGRY SERVICE PROJECTS
                  </h3>
                  <div className="mt-4">
                    <p className="text-gray-500 text-sm">
                      Indian Nationals living in India can donate here.
                      Donations are not allowed for Foreign nationals.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800">
                    Choose the purpose of your donation
                  </h3>
                  {/* hjh */}
                  <div className="mt-4 ">
                    <p className="text-gray-500 text-sm">
                      Explore innovative techniques and unleash your creative
                      prowess. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Duis accumsan, nunc et tempus blandit,
                      metus mi consectetur felis turpis vitae ligula.
                    </p>
                    <div className=" ">
                      <button className="px-2 inline-block py-2.5 min-w-[140px] mt-[30px] bg-gradient-to-r from-green-400 rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-green-600 active:from-green-500">
                        <a href="#">FOR GMCKS ARHATIC YOGA ASHRAM</a>
                      </button>
                      <button className="inline-block px-2 py-2.5 min-w-[140px] mt-[30px] bg-gradient-to-r from-green-400 rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-green-600 active:from-green-500">
                        FOR WPHF BANGALORE FOR SPREADING PRANIC HEALING &
                        RESEARCH
                      </button>
                      <button className=" inline-block px-2 py-2.5 min-w-[140px] mt-[30px] bg-gradient-to-r from-green-400 rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-green-600 active:from-green-500">
                        FOR GMCKS ARHATIC YOGA ASHRAM
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[200px]">
        <Footer />
      </div>
    </div>
  );
}

export default Donation;
