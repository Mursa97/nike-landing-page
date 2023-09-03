import React from 'react'
import './HeritageSection.css'
import HeritagePics from '../../images/heritage-picture.png'

const HeritageSection = () => {
  
  return (
    <div className='container'>
        <div className="heritage-container">
      
            <div className="left-side">
                <img src={HeritagePics} alt="" />
            </div>

            <div className="right-side">
                <h1>Nike Heritage</h1>
                <h2>We've got you covered</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium in at corporis, quasi ab veniam ad sapiente tempore ducimus omnis rem illo officiis maiores.</p>
                <button>
                  More<span className="material-icons">east</span>
                </button>
            </div>

        </div>
    </div>
  )
}

export default HeritageSection