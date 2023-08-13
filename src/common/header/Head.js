import React from 'react'
import './Header.css'

const Head = () => {
  return (
    <>
        <section className='head'>
            <div className='container d_flex'>
                <div className='row left'>
                    <i className='fa fa-phone'></i>
                    <label>+20 1118 788 751</label>
                    <i className='fa fa-envelope'></i>
                    <label>mohamedosama667@yahoo.com</label>
                </div>
                <div className='row right RText'>
                <label>Theme FAQ's</label>
                <label>Need Helps</label>
                <label>EN</label>
                <label>AR</label>
                </div>
            </div>
        </section>
    </>
  )
}

export default Head