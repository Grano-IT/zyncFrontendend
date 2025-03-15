import React from 'react'
import './whychooseus.css'
import img1 from '../../assets/Glass icons.png'
import img2 from '../../assets/send.png'
import img3 from '../../assets/Paper.png'

const Whychooseus = () => {

 const card = [
    {
    id:1,
    img:img1,
    title:'Expertise & Innovation',
    content:'We specialize in cutting-edge technologies, ensuring that our solutions are efficient, scalable, and future-proof. Our team stays updated with the latest trends to deliver innovative IT solutions tailored to your needs.'
    
 },
    {
    id:2,
    img:img2,
    title:'Customized Solutions',
    content:'We understand that every business is unique. That’s why we offer custom software development, cloud solutions, and IT consulting that align with your specific goals. '
    
 },
    {
    id:3,
    img:img3,
    title:'24/7 Support & Maintenance',
    content:'Our dedicated support team is always available to assist you. We provide regular updates, maintenance, and troubleshooting to keep your systems running smoothly.'
    
 }

 ]


  return (
    <>
    {/* ---------------------  why choose us --------------  */}
      <section>
            <div className="why__choose_us_part d-flex justify-content-center ">
                    <div className="whychoose_us_title text-center">
                         <span className=''>WHY CHOOSE US</span> <br />
                         <span>Our values</span>
                    </div>
            </div>
            <div className="why__choose__card container ">
                <div className="why__card d-flex justify-content-center flex-wrap ">
                    {card.map((card)=>(
                        <div key={card.id} className="why__cards mx-auto text-center">
                            <img src={card.img} className='' alt="" />
                            <div className="why__card_heading" style={{fontWeight:'500',color:'#181B32'}}>
                                <span>{card.title}</span>
                            </div>
                            <div className="why__content" style={{color:'#666680'}}>
                                <p>{card.content}</p>
                            </div>
                        </div>
                   ) )}
                </div>
            </div>
      </section>
    </>
  )
}

export default Whychooseus
