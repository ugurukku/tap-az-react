import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import { API } from '../utils/instance';


const VerifyForm = () => {

  const [code, setCode] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (event) => {
event.preventDefault();

    API.get(`/verify?code=${code}`
    ).then((response) => {
      navigate("/login");
      toast.success("Qeydiyyat ugurlu oldu");
    }
    ).catch((error) => {
      toast.error(error.response.data);
    });

  }

  return (
    <form onSubmit={handleSubmit} className='flex px-16 py-12 flex-col gap-3 w-3/6 min-w-xl shadow-2xl border border-gray-300 rounded-2xl bg-white'>

      <label htmlFor="" className='flex flex-col gap-1'>
        Təhlükəsizlik kodunu daxil edin
        <input required type="text" onChange={(e) => setCode(e.target.value)} className='p-3 border border-gray-500 shadow-sm bg-gray-200' />
      </label>
      <button className='bg-[#FC2E20] py-2 rounded shadow-sm text-white text-lg hover:bg-blue-800'>Təsdiqlə</button>

    </form>
  )
}

export default VerifyForm
