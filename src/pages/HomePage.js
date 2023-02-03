import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import ItemCard from '../components/item-card';
import { Link } from 'react-router-dom';
import { API, productURI } from '../utils/instance';

const HomePage = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const getProducts = async () => {
      const response = await API.get(productURI);
      setProducts(response.data);
    }
    getProducts();

  }, []);

  return (
    <>
      <Header></Header>


      <div className='bg-cyan-800 w-full' >
        <div className='pt-4 pb-4 min-h-screen w-full grid justify-items-center  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>

          {
            products.map((product) => {
              return <Link to={`/product/${product.id}`} > <ItemCard item={product} ></ItemCard> </Link>
            }
            )
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



