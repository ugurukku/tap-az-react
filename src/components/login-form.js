import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <form className='flex px-16 py-12 flex-col gap-3 max-w-xl shadow-2xl border border-gray-300 rounded-2xl'>
    
      <label htmlFor="" className='flex flex-col gap-1'>
      Elektron poçt
    <input type="text" className='p-3 border border-gray-500 shadow-sm bg-gray-200'/>
      </label>
      <label htmlFor="" className='flex flex-col gap-1'>
      Şifrə
    <input type="text" className='p-3 border border-gray-500 shadow-sm bg-gray-200'/>
      </label>
      <button className='bg-blue-500 py-2 rounded shadow-sm text-white text-lg hover:bg-blue-800'>Girish et</button>
      <label htmlFor="" className='text-center text-gray-400'>
      ve ya
      </label>
      <Link  className=' text-center hover:font-bold' to="/register">Qeydiyyat</Link>
  </form>
  )
}

export default LoginForm
