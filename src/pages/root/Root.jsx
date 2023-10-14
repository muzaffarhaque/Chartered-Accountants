import React from 'react'
import { Footer, Header } from '../../components'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className='bg-white'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
