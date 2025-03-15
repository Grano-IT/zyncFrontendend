import React, { useEffect } from 'react'
import './herosection.css'
import AOS from "aos";

import Mainsection from './mainsection'



const Herosection = () => {


  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);


  return (
    <>
      <section>
         <div className="hero__section  ">
          
           <div className="header__main_part">
            <Mainsection/>
           </div>
         </div>
      </section>
    </>
  )
}

export default Herosection
