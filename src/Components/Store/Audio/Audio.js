import React, { useEffect, useState } from 'react';
import LaptopCard from '../Laptop/LaptopCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Swiper.css';
import axiosInstance from './configAudioAPI';
const Audio = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const { data: response } = await axiosInstance.get('audios');
        setProductList(response.items);
        console.log(response.items);
      } catch (error) {
        console.error(error.message);
      }
      // setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="bg-black mt-[-16px] pb-[25px]">
      <div className="ml-[6rem]">
        <h1 className="font-bold text-[#44d62c]">GAMING AUDIO</h1>
        <p className="text-[#777] font-semibold text-xl">
          Explore Razer headsets, wireless headphones, earphones for gaming & broadcasting
        </p>
        <h2 className="font-bold text-white text-2xl">THE RAZER BLACKSHARK RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">
          Acclaimed esports headsets designed for all-out performance and comfort
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
              (index > 11) & (index <= 15) && (
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

      <div className="ml-[6rem] mt-[3rem] mb-[3rem]">
        <h2 className="font-bold text-white text-2xl">THE RAZER BARRACUDA RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">
          Versatile wireless hybrid headsets for home gaming and street living
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
              (index > 7) & (index <= 11) && (
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

      <div className="ml-[6rem] mt-[3rem] mb-[3rem]">
        <h2 className="font-bold text-white text-2xl">RAZER SPEAKERS</h2>
        <p className="text-[#777] font-semibold text-xl">
          Soundbars and full range speakers to amplify your entertainment
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

      <div className="ml-[6rem] mt-[3rem] mb-[3rem]">
        <h2 className="font-bold text-white text-2xl">THE RAZER KRAKEN RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">
          Immersive haptic headsets powered by Razer Chroma™ RGB and Razer HyperSense
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
    </div>
  );
};

export default Audio;
