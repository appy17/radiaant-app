import styled from "styled-components";
import {motion} from 'framer-motion'
function Stats() {
  return (
    <DIV>
      <div className="bg-[#faf6f3] p-8 min-h-[350px] flex items-center justify-center font-[sans-serif] text-[#333] border-2 relative  stats_outer">
        <div className="bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] lg:grid-cols-4 sm:grid-cols-2 sm:gap-24 gap-12 rounded-xl px-20 py-10 absolute top-[-20%] w-full lg:w-[1364px] flex flex-col lg:flex-row justify-between items-center border-2  z-2 stats">
          <div className="text-center align-center mb-8 lg:mb-0 grid_div">
            <h3 className="text-sm font-semibold">INDIA RETREATS 2025</h3>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-[20px] items-center">
            <div className="text-center mb-4 lg:mb-0">
              <h3 className="text-sm font-semibold">
                HIGHER COURSES<span className="text-gray-500 ml-2"></span>
              </h3>
            </div>
            <div className="text-center mb-4 lg:mb-0">
              <h3 className="text-sm font-semibold">
                CENTRES<span className="text-gray-500 ml-2"></span>
              </h3>
            </div>
            <div className="text-center mb-4 lg:mb-0">
              <h3 className="text-sm font-semibold">
                EVENTS<span className="text-gray-500 ml-2"></span>
              </h3>
            </div>
          </div>
            <button
              type="button"
              className="px-6 py-2 rounded bg-black text-white text-sm tracking-wider font-medium outline-none border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300"
            >
              Join
            </button>
        </div>
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-[52px]  stats_below ">
          <motion.div
          initial= {{
            opacity: 0,
            y:60
          }}

          whileInView={{
            opacity:1,
            y: 1
          }}
          transition={{
            duration: 1
          }}
          
          className="text-2xl leading-3xl mb-4 lg:mb-0 text-black-500 justify-spa m-auto justify-between w-[100%] ">
            <h3
               
            className="w-full lg:w-[500px] " style={{ fontWeight: "bold" }}>
              Grand Master Choa Kok Sui Pranic Healing & Arhatic Yoga School
            </h3>
          </motion.div>
          <motion.div 
           initial= {{
            opacity: 0,
            y:60
          }}

          whileInView={{
            opacity:1,
            y: 1
          }}
          transition={{
            duration: 1
          }}
          className="lg:col-12 lg:col-lg-5 lg:col-md-6 lg:offset-lg-1">
            
            <p className="text-sm lg:text-base" style={{ maxWidth: "680px" }}>
              Established in 1987, World Pranic Healing Foundation has been
              spreading Master Choa Kok Sui's teachings in various countries in
              Asia, Middle East, Africa, and Southeast Asia
            </p>
          </motion.div>
        </div>
      </div>
    </DIV>
  );
}

export default Stats;

const DIV = styled.div`
  @media only screen and (max-width: 768px) {
    /* Styles for devices up to 768px wide */

    .stats {
      /* margin-top: -240px; */
    }
    .stats_below {
      margin-top: 330px;
    }
    .grid_div {
      gap: 5px;

    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    /* Styles for devices between 768px and 1024px wide */
  }

  @media only screen and (min-width: 1024px) {
    /* Styles for devices larger than 1024px wide */
  }
`;
