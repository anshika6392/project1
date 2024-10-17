'use client'
import { useFormik } from 'formik';
import React from 'react'
// import * as Yup from 'Yup'
// const addProductSchema = Yup.object().shape({


const AddProduct = () => {

  const productForm = useFormik({
    initialValues: {
      name: '',
      image: '',
      category: '',
      price: ''
    },
    onSubmit: (values, { resetForm }) => {
      axios.post('http://localhost:5000/product/add', values)
        .then((result) => {
          toast.success('user created successfully');
        }).catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || 'something went wrong');
        });
      resetForm();

      console.log(values);
      resetForm();
    },

  })

  return (
    <div className='flex justify-center items-center'>

      <div className='border-2 border-black-500 h-90 w-1/4  px-4 py-4 mt-20'>
        <h3 className='text-2xl font-bold text-center  '>product form</h3>
        <form className='' >
          <label htmlFor="name">NAME</label>
          <input id="name"
            onChange={productForm.handleChange}
            value={productForm.values.name} className='w-full p-2 border-2 font-bold rounded-md mb-5' type="text" />
          <label htmlFor="image">IMAGE</label>
          <input id="image"
            onChange={productForm.handleChange}
            value={productForm.values.image} className='w-full p-2 border-2 font-bold rounded-md mb-5' type="file" />
          <label htmlFor="name">CATEGORY</label>
          <input id="category"
            onChange={productForm.handleChange}
            value={productForm.values.category} className='w-full p-2 border-2 font-bold rounded-md mb-5' type="text" />
          <label htmlFor="price">PRICE</label>
          <input id="price"
            onChange={productForm.handleChange}
            value={productForm.values.price} className='w-full p-2 border-2 font-bold rounded-md mb-5' type="number" />
          <button className='className="bg-purple-500 py-2 px-1 text-black border-2 border-black-500 rounded-md block m-auto mt-5">'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct;