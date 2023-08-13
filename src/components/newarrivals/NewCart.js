import React from 'react'
import NData from './NData'

const NewCart = () => {
    return (
      <>
        <div className='content grid product'>
          {NData.map((val, index) => {
            return (
              <div className='box' key={index}>
                <div className='img'>
                  <img src={val.cover} alt='newarrivals' />
                </div>
                <h4>{val.name}</h4>
                <span>${val.price}</span>
              </div>
            )
          })}
        </div>
      </>
    )
  }

export default NewCart