"use client"
import React from 'react'
import Cards from '@/components/cards'
import Footer from '@/components/Footer'
import Landing from '@/components/Landing'

const page = () => {
  return (

    <div className='w-full h-screen'>



      {/* about website */}
      <div className='w-full bg-cover  h-[82%] m-1 bg-[url("https://assets.cntraveller.in/photos/60ba221ef27d46df614fc78b/16:9/w_1920,h_1080,c_limit/Ecofriendly-Travel-Products.jpg")]' >

        {/* <img className=' w-full  object-contain object-center ' src="" /> */}

        <div className='w-[50%]  p-2 pl-6 pt-25  '>
          <h2 className='text-[70px] text-gray-700 pt-[56px]  font-bold'>Sustainable Living Made Easy</h2>
          <h5 className='text-[40px] text-white pt-4 font-bold'>SHOP SUSTAINABLE</h5>
          <h5 className='text-[40px] text-white pt-4 mb-4 font-bold '>SHOP PLASTIC FREE</h5>
        </div>

      </div>

      <h1 className='py-4 my-4 bg-gradient-to-tl from-gray-100 to-gray-500  border   font-bold text-3xl text-center'>Home & Living</h1>


      {/* slides */}
      <div className=''>
        <Landing ></Landing>
      </div>

      <div className=''>
        <h1 className='font-extrabold text-3xl text-center mt-8 mb-4 pt-2 pb-2   bg-gradient-to-tl from-gray-100 to-gray-500 '>Committed to Sustainability</h1>
        <p className='pl-8 p-2 my-4'>Greenify is building a new industrial and electronics hub from scratch and its ambition is to build it inherently sustainable from the very beginning – without the drawbacks that come from legacy infrastructure. For a better tomorrow, Alat is going to heavily rely on AI and Industry 4.0 to bring efficiencies, new thinking, and new approaches to constantly drive sustainability at the core of everything it does, advancing not only the technology products manufactured, but also the way they are manufactured.

        </p>

        <p className='pl-8 p-2 '>This includes deploying sustainable manufacturing, using AI to improve efficiency in production, applying sustainability measures to the supply chain, and utilizing smart building and smart factories, with a committed focus on sustainability.</p>
      </div>

      

      {/* //cards */}
     <Cards></Cards>
      {/* //footer */}
      <Footer></Footer>

    </div>
  )
}

export default page
