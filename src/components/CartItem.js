import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice'

export default function CartItem({ item, itemIndex }) {

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(remove(item.id));
    toast.success('Item removed succesully');
  }

  return (

    <div className='flex flex-row justify-evenly bg-teal-50 shadow-md py-4'>
      <div className='h-[220px] '>
        <img src={item.image} className='h-full w-[200px]' />
      </div>
      <div className=''>
        <p className='font-semibold text-lg w-56 py-4' >{item.title}</p>
        <div className='flex flex-row justify-between font-thin text-lg'>
          <p className=' w-3/4' >INR {item.price}</p>
          <button onClick={handleRemove}>
            <MdDelete className='text-red-800' />
          </button>
        </div>
      </div>
    </div>
  )
}
