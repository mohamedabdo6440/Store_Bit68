'use client'

import React, { useEffect, useState } from 'react'
import style from '../mainCat/mainSwiper.module.css'
import MainSwiper from '../mainCat/MainSwiper'
import '../mainCat/swiper.css'
import axios from 'axios'
import { handleClickNext, handleClickPrev } from '@/lib/Pagination'

const MainBrand = ({ brand }) => {
    const [bransData, setBransData] = useState(brand.results)
    const [PrevReq, setPrevReq] = useState(null)
    const [NextReq, setNextReq] = useState(null)

    useEffect(() => {
        setNextReq(brand.next);
        setPrevReq(brand.previous);
    }, [])
    return (
        <section>
            <div className='container mb-4'>
                <p className='mainCat_title '>Popular Brands</p>
            </div>
            <div className="container d-flex justify-content-center mb-2">
                <button
                    onClick={() => PrevReq !== null ? handleClickPrev(PrevReq, setBransData, setPrevReq, setNextReq) : alert("There is no other data")}
                    className="Previous_items me-2"
                >
                    {'<< '}Previous
                </button>

                <button
                    onClick={() => NextReq !== null ? handleClickNext(NextReq, setBransData, setNextReq, setPrevReq) : alert("There is no other data")}
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
