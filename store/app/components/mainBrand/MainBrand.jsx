'use client'

import React, { useEffect, useState } from 'react'
import style from '../mainCat/mainSwiper.module.css'
import MainSwiper from '../mainCat/MainSwiper'
import '../mainCat/swiper.css'
import axios from 'axios'

const MainBrand = ({ brand }) => {
    console.log(brand);


    const [bransData, setBransData] = useState(brand.results)
    const [PrevReq, setPrevReq] = useState(null)
    const [NextReq, setNextReq] = useState(null)

    useEffect(() => {
        setNextReq(brand.next);
        setPrevReq(brand.previous);
    }, [])


    const handleClickNext = () => {
        NextReq !== null && axios.get(`${NextReq}`).then((res) => {
            setBransData(res.data.results)
            setNextReq(res.data.next);
            setPrevReq(res.data.previous);
        })
    }
    const handleClickPrev = () => {
        PrevReq !== null && axios.get(`${PrevReq}`).then((res) => {
            setBransData(res.data.results)
            setPrevReq(res.data.previous);
            setNextReq(res.data.next);
        })
    }



    return (
        <section>
            <div className='container mb-4'>
                <p className='mainCat_title '>Popular Brands</p>
            </div>
            <div className="container d-flex justify-content-center mb-2">
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
                <MainSwiper category={bransData} />
            </div>
            <div className='mt-5 '>
                <div className='brand_image'>
                    <img src='/images/brandimage.png' alt='ads' className='w-100 h-100' />
                </div>
            </div>
        </section>
    )
}

export default MainBrand
