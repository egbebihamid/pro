import React from 'react'
import pic1 from './images/world.jpeg'
import pic2 from './images/1,000.jpeg'
import pic3 from './images/footballer.jpeg'
import pic4 from './images/car.jpeg'
import pic5 from './images/road.jpeg'
import pic6 from './images/rainbow.jpeg'
import pic7 from './images/robbot.jpeg'
import pic8 from './images/i dont now.jpeg'
const images = () => {
    return (
        <div>
            <div class="grid">
              <div><img src={pic1} alt="" /></div>
              <div><img src={pic2} alt="" /></div>
              <div><img src={pic3} alt="" /></div>
              <div><img src={pic4} alt="" /></div>
              <div><img src={pic5} alt="" /></div>
              <div><img src={pic6} alt="" /></div>
              <div><img src={pic7} alt="" /></div>
              <div><img src={pic8} alt="" /></div>
            </div>
        </div>
    )
}

export default images
