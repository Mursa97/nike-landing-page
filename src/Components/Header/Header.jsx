import React from 'react'
import './Header.css'
import HeaderImg from '../../images/header-picture.png'

const Header = () => {

  return (
    <div className="container header-bg">

        <div className="header-container">


            <div className="left-side">
                <h2>It's all about red now</h2>
                <h1>Join the hype</h1>

                <img src={HeaderImg} className='resp-header-img' />

                <h4>Nike Air Force 1 Mid 07 LV8 Utility University Red</h4>
                <p className='price'>129.99 €</p>
                <button>
                  Buy Now<span className="material-icons">east</span>
                </button>
            </div>

            <div className="right-side">
                <img src={HeaderImg} alt="" />
            </div>


        </div>

    </div>
  )
}

export default Header