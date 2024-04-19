import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png' 

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
      <h1>Онцгой</h1>
      <h1>Танд санал болгох</h1>
      <p>Хамгийн их зарагдсан бүтээгдэхүүн</p>
      <button>Дэлгэрэнгүй</button>

      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
