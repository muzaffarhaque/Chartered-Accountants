import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import calendar from '../../assets/images/calendar-2-line.svg'
import start from '../../assets/images/star-fill.svg'
import RImage from '../../assets/images/right-details-image.png'
import BackArrow from '../../assets/images/back-arrow.png'
import defaultImage from '../../assets/images/defaultImage.jpg'
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import featchedData from '../../server/Api';

export default function Details() {
  const params = useParams()
  const [user, setUser] = useState(null);
  async function getData() {
    const res = await featchedData();
    if (res.status == 200) {
      let findObj = res.data.data?.find((item) => item.name === params.name);

      if (findObj ?? false) {
        setUser(findObj);
        console.log(findObj)
      }


    } else {
      toast.error(res.data.data.massage)
    }

  }
  useEffect(() => {
    getData()
  }, [])

  return (user === null ? <div className='home-section-frame w-100 vh-100 d-flex align-items-center justify-content-center'>
    <h1> User Name <span className='fw-bolder text-primary pb-2 border-3 border-bottom border-primary'>{params.name}</span>  is Not Found</h1>
  </div> :
    <div className='home-section-frame'>
      <section className='first-details-section'>
        <div className="container position-relative">
      <Image src={BackArrow} alt="icon star" onClick={()=>window.history.back()} className='bac-arrow'/>
          <div className="d-flex details-main-wrapper">
            <div className="left-details-part">
              <h4 className='fs-35-24 fw-bold'>{user?.name || "Michael Jackson"}</h4>
              <p className='fs-18-14 fw-normal'>{user?.intro}</p>
              <div className="reating-frame d-flex">
                <Image src={start} alt="icon star" />
                <span className='fs-18-14 fw-bold blue-007'>&nbsp; 4.8 &nbsp;</span>
                {`(${user?.reviewCount})`}
              </div>
              <div className="devers-job-box">
                <div className="task-job fs-20-16  fw-normal d-flex align-items-center justify-content-between">
                  <span>{user?.taskComplexity}</span>
                  <span className='fw-bold'>{user?.price}</span>
                </div>
                <p className='fs-20-16  fw-normal mt-3 mb-2'><Image src={calendar} alt="icon star" />
                  &nbsp;{user?.deliveryTime}
                </p>
                <div className="d-flex align-items-center mb-wrap justify-content-between gap-3 mt-4">
                  <button className='primary-btn w-51'>Request Proposal</button>
                  <button className='host-btn  w-51'>Chat with me</button>
                </div>
              </div>
              <div className="what-people-syas">
                <h4 className='fs-35-24 fw-bold'>What people say?</h4>
                <p className='fs-18-14 fw-normal  mt-3'>{user?.testimonial.text}.</p>
              </div>
            </div>
            <div className="right-details-part">
              <div className="image-details-frame">
                <object data={user?.image} width="100%" height={300}  className='object-frame '>
                  <Image src={defaultImage} alt='image' />
                </object>
              </div>
              <h4 className='fs-35-24 fw-bold my-3'>About {user?.name}</h4>
              <div
                className="d-flex align-items-center justify-content-between gap-3 my-4 w-100">
                <p className='fs-18-14 fw-normal mb-0 black-999'>FROM
                  <br /><br />
                  <span className=' fw-semibold text-black'>{user?.about.from}</span>
                </p>
                <p className='fs-18-14 fw-normal mb-0 black-999'>PARTNER SINCE
                  <br /><br />
                  <span className=' fw-semibold text-black'>{user?.about.partnerSince}</span>
                </p>
                <p className='fs-18-14 fw-normal mb-0 black-999'>AVERAGE RESPONSE TIME
                  <br /><br />
                  <span className=' fw-semibold text-black'>{user?.about.averageResponseTime}</span>
                </p>

              </div>
              <div className="">
                <p className='fs-18-14 fw-normal mb-0 black-999'>ABOUT</p>
                <p className='fs-20-16  fw-normal mt-2'>{user?.about.description}</p>
              </div>

              <div className=" d-flex mb-wrap  gap-1">
                <div className="about-list mb-full">
                  <p className='fs-18-14 fw-normal black-999 '>ABOUT</p>
                  <ul>
                    {
                      user?.about.services?.map((item,i)=>{
                        return(
                          <li key={i}>{item}</li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="about-list mb-full">
                  <p className='fs-18-14 fw-normal  black-999'>WHY ME?</p>
                  <ul>
                     {
                      user?.about.benefits?.map((item,i)=>{
                        return(
                          <li key={i}>{item}</li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="recommented-frame">
        <div className="container">
          <h4 className='fs-35-24 fw-bold my-3'>Recommended for you</h4>

          <div className="recomment-slider">
            {user?.about.services.map((item, i) => {
              return (
                <div key={i} className="recomment-card">
                  <div className="rec-image-frame">
                  <object data={user?.image} width="100%" height={260} className='object-frame2 '>
                  <Image src={defaultImage} alt='image' />
                </object>
                  </div>
                  <div className="rec-content-box">
                    <div
                      className="task-job fs-20-16  fw-normal d-flex align-items-center justify-content-between">
                      <span className='fw-bold'>{user?.name}</span>
                      <span className='fw-bold'>{user?.price}</span>
                    </div>
                    <p className='fs-18-18 fw-normal'>
                     {user?.intro}
                    </p>
                    <div className="reating-frame d-flex">
                      <Image src={start} alt="icon star" />
                      <span className='fs-18-14 fw-bold blue-007'>&nbsp; {user?.rating} &nbsp;</span>
                      {`(${user?.reviewCount})`}
                    </div>
                    <button className='primary-btn w-100 mt-4'>{item} services</button>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </section>
    </div>
  )
}
