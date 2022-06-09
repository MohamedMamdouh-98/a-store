import React from 'react'
import './Portfolio.css'
import Sidebar from '../../images/sidebar.png'
import Ecommerce from '../../images/ecommerce.png'
import Hoc from '../../images/hoc.png'
import Musicapp from '../../images/musicapp.png'
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

function Portfolio() {
    return (
        <div className="portfolio">
            <span>recent projects</span>
            <span>portfolio</span>
            {/* Swiper */}
            <Swiper
            spaceBetween={50}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={Sidebar}/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Ecommerce}/>
                </SwiperSlide>

            <SwiperSlide>
                <img src={Hoc}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Musicapp}/>
            </SwiperSlide>
            
            
            
            </Swiper>
        </div>
    )
}

export default Portfolio