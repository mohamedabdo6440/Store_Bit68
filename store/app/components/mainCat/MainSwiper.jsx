'use client'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './swiper.css'

const MainSwiper = ({ category }) => {

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    375: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {
                    category && category.map((cat, i) => {
                        return (

                            <SwiperSlide key={cat.id} style={{ backgroundColor: `${cat.sale_percentage ? '#2d2f7d' : ''}` }} >
                                <img src={cat.image} alt={cat.name} className="w-75 h-75" />
                                <div className="image_title">{cat.name}</div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

        </>
    )
}

export default MainSwiper
