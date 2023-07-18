import './Footer.css'
import { facebookLogo, instagramLogo, twitterLogo } from '../../assets'

const Footer = () => {
  return (
    <footer className='black'>
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Sound<span className='red'>DZing</span>
            </a>

            <div className='social-icons'>
              <a href="#">
                <img src={facebookLogo} alt="facebook" />
              </a>
              <a href="#">
                <img src={twitterLogo} alt="twitter" />
              </a>
              <a href="#">
                <img src={instagramLogo} alt="instagram" />
              </a>
            </div>
            <div className='copyright'>
              This website is designed by MFK Digital Ⓒ 2023
            </div>

          </div>

          <div className='links'>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className='links'>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#">sarasa@sarasa.com</a>
              </li>
              <li>
                <a href="#">+00 000000001</a>
              </li>
            </ul>
          </div>


          <div className='copyright-mobile'>
            This website is designed by MFK Digital Ⓒ 2023
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer