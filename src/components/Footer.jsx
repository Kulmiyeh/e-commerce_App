import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    return (
        <>
        <div className='Footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-lg-5 col-12 ft-1'>
                <h3>E-Commerce</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
                <div className="footer-icons ">
                <i  class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
              <div className='col-md-6 col-lg-3 col-12 ft-2'>
              <h5>Quick Links</h5>
              <ul>
                
              <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Apple Phone</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/latestProducts">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            
                            
                        </ul>
              </div>
             
              <div className='col-md-6 col-lg-4 col-12 ft-3'>
              <h5>Contact Us</h5>
              <p><i class="fa-solid fa-phone"></i>  +25261566266</p>
              <p><i class="fa-solid fa-envelope"></i>  Emart@gmail.com</p>
              <p><i class="fa-solid fa-location-dot"></i>   Mogadisho,Somalia</p>
               
              </div>
              

            </div>
            <hr></hr>
            <div className="text-center">  <p>Developed By Group C</p></div>
          

          </div>
        </div>
         
       
      </>
    )
}

export default Footer;
