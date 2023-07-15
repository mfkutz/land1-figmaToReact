import { useState } from 'react'
import './Topics.css'
import {

  group1,

  rectangle13,
  rectangle14,
  rectangle15,
  rectangle16,
  rectangle17,
  rectangle18,

} from '../../assets'


const Topics = () => {

  const [currentImage, setCurrentImage] = useState(rectangle14)

  return (
    <section id='topics' className='black'>
      <div className='wrapper'>
        <h2>What will you learn?</h2>
        <div className='content-container'>
          <ul className='topics-list'>
            <li onMouseEnter={() => setCurrentImage(rectangle14)}>What are frequencies?</li>
            <li onMouseEnter={() => setCurrentImage(rectangle13)}>Using the DAW</li>
            <li onMouseEnter={() => setCurrentImage(rectangle15)}>Vocals Processing</li>
            <li onMouseEnter={() => setCurrentImage(rectangle16)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(rectangle17)}>Mixing Console</li>
            <li onMouseEnter={() => setCurrentImage(rectangle18)}>Mastering</li>
          </ul>

          <div className='topic-image'>
            <img src={currentImage} alt="" />
          </div>
        </div>
        <img src={group1} alt="" className='bg-element-1' />
      </div>

    </section>
  )
}

export default Topics