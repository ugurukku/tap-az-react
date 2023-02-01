import React, { useState } from 'react'
import Header from '../components/header'
import { categoryURI, cityURI } from '../utils/instance';
import { API } from '../utils/instance';

const AddNewProduct = () => {

  const loadFile = (event) => {
    var image = document.getElementById('uploaded-image');
    image.src = URL.createObjectURL(event.target.files[0]);

  };


  const [cities, setCities] = useState([])

  useState(() => {

    const getCities = async () => {
      const response = await API.get(cityURI);
      setCities(response.data);
    }
    getCities();

  }, []);

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
      <Header></Header>


      <div>


        <div className="mt-5 md:mt-0 md:col-span-2 ">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="product_name" className="block text-sm font-medium text-gray-700">
                      Məhsul adı
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input type="text" name="product_name" id="product_name" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-3 px-2" placeholder="Gözəl məhsul" />
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="product_price" className="block text-sm font-medium text-gray-700">
                      Məhsul qiyməti
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input type="number" name="product_price" id="product_price" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-3 px-2" placeholder="100" />
                      AZN
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="product_desc" className="block text-sm font-medium text-gray-700">
                      Məzmun
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <textarea type="text" name="product_desc" id="product_desc" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-3 px-2" placeholder="Gözəl məhsul" />
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="product_category" className="block text-sm font-medium text-gray-700">
                      Kateqoriya
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <select type="text" name="product_category" id="product_category" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-3 px-2" placeholder="Gözəl məhsul">


                      {
                          categories.map((category) => {
                            return <option key={category.id} value={category.id} >{category.name}</option>
                          }
                          )
                        }
                      </select>
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="product_city" className="block text-sm font-medium text-gray-700">
                      Şəhər
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <select type="text" name="product_city" id="product_city" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-3 px-2" placeholder="Gözəl məhsul">

                        {
                          cities.map((city) => {
                            return <option key={city.id} value={city.id} >{city.name}</option>
                          }
                          )
                        }

                      </select>
                    </div>
                  </div>

                </div>


                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Şəkil
                  </label>
                  <div className=" flex justify-center border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" strokeLinejoin="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="True">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <img className='m-auto' src="" alt="" id='uploaded-image' width={100} height={100} />
                      <div className="flex text-sm text-gray-600">

                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Upload a file</span>
                          <input onChange={(event) => loadFile(event)} id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>


    </>
  )
}

export default AddNewProduct
