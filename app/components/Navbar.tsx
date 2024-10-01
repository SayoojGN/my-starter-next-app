import React from 'react'
import Link from 'next/link'
import './Navbar.css';
import myImage from '../resources/logo2.png';


const Navbar = () => {
  return (
    <div className='bg-white text-black h-16 w-screen flex justify-between items-center px-6 border-b border-black'>
      <Link href='/' className='h-8 w-24 logo'>
      </Link>
      <div className='flex w-1/3 justify-evenly items-center text-gray-500 h-full'>
        <div><Link href='/cars' className='option-nv'>Collection</Link></div>
        <div><Link href='/about' className='option-nv'>About</Link></div>
        <div><Link href='/contact' className='option-nv'>Contact</Link></div>
        <button><Link href='/login' className='option-nv'>Login</Link></button>
        <button className='bg-yellow-400 p-2.5 rounded-lg hover:bg-yellow-500 option-nv'><Link href='/register'>Register</Link></button>
      </div>
    </div>
  )
}

export default Navbar