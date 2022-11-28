import React from 'react'
import './nav.css'
import logo from '../Assets/logo.png'

const Nav = () => {
  return (
    <nav className='nav'>
      <img className='logo' src={logo}/>
        <ul className='ul'>
            <li><a href='#'>¿Que es el Proyecto Dalto?</a></li>
            <li><a href='#'>Participantes</a></li>
        </ul>
    </nav>
  )
}

export default Nav