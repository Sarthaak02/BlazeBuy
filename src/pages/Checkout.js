import React from 'react'
import { useState, useRef } from 'react';
import { toast } from 'react-hot-toast'


export default function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    payment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const form = useRef();

  const handleSubmit = () => {
    toast.success('Order Placed succefully')
  };

  return (
    <div className="flex flex-row w-[900px] mt-16 gap-x-16 m-auto bg-teal-50">
      <form ref={form}
        className="flex flex-col gap-y-4 w-full text-gray-500 py-4 px-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-2 w-full h-[44px] bg-color-one focus:border-b-2 focus:border-teal-300 focus:outline-none"
          required
        />
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="px-4 py-2 w-full h-[44px] bg-color-one focus:border-b-2 focus:border-teal-300 focus:outline-none"
          required
        />
        <input
          type="text"
          placeholder="Payment Method"
          name="payment"
          value={formData.payment}
          onChange={handleChange}
          className="px-4 py-2 w-full h-[44px] bg-color-one focus:border-b-2 focus:border-teal-300 focus:outline-none"
          required
        />
        <input
          type="submit"
          value="Place Order"
          className='bg-teal-400 text-white h-10 w-full text-xl text-bold hover:bg-white hover:border-[1px] hover:border-teal-400 hover:text-teal-400 '
        />
      </form>
    </div>
  )
}
