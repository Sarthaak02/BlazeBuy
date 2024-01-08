import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem'

export default function Cart() {

  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className='my-6 w-3/4 mx-auto'>
      {
        cart.length > 0 ?
          (<div className='flex flex-row gap-x-7'>
            <div className='grid grid-rows-3 gap-y-5 w-2/4'>
              {
                cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemindex={index} />
                )
                )
              }
            </div>

            <div className='w-1/3 px-5 py-5 flex flex-col gap-y-6 bg-teal-50 h-[180px]'>
              <p className='text-4xl font-semibold'>Your Cart</p>
              <div className='flex flex-row justify-between'>
                <p>
                  <span >
                    Total items: <span className='text-gray-500' >{cart.length}</span>
                  </span>
                </p>
                <p>
                  <span>
                    Total Amount: <span className='text-gray-500' > INR {totalAmount} </span>
                  </span>
                </p>
              </div>
              <NavLink to='/checkout'>
                <button className='border-[1px] w-full text-lg font-semibold h-[35px] bg-teal-300 text-white hover:bg-white hover:text-teal-400 hover:border-teal-400'>
                  Checkout now
                </button>
              </NavLink>
            </div>
          </div>) :
          (<div className='flex flex-col justify-center items-center py-[300px] gap-y-4'>
            <h1 className='text-3xl font-semibold'>Cart is Empty</h1>
            <NavLink to='/'>
              <button className='bg-teal-400 text-white h-10 w-28 text-xl text-thin hover:bg-white hover:border-[1px] hover:border-teal-400 hover:text-teal-400'>
                <p>Shop Now</p>
              </button>
            </NavLink>
          </div>)
      }
    </div>
  )
}
