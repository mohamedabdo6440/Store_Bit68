import React from 'react'

const Carts = ({ Popup }) => {
    return (
        <div className={`${Popup ? 'Popup_cart' : 'd-none'}`}>
            <div className={`${Popup ? 'container' : 'd-none'}`}>
                <div className={`${Popup ? 'cart_title' : 'd-none'}`} >
                    <h4 className={`${Popup ? 'mt-4' : 'd-none'}`} >Shopping Cart (2)</h4>
                </div>
                <div className={`${Popup ? 'cart_content_img d-flex justify-content-around mb-5' : "d-none"}`}>
                    <img className={`${Popup ? '' : 'd-none'}`} src='/images/page.png' alt='' />
                    <div className={`${Popup ? 'cart_content' : 'd-none'}`}>
                        <p className={`${Popup ? '' : 'd-none'}`}>Nike Jordan kids Air Jorda</p>
                        <p className={`${Popup ? '' : 'd-none'}`}><span className='span_cart_content'>Price:</span>EGP 1500</p>
                        <p className={`${Popup ? '' : 'd-none'}`}><span className='span_cart_content'>Size:</span>XL</p>
                        <p className={`${Popup ? '' : 'd-none'}`}><span className='span_cart_content'>Color:</span>White</p>
                        <p className={`${Popup ? 'numberOfCart' : 'd-none'}`}><span style={{ fontSize: "40px", paddingRight: "20px" }}>-</span><span style={{ fontSize: "25px", paddingRight: "20px" }}>1</span><span style={{ fontSize: "30px", paddingRight: "20px" }}>+</span></p>
                    </div>
                </div>
                <div className={`${Popup ? 'container' : 'd-none'}`}>
                    <button style={{ backgroundColor: "#2d2f87", color: "#fff" }} className={`${Popup ? 'btn btn w-100 mt-5' : 'd-none'}`} >Complate the Purchase</button>
                    <button className={`${Popup ? 'btn btn-outline-primary w-100 mt-2' : 'd-none'}`} >View cart</button>
                </div>
            </div>
        </div>
    )
}

export default Carts
