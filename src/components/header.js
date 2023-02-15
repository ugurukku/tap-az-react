import React, { useState } from 'react'
import { BiCategoryAlt, BiUserCircle, BiAddToQueue, BiSearchAlt, BiExit } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { API, categoryURI } from '../utils/instance';
import { removeAuth } from '../auth/authSlice';
import { toast } from 'react-hot-toast';



const Header = () => {

  const userInfo = JSON.parse(localStorage.getItem("user"));

  const [categories, setCategories] = useState([])

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(removeAuth());
    navigate("/");
    toast.success("Gülə gülə :)");
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
      <header>
        <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-[#FF4F08]">
          <div className="flex flex-wrap text-white justify-between items-center mx-auto max-w-screen-xl">
            <a href='/products' className='ml-10 text-[20px]  font-bold font-sans hover:text-black'>
              ukku.az
            </a>
            <div className="flex items-center lg:order-2">
              <button data-collapse-toggle="mobile-menu-2" onClick={() => setOpen(!open)} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 " aria-controls="mobile-menu-2" aria-expanded="false">
              <GiHamburgerMenu></GiHamburgerMenu>
              </button>
            </div>
            <div className={`${open ? '' : 'hidden'}  items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2`}>
              <ul className="flex flex-col mt-4 font-medium lg:flex-row gap-0 lg:space-x-8 lg:mt-0">
                <li>
                  <div className='group relative hover:text-black '>
                    <button
                      className="font-semibold py-2 px-4 rounded inline-flex items-center"
                    >
                      <BiCategoryAlt className='mr-1' size={30}></BiCategoryAlt>
                      Kateqoriyalar
                    </button>
                    <ul className={`absolute hidden min-w-full  text-white  pt-1 group-hover:block`}>
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
                </li>
                <li>
                <div className='flex max-w-96 rounded bg-white overflow-y-visible'>
              <input type="search"
                name='search'
                id='search'
                placeholder='Axtarış'
                className='max-w-fit border-none bg-transparent py-2 px-4 text-gray-900 outline-none focus:outline-none text-sm' />
              <button className='m-2 rounded bg-[#FC2E20] flex items-center gap-x-1 px-4 py-1 text-white font-medium hover:text-black' ><BiSearchAlt></BiSearchAlt>Axtar</button>
            </div>
                </li>
                <li>
                {
              userInfo == null ? '' : <Link to={'/new-product'} className="flex items-center py-2 px-4 gap-x-2 transition-all hover:text-black cursor-pointer">
                <BiAddToQueue size={30}></BiAddToQueue>
                Yeni elan
              </Link>
            }    
               </li>
              
              </ul>
              <div className="group inline-block mr-10 relative hover:text-black overflow-y-visible">
            <button
              className="font-semibold py-2 px-4 rounded gap-1 inline-flex items-center"
            >
              <BiUserCircle size={30}></BiUserCircle>
              {userInfo == null ? "Daxil ol" : userInfo.username}
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
                  <Link className=" bg-[#FF4F08] hover:bg-gray-400 py-2 px-4 block " to={"/my-products"}>Elanlarım</Link>
                </li>
                <li key={"sign-out"}>
                  <button onClick={() => handleLogout()} type="button" className=" bg-[#FF4F08] text-center min-w-full hover:bg-gray-400 py-2 px-4 content-center inline-flex items-center">Çıxış<BiExit /></button>
                </li>
              </ul>
            }

          </div>
            </div>

           
          </div>
        </nav>
      </header>
      
    </>

  )
}

export default Header
