import React, { useEffect, useState } from 'react';
import LaptopCard from '../Laptop/LaptopCard';
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Swiper.css';
import axiosInstance from './configChairAPI';

const Chairs = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const { data: response } = await axiosInstance.get('chairs');
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
      {/* Collab */}
      <div className="ml-[6rem]">
        <h1 className="font-bold text-[#44d62c]">GAMING CHAIRS</h1>
        <p className="text-[#777] font-semibold text-xl">
          Award-winning ergonomics and comfort for countless hours of gaming
        </p>
        <h2 className="font-bold text-white text-2xl">COLLABS</h2>
        <p className="text-[#777] font-semibold text-xl">
          Officially licensed designs featuring the hottest brands and games
        </p>
      </div>
      <div className="flex flex-row justify-start ml-[6rem]">
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          navigation={{
            enabled: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {productList.map(
            (product, index) =>
              (index > 16) & (index <= 18) && (
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

      <div className="ml-[6rem]">
        <h2 className="font-bold text-white text-2xl">THE RAZER ENKI RANGE </h2>
        <p className="text-[#777] font-semibold text-xl">Gaming chairs optimized for all-day gaming comfort </p>
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

      <div className="mt-[15px]">
        <Carousel>
          <Carousel.Item>
            <div>
              <img className="relative z-0 max-h-[300px] " src="/images/chair-page-img/bannerImg1.jpg" />
              <div className="absolute z-10 left-[10%] top-1/3">
                <p className="text-white text-2xl  font-bold">LICENSED EDITIONS</p>
                <p className="text-[#777] w-1/2 h-1/2 text-xl">
                  Display your passion with fresh designs created in colaaboration with the hottest brands
                </p>
                <a className="no-underline text-[#44d62c] hover:underline text-[#44d62c]" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div>
              <img className="pr-10 relative z-0 max-h-[300px]" src="/images/chair-page-img/bannerImg2.jpg" />
              <div className="absolute z-10 left-[10%] top-1/3">
                <p className="text-white text-2xl font-bold ">RAZER ISKUR XL </p>
                <p className="text-[#777] text-xl max-w-[450px]">
                  Go big on support with a design that's 15% larger than our standard model
                </p>
                <a className="no-underline text-[#44d62c] hover:underline text-[#44d62c] " href="#">
                  Learn More
                </a>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="ml-[6rem]">
        <h2 className="font-bold text-white text-2xl">THE RAZER ENKI RANGE </h2>
        <p className="text-[#777] font-semibold text-xl">Gaming chairs optimized for all-day gaming comfort </p>
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

      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">ACCESSORIES </h2>
        <p className="text-[#777] font-semibold text-xl">Head and lumbar cushions, rugs and mats, chair studs </p>
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

      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">ACCESSORIES </h2>
        <p className="text-[#777] font-semibold text-xl">Head and lumbar cushions, rugs and mats, chair studs </p>
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
              index <= 4 && (
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

export default Chairs;
