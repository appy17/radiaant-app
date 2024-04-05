// eslint-disable-next-line no-unused-vars
import React from 'react'
import { CarouselCustomNavigation } from '../CarouselCustomNavigation'
import Stats from './Stats'
import VideoPart from './VideoPart'
import Aspect from './Aspect'
import Middlepart from './Middlepart'
import Online from './Online'
// import Testimonial from './Testimonial'
import CheckoutStore from './CheckoutStore'
import WebsiteTemplate from './WebsiteTemplate'
import CardSection from './CardSection'
import Contactus from './Contactus'



function Home() {
  return (
    <div>
     
     <CarouselCustomNavigation />
     <Stats />
     <VideoPart />
     <Aspect/>
     <Middlepart />
     <Online />
     {/* <Testimonial /> */}
     <CheckoutStore />
     <WebsiteTemplate />
     <CardSection />
     <Contactus />
  
     
      
    </div>
  )
}

export default Home
