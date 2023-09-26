import React, { useEffect, useState } from 'react';
import LaptopCard from '../Laptop/LaptopCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Swiper.css';
import axiosInstance from '../../../configAPI';
const Mice = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const { data: response } = await axiosInstance.get('mices');
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
      <div className="ml-[6rem]">
        <h1 className="font-bold text-[#44d62c]">GAMING MICE</h1>
        <p className="text-[#777] font-semibold text-xl">
          High-performance wired and wireless mice made for every gamer's hand
        </p>
        <h2 className="font-bold text-white text-2xl">THE RAZER VIPER RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">
          A range of ultra-lightweight, high-performance gaming mice bred for esports
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
              (index > 16) & (index <= 20) && (
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
        <h2 className="font-bold text-white text-2xl">THE RAZER COBRA RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">
          Compact, lightweight gaming mice made for all-round control, precision, and immersion
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
              (index > 12) & (index <= 16) && (
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
        <h2 className="font-bold text-white text-2xl">THE RAZER BASILISK RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">
          Feature-rich, highly customizable gaming mice designed to fit any playstyle
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

      <div className="ml-[6rem] mt-[3rem] mb-[3rem]">
        <h2 className="font-bold text-white text-2xl">THE RAZER DEATHADDER RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">
          Competitive gaming mice with an award-winning legacy of iconic ergonomics
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
              (index > 4) & (index <= 8) && (
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
        <h2 className="font-bold text-white text-2xl">OTHERS</h2>
        <p className="text-[#777] font-semibold text-xl">
          Beyond our flagship selection, lies a range of gear designed to meet the needs of every gamer
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
              index < 4 && (
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

export default Mice;
