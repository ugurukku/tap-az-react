import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcApproval, FcCancel } from "react-icons/fc";
import { API } from '../utils/instance';
import { toast } from 'react-hot-toast';

const RegisterForm = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [confirm, setConfirm] = useState(true);

  

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
    }
    else if (id === "email") {
      setEmail(value);
    }
    else if (id === "password") {
      setPassword(value);
    } else if (id === "confirm") {
      setConfirmPassword(value);
      if (value !== password) {
        setConfirm(false);
      } else { setConfirm(true); }
    };
  }



  const handleSubmit = (e) => {
    e.preventDefault();
   
    API.post("/register",{
        email:email,
        password:password,
        username:username
    }).then((response) => {   
      navigate("/register/verify");
    }).catch((error)=> {
      toast.error(error.response.data)
    });

  };

  return (
    <form onSubmit={handleSubmit} className='flex px-16 py-12 flex-col gap-3 min-w-[60%] shadow-2xl border border-gray-300 rounded-2xl bg-white'>
      <label htmlFor="" className='flex flex-col gap-1'>
        İstifadəçi adı
        <input  id='username' onChange={(e) => handleInputChange(e)} required type="text" className='p-3 border border-gray-500 shadow-sm bg-gray-200' />
      </label>
      <label htmlFor="" className='flex flex-col gap-1'>
        Elektron poçt
        <input id='email' onChange={(e) => handleInputChange(e)} required type="text" className='p-3 border border-gray-500 shadow-sm bg-gray-200' />
      </label>
      <label htmlFor="" className='flex flex-col gap-1'>
        Şifrə
        <input minLength={8} placeholder='Minimum uzunluq : 8 ' id='password' onChange={(e) => handleInputChange(e)} required type="password" className='p-3 border border-gray-500 shadow-sm bg-gray-200' />
      </label>
      <label htmlFor="" className='flex flex-col gap-1'>
        <div className='flex items-center'>
          Şifrəni təkrarla {confirmPassword.length<2?'' : !confirm ? <FcCancel className='inline-' /> :<FcApproval/>}
        </div>
        <input id='confirm' onChange={(e) => handleInputChange(e)} required type="password" className='p-3 border border-gray-500 shadow-sm bg-gray-200' />
      </label>
      <button className='bg-[#FC2E20] rounded py-2 shadow-sm mt-2 text-white text-lg hover:bg-blue-800'>Qeydiyyat</button>
      <label htmlFor="" className='text-center text-gray-400'>
        və ya
      </label>
      <Link className=' text-center hover:font-bold' to="/login">Giriş et</Link>
    </form>
  )
}

export default RegisterForm
