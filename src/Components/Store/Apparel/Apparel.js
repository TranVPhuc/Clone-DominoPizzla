import React, { useEffect, useState } from 'react';
import LaptopCard from '../Laptop/LaptopCard';
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Swiper.css';
import axiosInstance from './configApparelAPI';

const Apparel = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const { data: response } = await axiosInstance.get('apparels');
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
      <div className="ml-[6rem] ">
        <h1 className="font-bold text-[#44d62c]">APPAREL & GEAR</h1>
        <p className="text-[#777] font-semibold text-xl">Lifestyle accessories and apparel for the gaming community</p>
      </div>
      <div className="mt-[15px]">
        <Carousel>
          <Carousel.Item>
            <div>
              <img className="pr-10 relative z-0 max-h-[300px]" src="/images/apparel-page-img/banner.jpg" />
              <div className="absolute z-10 left-[60%] top-1/3">
                <p className="text-white text-2xl font-bold ">RAZER XANTHUS COLLECTIONE </p>
                <p className="text-[#777] text-xl max-w-[450px]">THE FUSION OF ULTILITY AND STYLE</p>
                <a className="no-underline text-[#44d62c] hover:underline text-[#44d62c] " href="#">
                  Learn More
                </a>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Bag */}
      <div className="ml-[6rem] mt-[4rem]">
        <h2 className="font-bold text-white text-2xl">BAGS</h2>
        <p className="text-[#777] font-semibold text-xl">Built for those who carry hard</p>
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

      {/* Tops */}
      <div className="ml-[6rem] mt-[4rem]">
        <h2 className="font-bold text-white text-2xl">TOPS</h2>
        <p className="text-[#777] font-semibold text-xl">Tees, tanks, shirts</p>
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

      {/* Bottom */}
      <div className="ml-[6rem] mt-[4rem]">
        <span className="font-bold text-white text-2xl">BOTTOMS</span>
        <p className="text-[#777] font-semibold text-xl">Shorts, cargo shorts, jeans, leggings</p>
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

      {/* Outerwear */}
      <div className="ml-[6rem] mt-[4rem]">
        <span className="font-bold text-white text-2xl">OUTERWEAR</span>
        <p className="text-[#777] font-semibold text-xl">Hoodies, bomber jackets, track jackets</p>
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

      <div className="ml-[6rem] mt-[4rem]">
        <span className="font-bold text-white text-2xl">SNEKI SNEK </span>
        <p className="text-[#777] font-semibold text-xl">Plushies, cushions, hoodies, and other adorable merch </p>
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

      <div className="ml-[6rem] mt-[4rem]">
        <span className="font-bold text-white text-2xl">OTHERS </span>
        <p className="text-[#777] font-semibold text-xl">Laptop sleeves, water bottles, masks, and more </p>
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

export default Apparel;
