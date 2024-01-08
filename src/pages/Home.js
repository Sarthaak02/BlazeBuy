import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../components/Product'
import Spinner from '../components/Spinner'

export default function Home() {

  const API = 'https://fakestoreapi.com/products';
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const result = await fetch(API);
      const data = await result.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
      setProducts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
    console.log(products);
  }, [])

  return (
    <div className='w-full s-creen '>
      {
        loading ? <Spinner /> :
          products.length > 0 ?
            (<div className='grid grid-cols-4 p-2 mx-auto space-y-10 space-x-5 w-5/6 '>
              {
                products.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              }
            </div>)
            :
            <div className='flex justify-center items-center py-[40px]'>
              <p className='text-3xl font-semibold'>
                No Data Found
              </p>
            </div>
      }
    </div>
  )
}
