import React from 'react';
import logo from "../assets/images/logo.svg"
import { Image } from 'react-bootstrap';
const footerData = [
  {
    name: ["Company", "Abut", "Pricing", "Careers"]
  }, {
    name: ["SOLUTIONS", "Search", "Contact", "Research"]
  }, {
    name: ["RESOURCES", "Blogs", "Forms"]
  }, 
  {
    name: ["SUPPORT", "Help", "Contact Us"]
  },
  {
    name: ["LEGAL", "Privacy", "Terms","Accessibility"]
  }
]
export default function Footer() {
  return (
    <footer className='footer-section'>
      <div className="container">
        <div className="footer-frame">
          <div className="first-box">
            <Image src={logo} alt="logo" />
            <p className='fs-14-13 fw-normal  text-white'>India's first platform dedicated to simplifying partner search</p>
          </div>
          {footerData?.map((item, i) => {
            return (
              <ul key={i} className='company-list'>{
                item.name?.map((element, i) => {
                  return (
                    <li key={i} className='fs-14-13  text-white'>{element}</li>
                  )
                })
              }
              </ul>
            )
          })
          }

        </div>
      </div>
    </footer>
  )
}
