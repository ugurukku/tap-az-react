import React, { useState } from 'react'
import Header from '../components/header'
import { categoryURI, cityURI, imageURI, productURI } from '../utils/instance';
import { API } from '../utils/instance';
import { useSelector } from 'react-redux';

const AddNewProduct = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const userInfo = useSelector((state) => state.auth);
  

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);

    var image = document.getElementById('uploaded-image');
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  const saveImage = (id) => {

    const formData = new FormData();
    formData.append('image', selectedFile, selectedFile.name)

    var base64 = require('base-64');

    API.post(`${imageURI}/${Number(id)}`, formData, {
      headers: {
        // Authorization: "Basic " + base64.encode(username + ":" + password)
      }
    }).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });

  };


  const addProduct = (event) => {
    var name1 = document.getElementById('product_name').value;
    var price1 = document.getElementById('product_price').value;
    var description1 = document.getElementById('product_desc').value;
    var category1 = document.getElementById('product_category').value;
    var city1 = document.getElementById('product_city').value;



    let product = {
      title: name1,
      price: price1,
      description: description1,
      category: { id: category1 },
      city: { id: city1 }
    };

    API.post(productURI, product,)
      .then((response) => {

        saveImage(response.data);

      })
      .catch((error) => {
        console.log(error);
      });


  };

  const [cities, setCities] = useState([])

  useState(() => {
    console.log(userInfo.username);

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
      <div className='bg-[#0B1C48] min-h-screen'>
        <div className="mt-5 mx-auto  md:mt-0 md:col-span-2 place-content-center">
          <form onSubmit={() => addProduct()}>
            <div className="mx-auto sm:rounded-md sm:overflow-hidden">
              <div className="px-4 mx-auto text-white space-y-6 sm:p-6">
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="product_name" className="block text-sm font-medium ">
                    Məhsul adı
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input required type="text" name="product_name" id="product_name" className="focus:ring-indigo-500 text-black focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-3 px-2" placeholder="Gözəl məhsul" />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="product_price" className="block text-sm font-medium ">
                    Məhsul qiyməti
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input required type="number" name="product_price" id="product_price" className="focus:ring-indigo-500 text-black focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-3 px-2" placeholder="100" />
                    AZN
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="product_desc" className="block text-sm font-medium ">
                    Məzmun
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <textarea type="text" name="product_desc" id="product_desc" className="focus:ring-indigo-500 text-black focus:border-indigo-500 flex-1 block w rounded-none rounded-r-md sm:text-sm border-gray-300 py-3 px-2" placeholder="Gözəl məhsul" />
                  </div>
                </div>

                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="product_category" className="block text-sm font-medium ">
                    Kateqoriya
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <select required type="text" name="product_category" id="product_category" className="focus:ring-indigo-500 text-black focus:border-indigo-500 flex-1 block  rounded-none rounded-r-md sm:text-sm border-gray-300 py-3 px-2" placeholder="Gözəl məhsul">
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
                  <label htmlFor="product_city" className="block text-sm font-medium ">
                    Şəhər
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <select required type="text" name="product_city" id="product_city" className="focus:ring-indigo-500 text-black focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-3 px-2" placeholder="Gözəl məhsul">
                      {
                        cities.map((city) => {
                          return <option key={city.id} value={city.id} >{city.name}</option>
                        }
                        )
                      }
                    </select>
                  </div>
                </div>

                <div className='flex items-center gap-x-2 justify-center'>
                  <label htmlFor="file-upload" className="flex items-center gap-x-2 cursor-pointer rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    Şəkil yükləmək üçün kliklə
                  </label>
                  <div>
                    <input required onChange={(event) => handleFileSelect(event)} id="file-upload" name="file-upload" type="file" className="sr-only" />
                    <img src="" alt="" id='uploaded-image' width={80} height={80} />
                  </div>

                </div>
              </div>

              <div className="px-4 text-center sm:px-6 lg:px-52">
                <button type="submit" className="inline-flex justify-center py-1 px-10  text-3xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Elanı əlavə et
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
