import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setAuth } from '../auth/authSlice';
import { API } from '../utils/instance';

const LoginForm = () => {

  const [emaill, setEmail] = useState("");

  const [passwordl, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    API.post('/login', {
      email: emaill,
      password: passwordl
    }
      , config
    ).then((response) => {
      toast.success(`${response.data.username} xoş gəldin`, { icon: '👏' });
      dispatch(setAuth(response.data));
      navigate("/");
    }
    ).catch((error) => {
      toast.error(error.response.data);
    });

  }

  return (
    <form onSubmit={handleSubmit} className='flex px-16 py-12 flex-col gap-3 max-w-xl shadow-2xl border border-gray-300 rounded-2xl bg-white'>

      <label htmlFor="" className='flex flex-col gap-1'>
        Elektron poçt
        <input required type="email" onChange={(e) => setEmail(e.target.value)} className='p-3 border border-gray-500 shadow-sm bg-gray-200' />
      </label>
      <label htmlFor="" className='flex flex-col gap-1'>
        Şifrə
        <input required type="password" onChange={(e) => setPassword(e.target.value)} className='p-3 border border-gray-500 shadow-sm bg-gray-200' />
      </label>
      <button className='bg-[#FC2E20] py-2 rounded shadow-sm text-white text-lg hover:bg-blue-800'>Giriş et</button>
      <label htmlFor="" className='text-center text-gray-400'>
        və ya
      </label>
      <Link className='text-center hover:font-bold' to="/register">Qeydiyyatdan keç</Link>
    </form>
  )
}

export default LoginForm
