import React from 'react'
import SwiperItems from './swiperItems/SwiperItems'
import './items.css'
const ItemsSection = ({ items }) => {
    return (

        <div>
            <section className='parent_items m-auto'>
                <div className='container mt-4 mb-4'>
                    <p className='mainCat_title mt-4'> Featured items</p>
                </div>

                <SwiperItems items={items} />
            </section>
            <div className='cards_items'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-5'>
                        <div className="card mb-3">
                            <img src='/images/item_card2.png' alt='card1' className='w-100 h-100' />
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className="card mb-3">
                            <img src='/images/item_card1.png' alt='card1' className='w-100 h-100' />
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default ItemsSection
