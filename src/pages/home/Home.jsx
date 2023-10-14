import React, { useEffect, useState } from 'react';

import { Image } from 'react-bootstrap';
import trangle from '../../assets/images/trangle-hero.png'
import Picture from '../../assets/images/Picture.png'
import Picture1 from '../../assets/images/Picture1.png'
import Picture2 from '../../assets/images/Picture2.png'
import bgwave from '../../assets/images/joinUs-section-bg.png'
import allInOne from '../../assets/images/allInOne.png'
import search from '../../assets/images/search.svg'
import conect from '../../assets/images/conect.svg'
import research from '../../assets/images/research.svg'
import academy from '../../assets/images/academy.svg'
import heroGrop from '../../assets/images/hero-right-grop-image.png'
import featchedData from '../../server/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const featatur = [
  { img: search, text: `<span class="fw-bold">SEARCH</span> for vital company information` },
  { img: conect, text: `<span class="fw-bold">CONNECT</span> with the resources to meet your business needs` },
  { img: research, text: `<span class="fw-bold">RESEARCH</span>  and generate reports that drive growth ` },
  { img: academy, text: `<span class="fw-bold">ACADEMY</span> to give you the skills for success in your career` },
]
export default function Home() {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [getObj, setGetObj] = useState(null);
  const [allNames, setAllNames] = useState([]);
  const [suggest, setSuggest] = useState([]);
  const [search, setSearch] = useState("")
  async function getData() {
    const res = await featchedData();
    if (res.status == 200) {
      setData(res.data.data);
      let allName = res.data.data?.map((item) => item.name) || [];
      setAllNames(allName)
    } else {
      toast.error(res.data.data.massage)
    }

  }
  useEffect(() => {
    getData()
  }, [])


  function searchHandelr(e) {
    setSearch(e.target.value);
    setSuggest(allNames?.filter((item) => item.toLowerCase().includes(e.target.value.toLowerCase())));
  }
  const setSerchHandler = (value) => {
    setSearch(value);
    let findObj=data?.find((item)=>item.name===value);
    setGetObj(findObj)
    setSuggest([])
  
  }
  return (
    <div className='home-section-frame'>
      <section className='hero-section'>
        <Image src={trangle} alt="botomImage" className="hero-trangle-btm" />
        <div className="container">
          <div className="hero-section-wrapper">
            <div className="left-hero-content-box">
              <h2 className='fs-65-35 fw-bold'>
                Find  <span className='text-colorfull'> Partners</span>  (CAs) available online
              </h2>
              <p className='fs-20-18 fw-normal black-616'> <span className='fw-bold'>CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
              <div className=" position-relative">
                <div className="input-serarch-box ">
                  <input type="text" placeholder='Search by name' name='search' value={search} onChange={searchHandelr} className='search-input-box fs-14-13 fw-medium' />
                  <button className='primary-btn fs-16-14' onClick={()=>  navigate(`./details/${search}`,{state:getObj})}>Search</button>
                </div>
                {suggest.length > 0 && search &&
                  <ul className='suggestion-name'>
                    {suggest?.map((item, i) => {
                      return (
                        <li key={i} onClick={() => setSerchHandler(item)} className='fs-16-14 fw-normal'>{item}</li>
                      )
                    })
                    }
                  </ul>
                }
              </div>
            </div>
            <div className="right-hero-images-wrapper">
              {/* <Image src={heroGrop} alt='iamge' className='hero-right-group'/> */}
              <Image src={Picture1} alt='iamge' className='hero-right-image1' />
              <Image src={Picture2} alt='iamge' className='hero-right-image2' />
              <Image src={Picture} alt='iamge' className='hero-right-image3' />
            </div>
          </div>
        </div>
      </section>
      <div className="white-space"></div>
      {/* =========================== SECTION SECOND START =================== */}
      <section className='join-us-section' style={{ background: `url(${bgwave}) bottom no-repeat` }}>
        {/* <Image src={bgwave} className='bg-wave' alt='imag-baground'/> */}
        <div className="container">
          <h2 className='fs-65-35 fw-bold text-center mb-3'> Want to  <span className='text-colorfull'>Join</span> Us?</h2>
          <p className='fs-24-16 fw-normal text-center '> To remain with us, it is essential that you diligently follow the steps provided</p>
        </div>
        <div className="container-mb">
          <div className="join-us-card-wrapper">
            {
              [...Array(6)].map((item, i) => {
                return (
                  <div key={i} className="join-us-cards">
                    <div className="ranke-box fs-24-16 fw-bold text-white">
                      {i + 1}
                    </div>
                    <h6 className='fs-20-18 fw-bold mb-1 text-center'>Commencement of business </h6>
                    <p className='fs-16-14 fw-normal text-center'>Invested shareholders must confirm payment and office address </p>
                    <div className="date-fee-box">
                      <div className="dut-date-frame">
                        <h5 className='fs-18-14 fw-bold blue-007'>Due date</h5>
                        <p className='fs-16-14 fw-normal'>Within 180 days</p>
                      </div>
                      <div className="fees-frame">
                        <h5 className='fs-18-14 fw-bold orange-f66'>Due date</h5>
                        <p className='fs-16-14 fw-normal mb-1'><span className='fw-bold'>₹50,000</span>  for the company</p>
                        <p className='fs-16-14 fw-normal mb-0'><span className='fw-bold'> ₹1,000 </span> /day for directors</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </section>
      <div className="container bg-faf">
        <p className='fs-16-14 py-3 mb-0 fw-normal'>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 every day until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
      </div>
      {/* =========================== SECTION SECOND END =================== */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* ============================ SECTION THIRED START ======================== */}
      <section className='all-in-one-section'>
        <div className="container">
          <div className="all-inone-platform-wrapper">
            <div className="platform-content-box">
              <h2 className='fs-65-35 fw-bold  mb-2'> <span className='text-colorfull'>All-in-One </span>platform that Makes Easier </h2>
              <p className='fs-24-16 fw-normal'> We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
              <div className="platform-feature">
                {
                  featatur?.map((item,i) => {
                    return (
                      <div key={i} className="feature-box">
                        <Image src={item.img} alt='image' />
                        <p className='fs-20-18 fw-normal mb-0' dangerouslySetInnerHTML={{ __html: item.text }}></p>
                      </div>
                    )
                  })
                }

              </div>
            </div>
            <div className="all-in-one-right-image">
              <Image src={allInOne} alt='image' />
            </div>
          </div>
        </div>
      </section>
      {/* ============================ SECTION THIRED END ======================== */}
      {/*  */}
      {/*  */}
      {/*  */}

      {/*  */}
      {/*  */}
    </div>
  )
}
