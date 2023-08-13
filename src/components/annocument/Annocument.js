import React from 'react'

const Annocument = () => {
    const myStyle = {
        width: '30%',
        height : '340px'
    }
    const myStyle1 = {
        width: '68%',
        height : '340px'
    }
  return (
    <>
        <section className="announcement background">
            <div className="container d_flex">
                <div className="img" style={myStyle}>
                    <img src='./images/banner-1.png' alt="banner-1" width='100%' height='100%'/>
                </div>
                <div className="img myStyle2" style={myStyle1}>
                    <img src='./images/banner-2.png' alt="banner-1" width='100%' height='100%'/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Annocument