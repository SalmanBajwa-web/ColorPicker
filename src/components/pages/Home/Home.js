import './Home.css'
import React from 'react'
import ColorBox from '../ColorBox/ColorBox'
import Nav from '../Nav/Nav'

export default function Home() {
  return (
    <div className='home'>
      <Nav/>
        <ColorBox/>
    </div>
  )
}
