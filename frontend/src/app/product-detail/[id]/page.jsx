'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const productDetail = () => {

  const { id } = useParams();

  const [proData, setProData] = useState(null);


  const fetchProData = async () => {
    const res = await axios.get('http://localhost:5000/product/getbyid/' + id)
    console.log(res.data);
    setProData(res.data);
  }

  useEffect(() => {
    fetchProData(); 
  }, []);


  return (
    <div>
      {
        proData !== null ? (
          <div className='max-w-lg mx-auto rounded-lg mt-10 p-6 border shadow-lg'>
            <img src={proData.image} alt="" />
            <h1>{proData.name}</h1>
          
          </div>
        ) : (
          <h1>Loading ... </h1>
        )
      }
    </div>
  )
}

export default productDetail;
