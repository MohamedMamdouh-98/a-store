import React from 'react'
import './Testimonials.css'

import ProfilePic1 from '../../images/profile1.jpg'
import ProfilePic2 from '../../images/profile2.jpg'
import ProfilePic3 from '../../images/profile3.jpg'
import ProfilePic4 from '../../images/profile4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';



function Testimonials() {
    const clients = [
        {
            img: ProfilePic1,
            review:'Lorem ipsum dolor elit. In quis tempus ipsum, at accumsan nisl. Nullam tincidunt quis orci in interdum. Nulla nisi neque, euismod vitae dictum at, feugiat sed velit. In bibendum tortor non ullamcorper placerat. Nam eget tristique elit. Duis quis magna pharetra, dapibus quam vitae, viverra urna. Aliquam accumsan tortor vitae eros' ,
        },

        {
            img: ProfilePic2,
            review:'Lorem ipsum dolor elit. In quis tempus ipsum, at accumsan nisl. Nullam tincidunt quis orci in interdum. Nulla nisi neque, euismod vitae dictum at, feugiat sed velit. In bibendum tortor non ullamcorper placerat. Nam eget tristique elit. Duis quis magna pharetra, dapibus quam vitae, viverra urna. Aliquam accumsan tortor vitae eros' ,
        },

        {
            img: ProfilePic3,
            review:'Lorem ipsum dolor elit. In quis tempus ipsum, at accumsan nisl. Nullam tincidunt quis orci in interdum. Nulla nisi neque, euismod vitae dictum at, feugiat sed velit. In bibendum tortor non ullamcorper placerat. Nam eget tristique elit. Duis quis magna pharetra, dapibus quam vitae, viverra urna. Aliquam accumsan tortor vitae eros' ,
        },

        {
            img: ProfilePic4,
            review:'Lorem ipsum dolor elit. In quis tempus ipsum, at accumsan nisl. Nullam tincidunt quis orci in interdum. Nulla nisi neque, euismod vitae dictum at, feugiat sed velit. In bibendum tortor non ullamcorper placerat. Nam eget tristique elit. Duis quis magna pharetra, dapibus quam vitae, viverra urna. Aliquam accumsan tortor vitae eros' ,
        },

    ]

    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>clients always get</span> 
                <span>exceptional work</span> 
                <span>from me...</span> 
                <div className="blur t-blur1" style={{background:'#abf1ff94'}}></div>
                <div className="blur t-blur2" style={{background: 'var(--purple)'}}></div>
            </div>
            {/*slider*/}
            <Swiper
            modules={[ Pagination ]}
            slidesPerView = {1}
            pagination={{ clickable: true }}
            
            >
                {clients.map((clint, index)=>{
                    return (
                            <SwiperSlide key={index}>
                                <div className="Testimonial">
                                    <img src={clint.img}/>
                                    <span>{clint.review}</span>
                                </div>
                            </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonials