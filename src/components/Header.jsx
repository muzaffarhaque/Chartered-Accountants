import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import botArrow from "../assets/images/bottom-blue-arrow.svg";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/hamburger.png";

export default function Header() {
  const [headerBackground, setHeaderBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && window.innerWidth > 820) {
        setHeaderBackground('white');
      } else {
        setHeaderBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`header-wrapper `} style={{backgroundColor:window.innerWidth > 820?headerBackground  : ''}}>
      <div className="container">
        <div className='header'>
          <input type="checkbox" name="so" id="so" className='d-none' />
          <label htmlFor="so" className='lable mb-show'>
            <Image src={hamburger} alt='icon-humburger' className='nev-bar-icon '/>
          </label>
          <ul className='nav-ul'>
            <li className=' fs-18-14 fw-bold desk-show'><Image src={logo} className='logo ' alt='image' /></li>
            <li className=' fs-18-14 fw-bold'>Solutions <Image src={botArrow} alt='image' /></li>
            <li className=' fs-18-14 fw-bold'>Features <Image src={botArrow} alt='image' /></li>
            <li className=' fs-18-14 fw-bold'>Blogs <Image src={botArrow} alt='image' /></li>
            <li className=' fs-18-14 fw-bold'>About <Image src={botArrow} alt='image' /></li>
          </ul>
          <div className="header-right-btn-frame d-flex align-items-center justify-content-center gap-3">
            <button className='host-btn fs-16-14'>Login</button>
            <button className='primary-btn fs-16-14'>Rigister</button>
          </div>
        </div>
      </div>
    </header>
  )
}
