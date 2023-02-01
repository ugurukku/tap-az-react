import React, { useEffect, useState } from 'react'
import Header from '../components/header'
// import hphone from '../assets/headphone.jpg';
// import backpack from '../assets/backpack.jpg';
// import bicycle from '../assets/bicycle.jpg';
// import camera from '../assets/camera.jpg';
// import shoes from '../assets/shoes.jpg';
// import sunglasses from '../assets/sunglasses.jpg';
// import watch from '../assets/watch.jpg';
import ItemCard from '../components/item-card';
import { Link } from 'react-router-dom';
import { API } from '../utils/instance';

// {
//   image: backpack,
//   name: 'Bel çantası',
//   price: 45.20,
// },
// {
//   image: bicycle,
//   name: 'Qəşəy velosiped',
//   price: 245,
// },
// {
//   image: camera,
//   name: 'Leica kamera',
//   price: 540,
// },
// {
//   image: hphone,
//   name: 'JBL qulaqlıq',
//   price: 110,
// },
// {
//   image: shoes,
//   name: 'Qaqa ayaqqabısı',
//   price: 65,
// },
// {
//   image: sunglasses,
//   name: 'Geydirmə rayban eynək',
//   price: 13.50,
// },
// {
//   image: watch,
//   name: 'Rolex saat',
//   price: 12000,
// },


const HomePage = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const getProducts = async () => {
      const response = await API.get();
      setProducts(response.data);
    }
    getProducts();

  }, []);

  return (
    <>
      <Header></Header>


      <div className='bg-cyan-800 w-full' >
        <div className='pt-4 pb-4 h-full w-full grid justify-items-center  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>

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



