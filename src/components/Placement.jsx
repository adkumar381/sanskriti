import React from 'react'
import './placement.css'
import recriuters from '../assets/recriuters.png'
function Placement() {
  return (
    <div>
        <div className="placement">
            <h2>Our Prominent Recruiters</h2>
            <div className="placement_image">
            <img src={recriuters} alt='' className='recriuters'/>
            </div>
        
        </div>
      
    </div>
  )
}

export default Placement
