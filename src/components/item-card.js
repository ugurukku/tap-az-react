
import React from 'react'

const ItemCard = ({item}) => {
  return (
    <div key={item.id} className=' bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded overflow-hidden col-span-1 row-span-1 hover:scale-105'>
      <img
          className='h-full w-full max-h-[192px] max-w-[288px]  bg-center bg-cover bg-no-repeat '
        src={item.image} alt={item.title}
      />

      <div className='p-3 flex flex-col gap-3'>
        <div className="flex items-center gap-2">
          <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>{item.date}</span>
          <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>{item.city.name}</span>
        </div>

        <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap" title={item.title}>
       {item.title}
        </h2>

        <div className="price">
          <span className='text-xl font-bold text-pink-800'>
           {item.price} AZN
          </span>
        </div>

        <div className='mt-2 flex gap-2 justify-center'>
          <button className='bg-yellow-500  px-6 py-2 rounded-md text-white font-medium tracking-wider transition hover:bg-violet-700'>
          Səbətə əlavə et.
          </button>
        </div>

      </div>

    </div>
  )
}

export default ItemCard
