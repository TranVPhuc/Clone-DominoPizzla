import React, { useEffect, useState } from 'react';
import LaptopCard from '../Laptop/LaptopCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Swiper.css';
import axiosInstance from './configMobileAPI';

const Mobile = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const { data: response } = await axiosInstance.get('mobiles');
        console.log(response.items);
        setProductList(response.items);
      } catch (error) {
        console.error(error.message);
      }
      // setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="bg-black mt-[-16px] pb-[25px]">
      {/* Controller */}
      <div className="ml-[6rem]">
        <h1 className="font-bold text-[#44d62c]">MOBILE</h1>
        <p className="text-[#777] font-semibold text-xl">
          Gaming and lifestyle gear for seamless entertainment with your phone or tablet
        </p>
        <h2 className="font-bold text-white text-2xl">CONTROLLERS</h2>
        <p className="text-[#777] font-semibold text-xl">
          Bring your A-game anywhere with the Razer Kishi Android and iPhone controllers
        </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          navigation={{
            enabled: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {productList.map(
            (product, index) =>
              (index > 8) & (index <= 12) && (
                <SwiperSlide>
                  <LaptopCard
                    nameLaptop={product.nameLaptop}
                    imageProducts={product.imageProduct}
                    laptopComponent={product.latopComponent}
                    colorOption={product.colorOption}
                    price={product.price}
                  />
                </SwiperSlide>
              ),
          )}
        </Swiper>
      </div>

      {/* Android Gaming Device */}
      <div className="ml-[6rem]">
        <h2 className="font-bold text-white text-2xl">ANDROID GAMING DEVICES </h2>
        <p className="text-[#777] font-semibold text-xl">Experience a New era of handheld gaming with the Razer Edge</p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={{
            enabled: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {productList.map(
            (product, index) =>
              (index > 7) & (index <= 8) && (
                <SwiperSlide>
                  <LaptopCard
                    nameLaptop={product.nameLaptop}
                    imageProducts={product.imageProduct}
                    laptopComponent={product.latopComponent}
                    colorOption={product.colorOption}
                    price={product.price}
                  />
                </SwiperSlide>
              ),
          )}
        </Swiper>
      </div>

      {/* Audio */}
      <div className="ml-[6rem]">
        <h2 className="font-bold text-white text-2xl">AUDIO </h2>
        <p className="text-[#777] font-semibold text-xl">Lifestyle headphones and earbuds</p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          navigation={{
            enabled: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {productList.map(
            (product, index) =>
              (index > 3) & (index <= 7) && (
                <SwiperSlide>
                  <LaptopCard
                    nameLaptop={product.nameLaptop}
                    imageProducts={product.imageProduct}
                    laptopComponent={product.latopComponent}
                    colorOption={product.colorOption}
                    price={product.price}
                  />
                </SwiperSlide>
              ),
          )}
        </Swiper>
      </div>

      {/* Accessories */}
      <div className="ml-[6rem]">
        <h2 className="font-bold text-white text-2xl">ACCESSORIES </h2>
        <p className="text-[#777] font-semibold text-xl">Essential add-ons to maximize your smartphone</p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          navigation={{
            enabled: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {productList.map(
            (product, index) =>
              index <= 3 && (
                <SwiperSlide>
                  <LaptopCard
                    nameLaptop={product.nameLaptop}
                    imageProducts={product.imageProduct}
                    laptopComponent={product.latopComponent}
                    colorOption={product.colorOption}
                    price={product.price}
                  />
                </SwiperSlide>
              ),
          )}
        </Swiper>
      </div>

      {/* More */}
      <div className="mt-[4rem] ml-[6rem]">
        <div className="flex justify-start">
          <a className="w-[20%]  h-[18%] no-underline mr-[2rem] text-white" href="#">
            <span className="bg-[#222] block h-12  flex items-center pl-4 font-semibold">Anzu</span>
            <img src="/images/mobile-page-img/anzu.jpg" />
          </a>

          <a className="w-[20%]  h-[18%] no-underline text-white" href="#">
            <span className="bg-[#222] block h-12 flex items-center pl-4 font-semibold">THX Onyx</span>
            <img src="/images/mobile-page-img/onyx.jpg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
