'use client'

import React, { Fragment, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../items.css";

import { Pagination, Navigation } from "swiper";
import axios from "axios";

export default function SwiperItems({ items }) {

    const [swiperRef, setSwiperRef] = useState(false);
    const [itemsData, setItems] = useState(items.results)
    const [PrevReq, setPrevReq] = useState(null)
    const [NextReq, setNextReq] = useState(null)

    useEffect(() => {
        setNextReq(items.next);
        setPrevReq(items.previous);
    }, [swiperRef])


    const handleClickNext = () => {
        NextReq !== null && axios.get(`${NextReq}`).then((res) => {
            setItems(res.data.results)
            setNextReq(res.data.next);
            setPrevReq(res.data.previous);
        })
    }
    const handleClickPrev = () => {
        PrevReq !== null && axios.get(`${PrevReq}`).then((res) => {
            setItems(res.data.results)
            setPrevReq(res.data.previous);
            setNextReq(res.data.next);
        })
    }

    return (
        <div className="parent_swiper">
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper mt-5"

            >

                {
                    itemsData && itemsData.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <div className="card_item">
                                    <div className="image_item">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="content_item">
                                        <span className="name_item ">{item.name}</span><br />
                                        <span className="price_item ">EGP {item.price_before_sale}<span className="ps-1 save_peice">save {item.price_after_sale}</span></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }


            </Swiper>
            <p className="append-buttons">
                <button
                    onClick={() => PrevReq !== null ? handleClickPrev() : alert("There is no other data")} className="Previous_items"
                    style={{
                        backgroundColor: "#2d2f78",
                        border: "1px solid #2d2f78;",
                        borderRadius: "8px;",
                        color: " white;",
                        fontFamily: "cursive;",
                    }}
                >
                    {'<< '}Previous
                </button>

                <button
                    onClick={() => NextReq !== null ? handleClickNext() : alert("There is no other data")} className="Next_items"
                    style={{
                        backgroundColor: "#121212;",
                        border: "1px solid #121212;",
                        borderRadius: "8px;",
                        color: " white;",
                        fontFamily: "cursive;",
                    }}
                >
                    Next {'>>'}
                </button>
            </p>

        </div>
    );
}