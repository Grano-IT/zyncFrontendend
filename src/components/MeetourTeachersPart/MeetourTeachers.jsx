import React from 'react'
import './MeetourTeachers.css'
import {  Navigation, Pagination } from 'swiper/modules'

import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css';



/////

import img1 from '../../assets/meetourteacher/Mask.png'
import flag1 from '../../assets/meetourteacher/Ellipse 325.png'
import img2 from '../../assets/meetourteacher/ourteacher2.png'
import flag2 from '../../assets/meetourteacher/flag2.png'

const MeetourTeachers = () => {

const data = [
    {
        id:1,
        Image:img1,
        name:'Christian Howard',
        flag:flag1,
         teacherlan:'Italian teacher'
    },
    {
        id:2,
        Image:img2,
        name:'Christian Howard',
        flag:flag2,
         teacherlan:'Italian teacher'
    },
    {
        id:3,
        Image:img1,
        name:'Christian Howard',
        flag:flag1,
         teacherlan:'Italian teacher'
    },
    {
        id:4,
        Image:img1,
        name:'Christian Howard',
        flag:flag1,
        teacherlan:'Italian teacher'
    }
]





  return (
    <>
      {/* --------------- meet our Teachers section ----------------  */}
      <section id='Meetourteam'>
         <div className="meet__our__teacher__part container">
            <div className="our__teacher__heading">
                <div className="title__1">
                    <span>key persons</span>
                </div>
                <div className="title__2">
                    <h2>Meet our teachers</h2>
                </div>
            </div>

            <div className="our__teacher__slider__part">

            {/* <Swiper
  className="our__teacher__sliders"
  modules={[Pagination]}
  spaceBetween={50}
  slidesPerView={1} // Default to 1 slide for all screen sizes
  loop={true}
  grabCursor={true}
  pagination={{ clickable: true }}
  // scrollbar={{ draggable: true }}
  breakpoints={{
    // When window width is >= 500px
    500: {
      slidesPerView: 1,
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 3,
    },
  }}
>
  {data?.map(({ id, Image, name, flag, teacherlan }) => (
    <SwiperSlide className="our__teacher__item" key={id}>
      <div className="thumb d-flex justify-content-center">
        <img src={Image} alt={name} style={{ borderRadius: "60px" }} className="mx-auto" />
      </div>
      <div className="Out__teacher__name mt-5">
        <span>{name}</span>
      </div>
      <span className="our__teacher__lan d-flex align-items-center pb-5">
        <img src={flag} alt="Flag" style={{ width: "34px", height: "34px", marginRight: "8px" }} />
        {teacherlan}
      </span>
    </SwiperSlide>
  ))}
</Swiper> */}





<Swiper
  className="our__teacher__sliders"
  modules={[Pagination, Navigation]} // Add Navigation and Pagination modules
  spaceBetween={50}
  slidesPerView={3} // Default to 3 slides for all screen sizes
  loop={true}
  grabCursor={true}
  pagination={{ clickable: true }}
  navigation={{ // Add navigation buttons
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
  breakpoints={{
    // When window width is >= 500px
    300: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1,
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 3,
    },
  }}
>
  {/* Navigation Buttons Container */}
  <div className="swiper__button" style={{ 
    position: 'absolute', 
    top: '0', 
    right: '0px', 
    zIndex: '99', 
   
  }}>
    <div className="swiper-button-next " style={{ cursor: 'pointer' }}></div>
    <div className="swiper-button-prev" style={{ cursor: 'pointer' }}></div>
  </div>

  {data?.map(({ id, Image, name, flag, teacherlan }) => (
    <SwiperSlide className="our__teacher__item mt-5 pt-5" key={id}>
      <div className="thumb d-flex justify-content-center">
        <img src={Image} alt={name} style={{ borderRadius: "60px" }} className="mx-auto" />
      </div>
      <div className="Out__teacher__name mt-5">
        <span>{name}</span>
      </div>
      <span className="our__teacher__lan d-flex align-items-center pb-5">
        <img src={flag} alt="Flag" style={{ width: "34px", height: "34px", marginRight: "8px" }} />
        {teacherlan}
      </span>
    </SwiperSlide>
  ))}
</Swiper>
            </div>
         </div>
      </section>
    </>
  )
}

export default MeetourTeachers





