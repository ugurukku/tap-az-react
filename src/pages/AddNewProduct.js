import React, { useState } from 'react'
import Header from '../components/header'
import { categoryURI, cityURI, imageURI, productURI } from '../utils/instance';
import { API } from '../utils/instance';

const AddNewProduct = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);

    var image = document.getElementById('uploaded-image');
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  const saveImage = (id) => {

    const formData = new FormData();
    formData.append('image', selectedFile, selectedFile.name)


    API.post(`${imageURI}/${Number(id)}`, formData).then((response) => {
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
        <div className="mt-5 bg-[#F3F3F3] md:mt-0 md:col-span-2 place-content-center">
          <form onSubmit={() => addProduct()}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5  space-y-6 sm:p-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="product_name" className="block text-sm font-medium text-gray-700">
                      Məhsul adı
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input required type="text" name="product_name" id="product_name" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-3 px-2" placeholder="Gözəl məhsul" />
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="product_price" className="block text-sm font-medium text-gray-700">
                      Məhsul qiyməti
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input required type="number" name="product_price" id="product_price" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-3 px-2" placeholder="100" />
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
                      <select required type="text" name="product_category" id="product_category" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-3 px-2" placeholder="Gözəl məhsul">
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
                      <select required type="text" name="product_city" id="product_city" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-3 px-2" placeholder="Gözəl məhsul">
                        {
                          cities.map((city) => {
                            return <option key={city.id} value={city.id} >{city.name}</option>
                          }
                          )
                        }
                      </select>
                    </div>
                  </div>

                  <div className='flex items-center gap-4 '>
                    <label htmlFor="file-upload" className="cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      Şəkil yükləyin : 
                    </label>
                    <div>
                      <input required onChange={handleFileSelect} id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </div>
                    <img src="" alt="" id='uploaded-image' width={100} height={100}/>
                  </div>

              </div>

              <div className="px-4 py-3 bg-gray-50 text-center sm:px-6 lg:px-52">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  ƏLAVƏ ET
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
