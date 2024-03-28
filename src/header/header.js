import React from 'react'
import HeaderNav from "./header-nav"
import HeaderSlider from './header-slider'


export default function Header(){
  return (
    <div className='header headerBackground'>
      <HeaderNav />
      <HeaderSlider />
    </div>
  )
}