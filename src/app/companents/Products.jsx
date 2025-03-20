"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Products = () => {
    const [data,setdata] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await axios.get("https://dummyjson.com/products")
                console.log(res?.data?.products);
                setdata(res?.data?.products)
            }
            catch(error){
                console.log(error);
            }
        }
        getData()
    },[])
  return (
    <div className="flex flex-wrap items-start justify-around gap-7 pt-8">
      {data?.map((product) => (
        <div className="w-[300px] h-[400px] p-5 bg-gray-300 rounded-lg">
            <div className="w-[260px] h-[280px]">
                <Image fill src={product?.images} alt={product?.id}/>
            </div>
            <h2 className="">Brand:{product?.brand}</h2>
        </div>
      ))}
    </div>
  )
}

export default Products
