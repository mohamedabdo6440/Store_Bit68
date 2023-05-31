import React from 'react'
import style from './footer.module.css'
const Footer = () => {
    return (
        <footer className={`${style.footer} card w-100`}>
            <div className='container mt-4 mb-4'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='d-flex flex-column'>
                            <h4 className='fw-bold'>Active Trending</h4>
                            <p>Men</p>
                            <p>Women</p>
                            <p>Kids</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='d-flex flex-column '>
                            <h4 className='fw-bold'>About Us</h4>
                            <p>About Company</p>
                            <p>Connect Us</p>
                            <p>Our Branches</p>
                        </div>
                    </div>
                    <div className='col-md-4'></div>
                </div>
                <hr />
                <div className='container text-center'>
                    <p>Copyright © 2022 All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
