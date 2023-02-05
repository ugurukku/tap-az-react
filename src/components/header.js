import React, { useState } from 'react'
import { BiCategoryAlt, BiUserCircle, BiAddToQueue, BiSearchAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { API, categoryURI } from '../utils/instance';

const Header = () => {

  const [categories, setCategories] = useState([])

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


          <a href='/' className='mx-3 text-[20px] font-bold font-sans hover:text-black'>
            ukku.az
          </a>

          <span className="relative flex items-center gap-x-2 transition-all hover:text-black cursor-pointer">

            <div className="group  inline-block relative">
              <button
                className="font-semibold py-2 px-4 rounded inline-flex items-center"
              >
                <BiCategoryAlt className='mr-1' size={30}></BiCategoryAlt>
                Kateqoriyalar
              </button>
              <ul className="absolute hidden min-w-full   text-black pt-1 group-hover:block">
                {
                  categories.map((category) => {
                    return <li key={category.id}>
                      <a
                        className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href={`/products?category=${category.id}`}
                      >{category.name}</a>
                    </li>

                  })
                }

              </ul>

            </div>
          </span>

          <span className='flex w-96 rounded bg-white mx-0'>
            <input type="search"
              name='search'
              id='search'
              placeholder='Axtarış'
              className='w-full border-none bg-transparent py-2 px-4 text-gray-900 outline-none focus:outline-none text-sm' />
            <button className='m-2 rounded bg-[#FC2E20] flex items-center gap-x-1 px-4 py-1 text-white font-medium hover:text-black' ><BiSearchAlt></BiSearchAlt>Axtar</button>
          </span>

          <Link to={'/newProduct'} className="flex items-center gap-x-2 transition-all hover:text-black cursor-pointer">
            <BiAddToQueue size={30}></BiAddToQueue>
            Yeni elan
          </Link>


          <Link className='flex items-center gap-x-2 float-right cursor-pointer hover:text-black'>
            <BiUserCircle size={30}></BiUserCircle>
            username
          </Link>


        </div>
      </div>
    </>

  )
}

export default Header
