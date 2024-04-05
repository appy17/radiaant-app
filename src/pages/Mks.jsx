// eslint-disable-next-line no-unused-vars
import React from "react";
import image1 from "../images/donations.jpg";


function Mks() {
  return (
    <div>
      <div className="relative  font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0  before:opacity-50 before:z-10 h-[300px]">
        <img
          src={image1}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[300px] relative h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 className="md:text-6xl text-3xl font-bold mb-8">
            MCKS Trust Fund{" "}
          </h2>
          {/* <p className="text-lg text-center text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p> */}
          {/* <a href="javascript:void(0)"
          className="mt-10 text-base font-semibold py-2.5 px-6 border-2 border-yellow-600 hover:border-yellow-400 bg-transparent text-yellow-500 rounded">
          Get started
        </a> */}
        </div>
      </div>
      <div className="max-w-5xl mx-auto text-[#333] font-[sans-serif] my-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-4">
            Our Exclusive Features
          </h2>
          <p className="text-sm">
            As of my last update in January 2022, there isn't specific
            information available regarding an entity named "MCKS Trust Fund."
            Without more context, it's difficult to provide accurate
            information. However, I can offer some general information about
            trust funds.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div>
              <img
                src="https://readymadeui.com/image-1.webp"
                className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]"
              />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold mb-4">Customization</h3>
              <p className="text-sm">
                If "MCKS Trust Fund" refers to a specific trust fund, it's
                possible that it's a private trust fund established for a
                particular purpose or individual. To obtain detailed information
                about it, you would need to consult legal documents related to
                the trust, such as the trust agreement or any filings with
                relevant government authorities. If you have additional context
                or details about the MCKS Trust Fund, feel free to provide them,
                and I can try to offer more relevant information.
              </p>
              <button
                type="button"
                className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
              >
                Read More
              </button>
            </div>
            <div className="max-md:order-1">
              <h3 className="text-2xl font-extrabold mb-4">Performance</h3>
              <p className="text-sm">
              A trust fund is a legal entity that holds and manages
            assets on behalf of beneficiaries. Trust funds are commonly used for
            estate planning, charitable purposes, or for managing assets on
            behalf of minors or individuals who may not be able to manage their
            own finances.
              </p>
              <button
                type="button"
                className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
              >
                Read More
              </button>
            </div>
            <div>
              <img
                src="https://readymadeui.com/contact.webp"
                className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Mks;
