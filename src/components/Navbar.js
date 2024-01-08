import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className='w-screen'>
      <div className="flex flex-row w-2/4 justify-between mx-auto py-3">
        <NavLink to='/'>
          <p className='text-3xl font-thin text-teal-400'>
            BlazeBuy
          </p>
        </NavLink>
        <div className='flex flex-row justify-between w-[90px] gap-x-2'>
          <NavLink to='/'>
            <p className='text-xl font-thin hover:text-teal-400 active:text-teal-400 py-1'>Home</p>
          </NavLink>
          <NavLink to='/cart' className='text-xl font-thin hover:text-teal-400 active:text-teal-40 pt-3'>
            <FaCartShopping />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
