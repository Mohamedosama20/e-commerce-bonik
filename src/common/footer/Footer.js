import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
        <footer>
            <div className="container grid2">
                <div className="box">
                <h1>Bonik</h1>
                <p>Created By ©Mohamed Osama 2023</p>
                <div className='icon d_flex'>
                    <div className='d_flex img'>
                        <i className='fa-brands fa-google-play'></i> 
                        <span>Google Play</span>
                    </div>
                    <div className='d_flex img'>
                        <i className='fa-brands fa-app-store-ios'></i> 
                        <span>App Store</span>
                    </div>
                </div>
                </div>
                <div className="box">
                    <h2>About Us</h2>
                    <ul>
                        <li>Careers</li>
                        <li>Our Stores</li>
                        <li>Our Cares</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Customer Service</h2>
                    <ul>
                        <li>Help Center</li>
                        <li>How to Buy</li>
                        <li>Track Your Order</li>
                        <li>Returns & Refunds</li>
                        <li>Corporate & Bulk Purchasing</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Connect With Us</h2>
                    <ul>
                        <li>Created By ©Mohamed Osama</li>
                        <li>Email: Mohamedosama667@yahoo.com</li>
                        <li>Phone: +20 111 8788 751</li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer