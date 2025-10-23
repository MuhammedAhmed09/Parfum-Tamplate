import { useContext } from 'react'
import { ProductsContext } from '../context/CartProducts'
import { MdDeleteOutline } from 'react-icons/md';
import QuantityInput from '../components/QuantityInput';
import { Link } from 'react-router-dom';

const Products = () => {
  const { cartItems, handleRemoveItem } = useContext(ProductsContext);


  return (
    <div className='w-full flex items-center justify-center min-h-[20vh]'>
      {cartItems.length === 0 ? (
        <div className='text-Green font-semibold text-sm md:text-base lg:text-lg flex flex-col gap-4 items-center '>
          <h3>Your Shopping Cart is Empty</h3>
          <Link to='/shop' className='border border-Green rounded-full cursor-pointer'>
            <button className='px-6 py-1 hover:scale-105 duration-300 transition-transform cursor-pointer'>Buy Now</button>
          </Link>
        </div>
      ) : (
        <div className='w-full px-6 grid gap-y-8'>
          <div className='font-semibold text-sm md:text-base lg:text-lg flex flex-row justify-between gap-4 items-center'>
            <h3>Shopping Cart</h3>
            <Link to='/shop' className='hidden sm:flex border-b cursor-pointer'>
              <button className='px-4 md:px-6 py-1 hover:scale-105 duration-300 transition-transform cursor-pointer'>
                continue shopping
              </button>
            </Link>
          </div>
          <div className='grid grid-cols-5 justify-between w-full font-semibold text-sm md:text-base text-left border-b border-black/30 mb-2'>
            <h3 className='col-span-2'>PRODUCT</h3>
            <h3>PRICE</h3>
            <h3>QUANTITY</h3>
            <h3>TOTAL</h3>
          </div>
          <div className='grid gap-6'>
            {cartItems.map((item) => (                          
              <div key={item.id} className='grid grid-cols-5 justify-between w-full text-left'>
                <div className='flex gap-2 col-span-2'>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className='w-20 p-1 items-center'
                  />
                  <div>
                    <h3 className='text-start pr-4'>{item.title}</h3>
                  </div>
                </div>
                <h4>{`${item.price} LE`}</h4>
                <div className='flex items-start -mx-4 text-center gap-1'>
                  <QuantityInput item={item} />
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className='cursor-pointer text-2xl'
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
                <h4>{`${item.price * item.quantity} LE`}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Products