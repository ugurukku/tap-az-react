import React, { useState } from 'react'
import { BiCategoryAlt, BiUserCircle, BiAddToQueue, BiSearchAlt, BiExit } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { API, categoryURI } from '../utils/instance';


const Header = () => {

  const userInfo = JSON.parse(localStorage.getItem("user"));

  const [categories, setCategories] = useState([])


  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload(true);
  };

  useState(() => {

    const getCategories = async () => {
      const response = await API.get(categoryURI);
      setCategories(response.data);
    }
    getCategories();

  }, []);

  return (
    <>
      <div className='bg-[#FF4F08] text-white w-full'>

        <div className='container mx-auto gap-x-6 py-2 flex items-center justify-center'>


          <a href='/products' className='mx-3 text-[20px] font-bold font-sans hover:text-black'>
            ukku.az
          </a>


          <div className="group  inline-block relative hover:text-black">
            <button
              className="font-semibold py-2 px-4 rounded inline-flex items-center"
            >
              <BiCategoryAlt className='mr-1' size={30}></BiCategoryAlt>
              Kateqoriyalar
            </button>
            <ul className="absolute hidden min-w-full  text-white pt-1 group-hover:block">
              {
                categories.map((category) => {
                  return <li key={category.id}>
                    <a
                      className=" bg-[#FF4F08]  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href={`/products?category=${category.id}`}
                    >{category.name}</a>
                  </li>

                })
              }

            </ul>

          </div>


          <span className='flex w-96 rounded bg-white mx-0'>
            <input type="search"
              name='search'
              id='search'
              placeholder='Axtarış'
              className='w-full border-none bg-transparent py-2 px-4 text-gray-900 outline-none focus:outline-none text-sm' />
            <button className='m-2 rounded bg-[#FC2E20] flex items-center gap-x-1 px-4 py-1 text-white font-medium hover:text-black' ><BiSearchAlt></BiSearchAlt>Axtar</button>
          </span>

        {
          userInfo == null? '':  <Link to={'/newProduct'} className="flex items-center gap-x-2 transition-all hover:text-black cursor-pointer">
          <BiAddToQueue size={30}></BiAddToQueue>
          Yeni elan
        </Link>
        }



          <div className="group  inline-block relative hover:text-black">
            <button
              className="font-semibold py-2 px-4 rounded gap-1 inline-flex items-center"
            >
              <BiUserCircle size={30}></BiUserCircle>
              {userInfo ==null ? "Daxil ol" : userInfo.username}
            </button>

            {userInfo == null ?
              <ul className="absolute hidden min-w-full  text-white pt-1 group-hover:block">
                <li key={"login"}>
                  <Link className=" bg-[#FF4F08] hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to={"/login"}>Giriş</Link>
                </li>
                <li key={"register"}>
                  <Link className=" bg-[#FF4F08]  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to={"/register"}>Qeydiyyat</Link>
                </li>
              </ul>
              :
              <ul className="absolute hidden min-w-full  text-white pt-1 group-hover:block">
                <li key={"my-prod"}>
                  <Link className=" bg-[#FF4F08] hover:bg-gray-400 py-2 px-4 block " to={"/my-prod"}>Elanlarım</Link>
                </li>
                <li key={"sign-out"}>
                  <button onClick={() => handleLogout()} type="button" className=" bg-[#FF4F08] text-center min-w-full hover:bg-gray-400 py-2 px-4 content-center inline-flex items-center">Çıxış<BiExit/></button>
                </li>
              </ul>
            }

          </div>




        </div>
      </div>
    </>

  )
}

export default Header
