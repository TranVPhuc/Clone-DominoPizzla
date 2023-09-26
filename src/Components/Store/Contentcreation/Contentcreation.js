import React, { useEffect, useState } from 'react';
import LaptopCard from '../Laptop/LaptopCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Swiper.css';
import axiosInstance from './configContentCreationAPI';

const Contentcreation = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const { data: response } = await axiosInstance.get('contentcreations');
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
        <h1 className="font-bold text-[#44d62c]">CONTENT CREATION</h1>
        <p className="text-[#777] font-semibold text-xl">
          Create without limits with our professional webcams, microphones, and more
        </p>
        <h2 className="font-bold text-white text-2xl">HEADSETS</h2>
        <p className="text-[#777] font-semibold text-xl">Stand out on any stream in both look and sound</p>
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
        <h2 className="font-bold text-white text-2xl">OTHER STREAMING ACCESSORIES</h2>
        <p className="text-[#777] font-semibold text-xl">
          From capture cards to ARGB controllers, to analog audio mixers and lights
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
        <h2 className="font-bold text-white text-2xl">IN-EAR MONITOR</h2>
        <p className="text-[#777] font-semibold text-xl">
          Ergonomic wireless IEM for all-day streaming and content creation
        </p>
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

      <div className="ml-[6rem] mt-[3rem] mb-[3rem]">
        <h2 className="font-bold text-white text-2xl">WEBCAMS</h2>
        <p className="text-[#777] font-semibold text-xl">Always look your best on stream with the Razer Kiyo range</p>
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
        <h2 className="font-bold text-white text-2xl">MICROPHONES</h2>
        <p className="text-[#777] font-semibold text-xl">
          Cut through the noise and bring your voice to life with the Razer Seiren range
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

export default Contentcreation;
