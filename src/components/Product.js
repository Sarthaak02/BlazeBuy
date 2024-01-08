import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast';
import { add, remove } from '../redux/Slices/CartSlice'

export default function Product({ product }) {

  const { cart } = useSelector((state) => state);
  
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(add(product));
    toast.success('Item added succefully');
  }

  const handleRemoveClick = () => {
    dispatch(remove(product.id));
    toast.success('Item removed succefully');
  }

  return (
    <div className='flex flex-col items-center justify-centre shadow-md font-thin text-lg mt-10 ml-4 gap-y-3 bg-teal-50'>
      <div className='font-semibold text-lg truncate w-56 py-4'>
        <p>{product.title}</p>
      </div>
      <div className='h-[280px]'>
        <img src={product.image} className='h-full w-full ' />
      </div>
      <div className='flex flex-row justify-between w-3/4 mt-4 py-4'>
        <p>INR {product.price}</p>
        {
          cart.some((p) => p.id == product.id) ?

            (<button onClick={handleRemoveClick} className='border-[1px] w-[110px] h-[35px] bg-teal-300 text-white hover:bg-white hover:text-teal-400 hover:border-teal-400'>
              <p>Remove Item</p>
            </button>)
            :
            (<button onClick={handleAddClick} className='border-[1px] w-[100px] h-[35px] bg-teal-300 text-white hover:bg-white hover:text-teal-400 hover:border-teal-400'>
              <p>Add to cart</p>
            </button>)
        }
      </div>
    </div>
  )
}
