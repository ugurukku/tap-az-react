import React from 'react'
import {BiCategoryAlt, BiUserCircle,BiAddToQueue,BiSearchAlt} from "react-icons/bi";
import { Link } from 'react-router-dom';

const Header = () => {

const print = () => {
  console.log("salam");
};

  return (
    <>
      <div className='bg-[#FF4F08] text-white w-full'>

        <div className='container mx-auto gap-x-6 py-2 flex items-center justify-center'>


          <a href='/' className='mx-3 text-[20px] font-bold font-sans hover:text-fuchsia-800'>
            ukku.az
          </a>

          <span onClick={()=>print()} className="flex items-center gap-x-2 transition-all hover:text-violet-700 cursor-pointer">
            <BiCategoryAlt size={30}></BiCategoryAlt>
            Kateqoriya
          </span>

          <span className='flex w-96 rounded bg-white mx-0'>
            <input type="search"
            name='search'
            id='search'
            placeholder='Axtarış'
            className='w-full border-none bg-transparent py-2 px-4 text-gray-900 outline-none focus:outline-none text-sm' />
            <button className='m-2 rounded bg-[#FC2E20] flex items-center gap-x-1 px-4 py-1 text-white font-medium hover:bg-violet-700' ><BiSearchAlt></BiSearchAlt>Axtar</button>
          </span>

          <Link to={'/newProduct'} className="flex items-center gap-x-2 transition-all hover:text-violet-700 cursor-pointer">
            <BiAddToQueue size={30}></BiAddToQueue>
            Yeni elan
          </Link>


          <Link className='flex items-center gap-x-2 float-right cursor-pointer hover:text-violet-700'>
          <BiUserCircle size={30}></BiUserCircle>
          username
          </Link>


        </div>
      </div>
    </>

  )
}

export default Header
