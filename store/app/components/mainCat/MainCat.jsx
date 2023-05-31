'use client'
import React, { useEffect, useState } from 'react'
import style from './mainSwiper.module.css'
import MainSwiper from './MainSwiper'
import SwiperHeader from '../header/SwiperHeader'
import axios from 'axios'
const MainCat = ({ category }) => {

    const imageForBotSwiper = [
        {
            id: 1,
            image: "/images/mainCat7.png",
            imgHeight: "350px"
        },
        {
            id: 2,
            image: "/images/mainCat7.png",
            imgHeight: "350px"
        },
        {
            id: 3,
            image: "/images/mainCat7.png",
            imgHeight: "350px"
        },
    ]

    const [CategoryData, setCategoryData] = useState(category.results)
    const [PrevReq, setPrevReq] = useState(null)
    const [NextReq, setNextReq] = useState(null)

    useEffect(() => {
        setNextReq(category.next);
        setPrevReq(category.previous);
    }, [])


    const handleClickNext = () => {
        NextReq !== null && axios.get(`${NextReq}`).then((res) => {
            setCategoryData(res.data.results)
            setNextReq(res.data.next);
            setPrevReq(res.data.previous);
        })
    }
    const handleClickPrev = () => {
        PrevReq !== null && axios.get(`${PrevReq}`).then((res) => {
            setCategoryData(res.data.results)
            setPrevReq(res.data.previous);
            setNextReq(res.data.next);
        })
    }





    return (
        <section className=''>
            <div className='container mt-4 mb-4'>
                <p className='mainCat_title mt-4'>Main Categories</p>

            </div>
            <div className="container d-flex justify-content-center">
                <button
                    onClick={() => PrevReq !== null ? handleClickPrev() : alert("There is no other data")}
                    className="Previous_items me-2"
                >
                    {'<< '}Previous
                </button>

                <button
                    onClick={() => NextReq !== null ? handleClickNext() : alert("There is no other data")}
                    className="Next_items"
                >
                    Next {'>>'}
                </button>
            </div>
            <div className={`${style.mainSwiper_body} mainSwiper_resp`}>
                <MainSwiper category={CategoryData} />
            </div>
            <div className='mt-5 '>
                <div className='toggle_swiper'>
                    <SwiperHeader slider={imageForBotSwiper} />
                </div>
                <div className='toggle_image'>
                    <img src='/images/mainCat8.png' alt='ads' className='w-100 h-100' />
                </div>
            </div>
        </section>
    )
}

export default MainCat
