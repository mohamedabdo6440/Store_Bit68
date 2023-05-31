import Link from 'next/link'
import React from 'react'

const ButNav = () => {
    return (
        <nav className='but_nav'>
            <ul className='but_nav_links'>
                <li><Link href='/'>Top Deals</Link></li>
                <li><Link href='/'>Deals of the Day</Link></li>
                <li><Link href='/'>Men</Link></li>
                <li><Link href='/'>Women</Link></li>
                <li><Link href='/'>Kids</Link></li>
                <li><Link href='/'>New</Link></li>
                <li><Link href='/'>Brands</Link></li>
                <li><Link href='/'>Sports</Link></li>
                <li><Link href='/'>Accessories</Link></li>
                <li><Link style={{ color: "#FFD800" }} href='/'>Sale</Link></li>
            </ul>
        </nav>
    )
}

export default ButNav
