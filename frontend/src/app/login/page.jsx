'use client'

import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'Yup'
const LoginSchema = Yup.object().shape({

  email: Yup.string()
    .email("please enter valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, 'password must contain 8 charecters')
    .matches(/[a-z]/, 'password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'password must contain at least one Uppercase letter')
    .matches(/\d/, 'password must contain a number')
    .required("password is rrequired"),


}
)


const Login = () => {
  //step-1: formik initialization
  const loginForm = useFormik(
    {
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      },
      validationSchema: LoginSchema
    }       

  )
  return (
    <div className='flex align-center w-full h-screen items-center bg-[url(https://1worldsync.com/wp-content/uploads/2022/08/ECO-FI.jpg)] bg-cover bg-center  object-cover justify-center'> 
 

      <div className="  border  w-1/3 shadow-lg rounded-lg p-6 backdrop-blur-xl ">

        <h3 className="text-center font-bold text-3xl my-4">Login Here</h3>
        {/* step-2: data handling with submit */}
        <form onSubmit={loginForm.handleSubmit}>

          <label className="font-bold " htmlFor="name">
            Email
          </label>
          <input
            className="w-full p-2 border-2 font-bold rounded-md mb-5"
            type="email"
            id="email"
            onChange={loginForm.handleChange}
            value={loginForm.values.email}
          />
          {loginForm.errors.email && loginForm.touched.email?(<div className='text-red-500 text-sm'>{loginForm.errors.email}</div>):null}
          
          <label className="font-bold" htmlFor="">
            Password
          </label>
          <input
            className="w-full p-2 border-2 border-gray-300 rounded-md mb-5"
            type="password"
            id="password"
            onChange={loginForm.handleChange}
            value={loginForm.values.password}
          />
          {loginForm.errors.password && loginForm.touched.password?(<div className='text-red-500 text-sm'>{loginForm.errors.password}</div>):null}

          <button className="bg-red-950 w-full py-2 px-1 text-white rounded-md block m-auto mt-5">
            SUBMIT
          </button>

        </form>
      </div>
    </div>


  )
}

export default Login;