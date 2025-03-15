import React from 'react'
import './Whatwedo.css'
import design from '../../assets/whatwedo/web-design.png'
import webdevlopment from '../../assets/whatwedo/app-development.png'
import appdev from '../../assets/whatwedo/appdev.png'
import softwaredev from '../../assets/whatwedo/saas.png'
import seo from '../../assets/whatwedo/seo.png'
import manage from '../../assets/whatwedo/coordinator.png'

const Whatwedo = () => {
  return (
    <>
    {/* -------------------  What we Do ----------------------  */}
    <section>

        <div className="our__service__part ">
            <div className="what__we__title">
                       <div className="what__wedo__title__1 whychoose_us_title text-center">
                      <span> What We Do </span> <br />
                         <span>Our Services</span> 
                       </div>
            </div>

         
              <div className="our__service__section  justify-content-center  container mt-5">

                <div className=" d-flex justify-content-center row ">
                    
                   <div className="service__part text-center d-flex what-we-box-1 flex-column align-items-center col-lg-4 col-md-4 col-sm-6 pt-3">
                       <img src={design} alt=""  />
                       <span className='pb-2'>Web Design</span>
                       <div className="what__we__do_text  ">
                       
                       <span>
                       Crafting visually stunning, user-friendly websites with responsive design
                       </span>
                       </div>
                   </div>


                   <div className="service__part text-center d-flex what-we-box-2 flex-column align-items-center col-lg-4 col-md-4 col-sm-6  pt-3" >
                   <img src={webdevlopment} alt=""  />

                   <span className='pb-2'>Web Development</span>
                       <div className="what__we__do_text ">
                       <span>
                       Crafting responsive, high-performance websites with seamless user experiences and modern design
                       </span>
                       </div>
                   </div>



                   <div className="service__part text-center d-flex what-we-box-3 flex-column col-md-4 align-items-center col-lg-4 col-sm-6  pt-3" >
                     
                   <img src={appdev} alt=""  />
                   <span className='pb-2'>App Development</span>
                       <div className="what__we__do_text ">
                       <span>
                       Creating intuitive, high-performance mobile apps with seamless functionality and modern design
                       </span>
                       </div>   
                   </div>


              
                        
                   <div className="service__part text-center what-we-box-4 d-flex col-lg-4 col-md-4  flex-column align-items-center col-sm-6 pt-3">

                   <img src={softwaredev} alt=""  />
                   <span className='pb-2'>Softwares</span>
                   <div className="what__we__do_text ">
                       <span>
                       Developing powerful, scalable software solutions with seamless performance and user-friendly design 
                       </span>
                       </div>   
                                

                   </div>

                   <div className="service__part text-center what-we-box-5 d-flex col-lg-4 col-md-4 flex-column align-items-center col-sm-6   pt-3" >

                     <img src={seo} alt=""  />
                     <span className='pb-2'>Seo</span>
                   <div className="what__we__do_text ">
                       <span>
                       Optimizing websites for higher rankings, better visibility, and increased organic traffic
                       </span>
                       </div>   

                   </div>


                   <div className="service__part text-center what-we-box-6 d-flex col-lg-4 col-md-4 col-sm-6  flex-column align-items-center  pt-3" >

                   <img src={ manage} alt=""  />
                   <span className='pb-2'>Management</span>
                   <div className="what__we__do_text ">
                       <span>
                       Streamlining processes for efficient, strategic, and goal-driven business management
                      </span>
                       </div>   



                   </div>
                        
                    </div>

              </div>
        </div>

    </section>
      
    </>
  )
}

export default Whatwedo
