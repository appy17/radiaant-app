import { Carousel } from "@material-tailwind/react";
import image1 from './images/Energy-healing.webp'
import image2 from './images/12.jpg'
import image3 from './images/Week-In-Wellness-Athleta.jpg'
import styled from "styled-components";

export function CarouselCustomNavigation() {
  return (
    <DIV>
    <Carousel
      autoplay={true}
      loop={true}
      transition={{ duration: 2 }}
      className="lg:h-[600px] ssm:h-[400px] overflow-hidden  image_slider_div" // Added overflow-hidden here
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative ">
        <div className="image_div">
        <img
          src={image2}
          alt="image 1"
          className="h-full w-full object-cover" // Added object-cover to maintain aspect ratio
        />
        </div>
       
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white mb-20">
          <span className="block fw-medium mb-[10px] text-2xl">HEALING THROUGH THE UNIVERSAL</span>
          <h1 className="text-7xl font-bold mb-80 title_div" style={{textShadow: '0 0 50px rgba(0,0,0,.9)'}}>COSMIC ENERGY</h1>
        </div>
      </div>

      <div className="relative ">
      <div className="image_div">
      <img
          src={image1}
          alt="image 2"
          className="h-full w-full object-cover" // Added object-cover to maintain aspect ratio
        />
      </div>
       
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <span className="block fw-medium mb-[10px] text-2xl">Journey of the Self</span>
          <h1 className="text-7xl font-bold mb-80 title_div" style={{textShadow: '0 0 50px rgba(0,0,0,.9)'}}>PRANIC HEALING</h1>
        </div>
      </div>

      <div className="relative image_relative ">
        <div className="image_div">
        <img
          src={image3}
          alt="image 3"
          className="h-full w-full object-cover" // Added object-cover to maintain aspect ratio
        />
        </div>
       
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <span className="block fw-medium mb-[10px] text-2xl">MEDITATION ON</span>
          <h1 className="text-7xl font-bold mb-80 title_div" style={{textShadow: '0 0 50px rgba(0,0,0,.9)'}}>TWIN HEARTS</h1>
        </div>
      </div>
    </Carousel>
    </DIV>
  );
}


const DIV = styled.div`
  
  @media only screen and (max-width: 768px) {
  /* Styles for devices up to 768px wide */
 .image_slider_div{
  margin-top: 10px;

  height: 500px;
  
 }
 .title_div{

  margin-top: 200px;
  font-size: 50px;
 }
.image_div{
  height: 400px;
}

.image_relative{

}
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  /* Styles for devices between 768px and 1024px wide */
}

@media only screen and (min-width: 1024px) {
  /* Styles for devices larger than 1024px wide */
}
`
