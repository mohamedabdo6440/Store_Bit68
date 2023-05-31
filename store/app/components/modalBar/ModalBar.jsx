'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const ModalBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <span variant="primary" onClick={handleShow}>
                <img src='/images/menu.png' alt='menu' />
            </span>

            <Offcanvas show={show} onHide={handleClose} className="w-75">
                <Offcanvas.Header closeButton >
                    <Offcanvas.Title className='d-flex '>
                        <div className='modal_image'>
                            <img src="/images/vuesax-bold-map.png" alt="Logo" />
                        </div>
                        <p className='modal_title mb-0 mt-1'>
                            Store Locator
                        </p>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <div className='container '>
                        <ul className='d-flex flex-column mb-3 p-0'>
                            <li className='pt-3'><Link className='text-decoration-none text-black' href='/'>Top Deals</Link></li>
                            <li className='pt-3'><Link className='text-decoration-none text-black' href='/'>Deals of the Day</Link></li>
                            <li className='pt-3'><Link className='text-decoration-none text-black' href='/'>Men</Link></li>
                            <li className='pt-3'><Link className='text-decoration-none text-black' href='/'>Women</Link></li>
                            <li className='pt-3'><Link className='text-decoration-none text-black' href='/'>Kids</Link></li>
                            <li className='pt-3'><Link className='text-decoration-none text-black' href='/'>New</Link></li>
                            <li className='pt-3'><Link className='text-decoration-none text-black' href='/'>Brands</Link></li>
                            <li className='pt-3'><Link className='text-decoration-none text-black' href='/'>Sports</Link></li>
                            <li className='pt-3'><Link className='text-decoration-none text-black' href='/'>Accessories</Link></li>
                            <li className='pt-3'><Link className='text-decoration-none text-black' style={{ color: "#FFD800" }} href='/'>Sale</Link></li>
                        </ul>
                        <p className='pt-5'><Link className='text-decoration-none' href='/'>العربيه</Link></p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default ModalBar
