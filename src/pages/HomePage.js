import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import hphone from '../assets/headphone.jpg';
import backpack from '../assets/backpack.jpg';
import bicycle from '../assets/bicycle.jpg';
import camera from '../assets/camera.jpg';
import shoes from '../assets/shoes.jpg';
import sunglasses from '../assets/sunglasses.jpg';
import watch from '../assets/watch.jpg';
import ItemCard from '../components/item-card';
import { Link } from 'react-router-dom';



const HomePage = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts([
      {
        image: backpack,
        name: 'Bel çantası',
        price: 45.20,
      },
      {
        image: bicycle,
        name: 'Qəşəy velosiped',
        price: 245,
      },
      {
        image: camera,
        name: 'Leica kamera',
        price: 540,
      },
      {
        image: hphone,
        name: 'JBL qulaqlıq',
        price: 110,
      },
      {
        image: shoes,
        name: 'Qaqa ayaqqabısı',
        price: 65,
      },
      {
        image: sunglasses,
        name: 'Geydirmə rayban eynək',
        price: 13.50,
      },
      {
        image: watch,
        name: 'Rolex saat',
        price: 12000,
      },

    ])
  }, []);

  return (
    <>
      <Header></Header>


      <div className='bg-cyan-800 ' >
        <div className='pt-4 pb-4 h-full grid justify-items-center  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>

          {
            products.map(product => (

              <Link to="/products/12" className='w-72'>
                <ItemCard details={{ name: product.name, image: product.image, price: product.price }} ></ItemCard>
              </Link>
            ))
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



