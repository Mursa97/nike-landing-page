import React from 'react'
import './Featured.css'
import FeaturedCard from '../FeaturedCard/FeaturedCard'

const Featured = () => {

  const shoes = [
    {
      title: 'Air Jordan II CMFT LOW',
      price: '90',
      img: 'images/cmft-low.png'
    },
    {
      title: 'Lebron Witness 7',
      price: '100',
      img: 'images/lebron-witness-7.png'
    },
    {
      title: 'Pegasus 39 Turbo',
      price: '130',
      img: 'images/pegasus-39-turbo.png'
    }
  ]

  return (
    <div className="container featured-bg">
        <div className="featured-container">

            <h2>Featured Products</h2>
            <h1>All time best</h1>

            <div className="card-grid">
                {
                  shoes.map(shoe => <FeaturedCard title={shoe.title} 
                                                  price={shoe.price}
                                                  img={shoe.img}
                                                  key={shoe.title}   />)
                }
            </div>

        </div>
    </div>
  )
}

export default Featured