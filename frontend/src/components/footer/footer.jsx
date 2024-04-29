import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <div className='footer-content-left-top'>
                   <img src={assets.logo} alt='assets.logo' />
                   <p>Food Delivery</p>
                   <div className='footer-content-left-top-social'>
                       <img src={assets.facebook_icon} alt='assets.facebook_icon' />
                       <img src={assets.twitter_icon} alt='assets.twitter_icon' />
                       <img src={assets.linkedin_icon} alt='assets.linkedin_icon' />
   
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>Call us: 123-456-7890</li>
                        <li>Email us: 8wOZ3@example.com</li>
                        <li>Address: 1234 Street Name, City, State 12345</li>
                        <li>Hours: Monday - Friday: 9am - 5pm</li>
                    </ul>   
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright © 2022. All Rights Reserved</p>

        </div>
      
    </div>
    </div>
    )
    }


export default footer
