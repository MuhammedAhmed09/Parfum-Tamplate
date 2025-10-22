import React, { useContext } from 'react'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import { AnnounceContext } from '../../context/AnnounceIsOpen';

const Navigate = () => {
  const { isOpen } = useContext(AnnounceContext);
  
  return (
    <div className={`w-full fixed z-40 ${isOpen && ('top-8')}`}>
      <div className='flex justify-between my-4 bg-white text-center items-center rounded-full px-6 py-2 mx-[7%]'>
        <div className='flex gap-4 sm:gap-6 md:gap-8'>
          <Link to='shop' className='text-sm font-semibold lg:text-base'>Shop</Link>
          <Link to='about' className='text-sm font-semibold lg:text-base'>About</Link>
        </div>
        <Link to='/' className='text-lg sm:text-xl md:text-2xl font-bold relative'>
          <img src="/image/black-flower-icon.png" alt="flower-icon" className='w-6 sm:hidden' />
          <img src="/image/black-logo.png" alt="PURFUM" className='sm:w-24 hidden sm:block' />
        </Link>
        <div className='flex gap-4 sm:gap-6 md:gap-8'>
          <Link to='blog' className='text-sm font-semibold lg:text-base'>Blog</Link>
          <Link to='contact' className='text-sm font-semibold gap-x-8 lg:text-base'>Contact</Link>
          <Link to='cart' className='text-sm font-semibold lg:text-base self-center'><LiaShoppingBagSolid /></Link>
        </div>
      </div>
    </div>
  )
}

export default Navigate