// eslint-disable-next-line no-unused-vars
import React from "react";
import Image1 from '../images/woman-lotus-position-using-singing-bowl-indoors-relaxation-meditation-sound-therapy-alternative-medicine-buddhist-healing-practices_217593-23904.jpg'
import Image2 from '../images/horoscope-astrology-collage.jpg'
import Image3 from '../images/low-section-therapist-meditating-while-performing-music-therapy-spa_1048944-13317879.avif'
import styled from "styled-components";

let data = [
  {
    img: Image1 ,
    title :'  Kerala Retreat 2025',
    des: '  Organised By: Yoga Vidya Foundation, Kochi and Calicut',
    date:" Date:24 Jan (Fri)-26 Jan (Sun)",
    more:"More Detail..."
  }, 
  {
    img: Image2 ,
    title :'  Kerala Retreat 2025',
    des: '  Organised By: Yoga Vidya Foundation, Kochi and Calicut',
    date:" Date:24 Jan (Fri)-26 Jan (Sun)",
    more:"More Detail..."
  },
  {
    img: Image3 ,
    title :'  Kerala Retreat 2025',
    des: '  Organised By: Yoga Vidya Foundation, Kochi and Calicut',
    date:" Date:24 Jan (Fri)-26 Jan (Sun)",
    more:"More Detail..."
  },
]

function CardSection() {
  return (
  <DIV>
    <section className="cart_outer bg-[#faf6f3]  p-5 w-full ">
      <div className="">
        <div className="flex flex-wrap align-middle">
          <div className="col-12 col-sm-8">
            <h3 className="mb-[40px] font-semibold text-wrap " style={{fontSize: '30px'}}>
              A Glimpse of Upcoming Courses/Events
            </h3>
          </div>
          <div className="col-12 col-span-4">
            <div className="w-[100%] flex justify-center  " >
              {/* <span className="fw-semibold"style={{justifyContent:'end'}}>EXPLORE ALL</span> */}
            </div>
          </div>
        </div>
        <div className="grid ssm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" >
        
        {data && data.map((item) => <>
          <div className="item    flex flex-col  self-start rounded-lg bg-white text-black shadow-secondary-1 dark:bg-black dark:text-white sm:shrink-0 sm:grow sm:basis-0 ">
            <a href="#!">
              <img
                className="rounded-t-lg w-[100%] object-cover  h-[250px]"  
                src={item.img}
                alt="Hollywood Sign on The Hill"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-3 text-xl font-semibold leading-tight font-serif ">
                Kerala Retreat 2025
              </h5>
              <p className="mb-4 text-base">
               Organised By: Yoga Vidya Foundation, Kochi and Calicut
              </p>

              <p className="font-semibold mb-2">Date:24 Jan (Fri)-26 Jan (Sun)</p>
              
              <hr></hr>
              <p className="font-medium text-sm mt-1 cursor-pointer"><a href="#">More Detail...</a> </p>
            </div>
          </div>
        </>)}


        </div>
      </div>
    </section>


    
    </DIV>
  );
}

export default CardSection;

const DIV = styled.div`
  
  @media only screen and (max-width: 768px) {
  /* Styles for devices up to 768px wide */
.cart_outer{
  width: 100%;
 
  flex-wrap:wrap
}
.item{
  width: 100%;
}
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  /* Styles for devices between 768px and 1024px wide */
}

@media only screen and (min-width: 1024px) {
  /* Styles for devices larger than 1024px wide */
}
`


// <div class="bg-gray-50 px-4 py-10 font-[sans-serif]">
//       <div class="max-w-7xl max-md:max-w-lg mx-auto">
//         <h2 class="text-3xl font-extrabold text-[#333]">LATEST BLOGS</h2>
//         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//           <div class="bg-white cursor-pointer rounded overflow-hidden group">
//             <div class="relative overflow-hidden">
//               <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" class="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
//               <div class="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">June 10, 2023</div>
//             </div>
//             <div class="p-6">
//               <h3 class="text-xl font-bold text-[#333]">A Guide to Igniting Your Imagination</h3>
//               <button type="button" class="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Read More</button>
//             </div>
//           </div>
//           <div class="bg-white cursor-pointer rounded overflow-hidden group">
//             <div class="relative overflow-hidden">
//               <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" class="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
//               <div class="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">April 20, 2023</div>
//             </div>
//             <div class="p-6">
//               <h3 class="text-xl font-bold text-[#333]">Hacks to Supercharge Your Day</h3>
//               <button type="button" class="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Read More</button>
//             </div>
//           </div>
//           <div class="bg-white cursor-pointer rounded overflow-hidden group">
//             <div class="relative overflow-hidden">
//               <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" class="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
//               <div class="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">August 16, 2023</div>
//             </div>
//             <div class="p-6">
//               <h3 class="text-xl font-bold text-[#333]">Trends and Predictions</h3>
//               <button type="button" class="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Read More</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>