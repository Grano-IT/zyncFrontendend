import React from 'react'
import headermainimg from '../../assets/headermain.png'
import {Link} from 'react-router-dom'

const Mainsection = () => {
  return (
    <>
      <div className="main__part container ">
        <div className="row pb-4 ">
            <div className="col-lg-6  d-flex align-items-center justify-content-center">
                 <div className="text__part pt-lg-0 pt-md-0 pt-5">
                   <div className="main__text">
                    <h1>A <span style={{color:'blue'}}>Unique</span> Approach to Innovative IT Solutions </h1>
                   </div>
                   <div className="mimi__content">
                    <p>Our IT company takes a fresh and dynamic approach to delivering cutting-edge technology solutions.</p>
                   </div>
                   <div className="main__sec_button">
                     <Link to={'/Signup'}>  <button >
                      Register
                    </button> </Link>
                   </div>
                 </div>
            </div>
            <div className="col-lg-6   ">
              <div className="img__part mt-lg-0 mt-5">
                <img src={headermainimg} alt=""  className=''/>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Mainsection
