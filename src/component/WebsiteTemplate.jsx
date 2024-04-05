// eslint-disable-next-line no-unused-vars
import React from 'react'
import image1 from '../images/4193733.jpg'

function WebsiteTemplate() {
  return (
    <div>
     <div className="relative  font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10 h-[472px]">
      <img src={image1} alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
      <div className="min-h-[300px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="md:text-5xl text-3xl font-bold mb-8">Startup Website <span className="text-yellow-500">Template</span></h2>
        <p className="text-lg text-center text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
        <a href="javascript:void(0)"
          className="mt-10 text-base font-semibold py-2.5 px-6 border-2 border-yellow-600 hover:border-yellow-400 bg-transparent text-yellow-500 rounded">
          Get started
        </a>
      </div>
    </div>
    </div>
  )
}

export default WebsiteTemplate
