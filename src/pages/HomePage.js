import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import ItemCard from '../components/item-card';
import { Link } from 'react-router-dom';
import { API, productURI } from '../utils/instance';

const HomePage = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const categoryId = Number(window.location.href.split('=')[1]);

    if (!isNaN(categoryId)) {

      const getProducts = async () => {
        const response = await API.get(`${productURI}?category=${categoryId}`);
        setProducts(response.data);
      }

      getProducts();

    } else {
      const getProducts = async () => {
        const response = await API.get(productURI);
        setProducts(response.data);
      }
      getProducts();

    }
  }, []);

  return (
    <>
      <Header></Header>
      <div className='bg-[#0B1C48] w-full' >
        <div className='pt-4 pb-4  gap-4 px-px min-h-screen w-full grid justify-items-center  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>

          {
            products.map((product) => {
              return <Link key={product.id} to={`/products/${product.id}`} > <ItemCard item={product} ></ItemCard> </Link>
            }
            )
          }
          {
            products.length<1?<h1 className='text-white'>Uyğun nəticə tapılmadı</h1>:''
          }
        </div>
        <div className='bg-orange-600 py-2' >

          Footer
        </div>
      </div>
    </>

  )
}

export default HomePage



