import './Testimonials.css'
import { rectangle1, rectangle2, rectangle3 } from '../../assets'

const Testimonials = () => {
  return (
    <section id='testimonials' className='dark-gray'>

      <div className="wrapper">
        <h2>What our students say?</h2>

        <div className='content-container'>

          <div className='testimonial'>
            <img src={rectangle2} alt="" />
            <div className='reviewer-details'>
              <div className="name">Peter Adams</div>
              <div className="review">
                This is a great course. I got to learn a lot.
              </div>

            </div>
          </div>

          <div className='testimonial'>
            <img src={rectangle3} alt="" />
            <div className='reviewer-details'>
              <div className="name">Robert Fox</div>
              <div className="review">
                I got to learn a lot about Music Production with this course. Thanks :)
              </div>

            </div>
          </div>

          <div className='testimonial'>
            <img src={rectangle1} alt="" />
            <div className='reviewer-details'>
              <div className="name">Emily Smith</div>
              <div className="review">
                Awesome! Great job!!
              </div>

            </div>
          </div>


        </div>

      </div>
    </section>
  )
}

export default Testimonials