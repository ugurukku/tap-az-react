import React, { useEffect, useState } from 'react'
import Header from '../components/header';
import { API, productURI } from '../utils/instance';

const imageURI = "http://localhost:8080/images";

const ProductDetail = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState({});
  const [id, setId] = useState(0);

  useEffect(() => {
    const id = window.location.href.split('/')[4];

    setId(id);

    const getProduct = async (id) => {
      const response = await API.get(`${productURI}/${id}`);
      setItem(response.data);
    }
    getProduct(Number(id));

  }, []);

  const addCount = () => {
    setCount((prev) => prev + 1);

  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <>

      <Header></Header>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 min-h-screen text-white bg-[#284E60]">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
          {/* <!-- Description Div --> */}

          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-400"> Şəhər : {item.city?.name}  /  Kateqoriya : {item.category?.name}  /  Tarix : {item.date}</p>
            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-black mt-4">{item.title}</h2>

            <div className=" flex flex-row justify-between  mt-5">
             
              <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-400 hover:underline hover:text-gray-800 duration-100 cursor-pointer">22 geridönüş</p>
            </div>

            <p className=" font-normal text-base leading-6 mt-7">{item.description}</p>
            <p className=" font-semibold text-black lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">{item.price} AZN</p>

            <div className="lg:mt-11 mt-10">
              <div className="flex flex-row justify-between">
                <p className=" font-medium text-base leading-4 text-gray-400">Məhsul sayını seçin</p>
                <div className="flex">
                  <span onClick={() => minusCount()} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">
                    -
                  </span>
                  <input id="counter" aria-label="input" className="border border-gray-300 h-full text-center text-black w-14 pb-1" type="text" value={count} onChange={(e) => e.target.value} />
                  <span onClick={() => addCount()} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 ">
                    +
                  </span>
                </div>
              </div>

            </div>

            <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-[#FF4F08] w-full py-5 lg:mt-12 mt-6"> Səbətə əlavə et </button>
          </div>

          {/* <!-- Preview Images Div For larger Screen--> */}

          <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/1 justify-center flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
            <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
              <img src={`${imageURI}/${Number(id)}`} alt={item.title} />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail
