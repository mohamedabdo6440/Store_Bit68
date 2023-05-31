'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import SearchBar from '../searchBar/SearchBar'
import Carts from '../cart/Carts'
import ModalBar from '../modalBar/ModalBar'
const MedNav = () => {
    const [Popup, setPopup] = useState(false)

    const handleHoverOn = () => {
        setPopup(true)
    }
    const handleHoverOut = () => {
        setPopup(false)
    }


    return (
        <nav className='med_nav'>
            <div className='med_container'>
                <div className='logo'>
                    <div className='image_logo'>
                        <img src="/images/vuesax-bold-map.png" alt="Logo" />
                    </div>
                    <p className='text_logo'>
                        Store Locator
                    </p>
                </div>
                <div className='menu_icon'>
                    <ModalBar />
                </div>
                <SearchBar />

                <div className='medNav_icons'>
                    <p className='icons_text'>
                        العربيه
                    </p>
                    <p className='icons_image'>
                        <img src='/images/vuesax-bold-frame.png' alt='' />
                    </p>
                    <div className='icons_image_cart' onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOut} >
                        <img src='/images/Component262.png' alt='' />

                    </div>
                    <Carts Popup={Popup} />
                </div>
            </div>
        </nav>
    )
}

export default MedNav
