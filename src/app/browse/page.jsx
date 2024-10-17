"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

const browseProduct = () => {


  const [productList, setproductList] = useState([]);  // here productlist is a array and we added a empty array in a default value  and setproductList is a setter(a function to set values in it) fuction for a productList


  const fetchproducts = async () => {// here fetchproducts is a new function which willl fetch our data from mongoDB  
    const res = await axios.get('http://localhost:5000/product/getall'); // in this line we are assigning our ftched data into a res named constand . and we are fetching the data by getall command .
    console.log(res.data); //printing data in a console to see what we gets 
    setproductList(res.data); //assigning fetched data into productList by using setproductList method
  }


  useEffect(() => {
    fetchproducts();
  }, []);



  const cards = () => {

    if (productList.length === 0) {
      return <p className='flex bg-gray-200 items-center h-screen
        text-xl font-bold justify-center'>Loading.....</p>
    }
    else {
      return <div className='grid grid-cols-3 p-8 h-full w-full justify-center items-center'>
        {(productList.map((prop) => {

          return <div className='col-span-1 mb-8 mx-4 border w-auto border-gray-950 rounded-lg h-96 shadow-lg shadow-slate-500  justify-center items-center '>

            <div className='rounded-lg h-[65%]'>

              <img className='border h-full w-full object-contain rounded-t-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s" alt="" />
            </div>

            <div className='bg-white h-[35%] rounded-b-lg'>

              <h1 className='text-gray-800 text-xl font-semibold pt-1 pl-1 hover:underline hover:text-gray-950'>{prop.name}</h1>
              <h1 className='text-gray-900 text-sm font-semibold pt-1 pl-1 hover:underline hover:text-gray-950'>
                {prop.address}
              </h1>

              

              <div className='flex justify-between w-full px-1 mt-1 items-center'>

                <h1 className='text-lg text-gray-900 font-bold'>Price : {prop.price}</h1>

                <Link href={"/product-detail/" + prop._id} className='border bg-gray-800 text-white font-semibold w-[40%] h-7  rounded-2xl '>Buy Now</Link>

              </div>

            </div>

          </div>

        }))

        }

      </div>
    }
  }




  return (
    <div>

      {cards()}

    </div>
  )
}

export default browseProduct

