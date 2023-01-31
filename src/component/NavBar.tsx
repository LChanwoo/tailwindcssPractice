import React from 'react'
import { Link, } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='h-24 items-center justify-end relative w-screen'>
      <ul className='h-full flex flex-row items-center justify-end pr-4'>
        <li>
          <Link to={'/'} className='p-3 uppercase'>Home</Link>
        </li>
        <li>
          <Link to={'/program'} className='p-3 uppercase'>Program</Link>
        </li>
        <li>
          <a href='/contact' className='p-3 uppercase'>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
