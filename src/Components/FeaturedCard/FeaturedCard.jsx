import React from 'react'
import './FeaturedCard.css'

const FeaturedCard = (props) => {
  return (
    <div className="featured-card-container">

        <img src={process.env.PUBLIC_URL + props.img} alt="" />

        <h4>{props.title}</h4>

        <div>
            <p className='price'>{props.price + '€'}</p>
            <button>
                Buy Now<span className="material-icons">east</span>
            </button>
        </div>

    </div>
  )
}

export default FeaturedCard