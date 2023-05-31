'use client'
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from './swiper.module.css'
import './swiperHeader.css'
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


const SwiperHeader = ({ slider }) => {

    const [SliderImage, setSliderImage] = useState([])

    useEffect(() => {
        const imagesAfterAddHeight = slider && slider.map((ele) => {
            return ({ ...ele, imgHeight: "350px" })
        })
        imagesAfterAddHeight && setSliderImage(imagesAfterAddHeight)
    }, [])
    return (
        <div className={`${style.header_swiper}`}>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >

                {
                    SliderImage && SliderImage.map((img) => {
                        return (
                            <SwiperSlide style={{ height: `${img.image === "/images/mainCat7.png" && img.imgHeight}` }} key={img.id}>
                                <div>
                                    <img src={img.image} />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>

    )
}

export default SwiperHeader
