// eslint-disable-next-line no-unused-vars
import React from 'react'
import image1 from "../images/rendering-wizard-controlling-magic.jpg";

function TwinHeart() {


  return (
    <div>
     <div className="relative h-[300px] text-center flex justify-center text-white">
          <img
            src={image1}
            alt="Banner Image"
            className="inset-0 w-full h-full object-cover"
          />
          <h2 className="md:text-8xl text-3xl font-bold mb-8 absolute top-[40%]">
            Twin Heart{" "}
          </h2>
        </div>
      
    </div>
  )
}

export default TwinHeart
