import React, { useEffect, useState } from 'react';
import LaptopCard from '../Laptop/LaptopCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Swiper.css';
import axiosInstance from './configConsoleAPI';

const Console = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const { data: response } = await axiosInstance.get('consoles');
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
      {/* // Console */}
      <div className="ml-[6rem]">
        <h1 className="font-bold text-[#44d62c]">CONSOLE</h1>
        <p className="text-[#777] font-semibold text-xl">
          Gaming audio, controllers, and accessories for Xbox and PlayStation
        </p>
        <h2 className="font-bold text-white text-2xl">ALL-BUTTON ARCADE CONTROLLERS</h2>
        <p className="text-[#777] font-semibold text-xl">
          Perfect your execution with a quad movement button layout and lightning-fast optical switches
        </p>
      </div>
      <div className="flex flex-row justify-start ml-[6rem]">
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          navigation={{
            enabled: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {productList.map(
            (product, index) =>
              (index > 26) & (index <= 29) && (
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

      {/* Earbuds */}
      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">EARBUDS </h2>
        <p className="text-[#777] font-semibold text-xl">
          Enjoy seamless wireless audio with the Razer HammerHead HyperSpeed for Console
        </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          navigation={{
            enabled: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {productList.map(
            (product, index) =>
              (index > 23) & (index <= 26) && (
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
      {/* Controller */}
      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">CONTROLLERS</h2>
        <p className="text-[#777] font-semibold text-xl">
          Unlock enhanced control and customization with the Razer Wolverine V2 range
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
              (index > 19) & (index <= 23) && (
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

      {/* Collab */}
      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">CONTROLLERS</h2>
        <p className="text-[#777] font-semibold text-xl">
          Unlock enhanced control and customization with the Razer Wolverine V2 range
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
              (index > 15) & (index <= 19) && (
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

      {/* Quick charge */}
      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">QUICK CHARGING STANDS & BUNDLES </h2>
        <p className="text-[#777] font-semibold text-xl">Accessories and sets to round out your setup </p>
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
              (index > 14) & (index <= 18) && (
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

      {/* Meta Gear */}
      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">QUICK CHARGING STANDS & BUNDLES </h2>
        <p className="text-[#777] font-semibold text-xl">Accessories and sets to round out your setup </p>
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
              (index > 10) & (index <= 14) && (
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

      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">QUICK CHARGING STANDS & BUNDLES </h2>
        <p className="text-[#777] font-semibold text-xl">Accessories and sets to round out your setup </p>
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
              (index > 6) & (index <= 10) && (
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

      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">QUICK CHARGING STANDS & BUNDLES </h2>
        <p className="text-[#777] font-semibold text-xl">Accessories and sets to round out your setup </p>
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
              (index > 2) & (index <= 6) && (
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

      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">QUICK CHARGING STANDS & BUNDLES </h2>
        <p className="text-[#777] font-semibold text-xl">Accessories and sets to round out your setup </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          navigation={{
            enabled: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {productList.map(
            (product, index) =>
              index <= 2 && (
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

export default Console;
