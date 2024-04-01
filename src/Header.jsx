import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-center items-center h-[10vh] w-full bg-slate-500'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='addDestination'>Add Destination</NavLink>
    </div>
  )
}

export default Header