import React from 'react'
import NewCart from './NewCart'
import './NewArrivals.css'

const NewArrivals = () => {
  return (
    <>
        <section className='newarrivals background'>
            <div className='container'>
        <div className='heading d_flex'>
              <div className='heading-left row f_flex'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' alt='newarrivals'/>
                <h2>New Arrivals</h2>
              </div>
              <div className='heading-right row'>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <NewCart/>
            </div>
        </section>
    </>
  )
}

export default NewArrivals