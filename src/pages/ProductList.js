import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import ItemCard from '../components/item-card';
import { Link, useNavigate } from 'react-router-dom';
import { API, productURI } from '../utils/instance';

const HomePage = ({user_id}) => {


  const [products, setProducts] = useState([])

  useEffect(() => {
    console.log(user_id);

    const param = window.location.href.split('=')[1];

    if (!isNaN(param)) {

      const getProducts = async () => {
        const response = await API.get(`${productURI}?category=${param}`);
        setProducts(response.data);
      }

      getProducts();

    }else if (user_id !== undefined) {
      const getProducts = async () => {
        const response = await API.get(`${productURI}?user=${user_id}`);
        setProducts(response.data);
      }

      getProducts();
    } else if (param?.length>2) {
      const getProducts = async () => {
        const response = await API.get(`${productURI}?user=${param}`);
        setProducts(response.data);
      }
      getProducts();
    }
    else {
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
      <div className='bg-[#0B1C48] h-full w-full' >
        <div className='pt-4 pb-4  gap-4 px-px min-h-screen w-full grid justify-items-center  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>

          {
            products.map((product) => {
              return <Link key={product.id} target='_blank' to={user_id!==undefined?`/my-products/${product.id}`:`/products/${product.id}`} > <ItemCard item={product} ></ItemCard> </Link>
            }
            )
          }
          {
            products.length < 1 ? <h1 className='text-white'>Uyğun nəticə tapılmadı</h1> : ''
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



