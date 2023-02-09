import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  return (
    <form className='flex px-16 py-12 flex-col gap-3 max-w-xl shadow-2xl border border-gray-300 rounded-2xl'>
      <label htmlFor="" className='flex flex-col gap-1'>
        Istifadəçi adı
      <input type="text" className='p-3 border border-gray-500 shadow-sm bg-gray-200'/>
        </label> 
        <label htmlFor="" className='flex flex-col gap-1'>
        Elektron poçt
      <input type="text" className='p-3 border border-gray-500 shadow-sm bg-gray-200'/>
        </label>
        <label htmlFor="" className='flex flex-col gap-1'>
        Şifrə
      <input type="text" className='p-3 border border-gray-500 shadow-sm bg-gray-200'/>
        </label>
        <label htmlFor="" className='flex flex-col gap-1'>
        Şifrəni təkrarla
      <input type="text" className='p-3 border border-gray-500 shadow-sm bg-gray-200'/>
        </label>
        <button className='bg-blue-500 rounded shadow-sm text-white text-lg hover:bg-blue-800'>Qeydiyyat</button>
        <label htmlFor="" className='text-center text-gray-400'>
        ve ya
        </label>
        <Link  className=' text-center hover:font-bold' to="/login">Giris et</Link>
    </form>
  )
}

export default RegisterForm
