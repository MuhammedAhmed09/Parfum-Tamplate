import React from 'react'
import Products from '../../cartSections/Products'

const Cart = () => {
  return (
    <section className='bg-Light-Pink w-full flex flex-col gap-4 pt-28 items-center justify-center'>
      <h3 className='text-xl font-semibold sm:text-2xl md:text-3xl'>YOUR CART</h3>
      <Products />
    </section>
  )
}

export default Cart