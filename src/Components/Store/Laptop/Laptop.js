import React from 'react';
import LaptopCard from './LaptopCard';
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Swiper.css';

const Laptop = () => {
  return (
    <div className="bg-black mt-[-16px] pb-[25px]">
      <div className="ml-[6rem]">
        <h1 className="font-bold text-[#44d62c]">GAMING LAPTOPS</h1>
        <p className="text-[#777] font-semibold text-xl">
          The most portable and powerful laptops for gamers, creators, and professionals
        </p>
        <h2 className="font-bold text-white text-2xl">GEFORCE RTX™ 40 SERIES LAPTOPS</h2>
        <p className="text-[#777] font-semibold text-xl">
          Discover our newest Razer Blades featuring the latest NVIDIA graphics cards, Intel, and AMD processors
        </p>
      </div>

      {/* GTX 40 series */}
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
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Blade 14 Models ']}
              laptopComponent={'NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9 7940HS Processor'}
              colorOption={''}
              imageProducts={[
                {
                  src: '/images/images-product/laptopimg1.png',
                  alt: 'product 1',
                },
              ]}
              price={'2,399.99'}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Blade 15 Models ']}
              laptopComponent={
                'NVIDIA® GeForce RTX™ 40 Series 15” Laptop with 13th Gen Intel® Core™ i7 Processor (14-Core)'
              }
              colorOption={'Now available in a sleek mercury or matte black finish.'}
              imageProducts={[
                {
                  src: '/images/images-product/laptopimg2.png',
                  alt: 'product 2',
                },
              ]}
              price={'2,499.99'}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Blade 16 Models ']}
              laptopComponent={
                'NVIDIA® GeForce RTX™ 40 Series 16” Laptop with 13th Gen Intel® Core™ i9 Processor (24-Core)'
              }
              colorOption={'Now available in a sleek mercury or matte black finish.'}
              imageProducts={[
                {
                  src: '/images/images-product/laptopimg3.png',
                  alt: 'product 3',
                },
              ]}
              price={'2,699.99'}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Blade 18 Models ']}
              laptopComponent={
                'NVIDIA® GeForce RTX™ 40 Series 18” Laptop with 13th Gen Intel® Core™ i9 Processor (24-Core)'
              }
              colorOption={'Now available in a sleek mercury or matte black finish.'}
              imageProducts={[
                {
                  src: '/images/images-product/laptopimg4.png',
                  alt: 'product 4',
                },
              ]}
              price={'2,899.99'}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* //Carousel banner */}
      <div className="mt-[15px]">
        <Carousel>
          <Carousel.Item>
            <div>
              <img className="relative z-0 max-h-[300px] " src="/images/laptop-store-banner/banner1.jpg" />
              <div className="absolute z-10 left-[60%] top-1/3">
                <p className="text-white text-2xl font-bold">MORE POWER THIS SUMMER</p>
                <p className="text-[#777] text-xl">GEAR UP FOR THIS ULTIMATE PRODUCTIVITY</p>
                <a className="no-underline text-[#44d62c] hover:underline text-[#44d62c]" href="#">
                  Shop now
                </a>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div>
              <img className="pr-10 relative z-0 max-h-[300px]" src="/images/laptop-store-banner/banner2.jpg" />
              <div className="absolute z-10 left-[60%] top-1/3">
                <p className="text-white text-2xl font-bold ">PRODUCE LIKE A PRO </p>
                <p className="text-[#777] text-xl max-w-[450px]">
                  For a limited time get a one-year license of FL Studio Producer Edition with the purchase of any Razer
                  laptop
                </p>
                <a className="no-underline text-[#44d62c] hover:underline text-[#44d62c] " href="#">
                  Learn More
                </a>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* GEFORCE RTX™ 30 SERIES LAPTOPS */}
      <div className="mt-[20px] ml-[6rem]">
        <h2 className="font-bold text-white text-2xl">GEFORCE RTX™ 30 SERIES LAPTOPS</h2>
        <p className="text-[#777] font-semibold text-xl">
          Discover our newest Razer Blades featuring the latest NVIDIA graphics cards, Intel, and AMD processors
        </p>
      </div>

      <div className="flex flex-row mt-[20px] justify-start ml-[6rem]">
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          navigation={{
            enabled: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Blade 14 Models ']}
              laptopComponent={'NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9 7940HS Processor'}
              colorOption={'Now available in a sleek mercury or matte black finish.'}
              imageProducts={[
                {
                  src: '/images/images-product/laptopimg1.png',
                  alt: 'product 1',
                },
              ]}
              price={'2,399.99'}
              salePrice={'2,399.99'}
              salePercentage={20}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Blade 15 Models ']}
              laptopComponent={
                'NVIDIA® GeForce RTX™ 40 Series 15” Laptop with 13th Gen Intel® Core™ i7 Processor (14-Core)'
              }
              colorOption={'Now available in a sleek mercury or matte black finish.'}
              imageProducts={[
                {
                  src: '/images/images-product/laptopimg2.png',
                  alt: 'product 2',
                },
              ]}
              price={'2,499.99'}
              salePrice={'2,399.99'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Blade 16 Models ']}
              laptopComponent={
                'NVIDIA® GeForce RTX™ 40 Series 16” Laptop with 13th Gen Intel® Core™ i9 Processor (24-Core)'
              }
              colorOption={'Now available in a sleek mercury or matte black finish.'}
              imageProducts={[
                {
                  src: '/images/images-product/laptopimg3.png',
                  alt: 'product 3',
                },
              ]}
              price={'2,699.99'}
              salePrice={'2,399.99'}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Blade 18 Models ']}
              laptopComponent={
                'NVIDIA® GeForce RTX™ 40 Series 18” Laptop with 13th Gen Intel® Core™ i9 Processor (24-Core)'
              }
              colorOption={'Now available in a sleek mercury or matte black finish.'}
              imageProducts={[
                {
                  src: '/images/images-product/laptopimg4.png',
                  alt: 'product 4',
                },
              ]}
              price={'2,899.99'}
              salePrice={'2,399.99'}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* option */}
      <div className="mt-[20px] flex justify-evenly items-start content-start">
        <div className="self-stretch flex-col flex">
          <p className="text-white font-bold text-xl">CHOOSING YOUR BLADE: A BUYER’S GUIDE</p>
          <a className="no-underline text-white flex flex-auto flex-col" href="#">
            <span className="bg-[#222] block h-12 flex items-center pl-4 font-semibold">
              Pro Tips for Finding Your Perfect Gaming Laptop
            </span>
            <img className="flex-auto" src="/images/tips-image/pro-tips.jpg" />
          </a>
        </div>
        <div>
          <p className="text-white font-bold text-xl">COMPLETE YOUR RAZER EXPERIENCE</p>
          <a className="no-underline text-white" href="#">
            <div className="mb-[15px]">
              <span className="bg-[#222] block h-12 flex items-center pl-4 font-semibold">Razer Accessories</span>
              <img src="/images/tips-image/accessories.jpg" />
            </div>
            <div>
              <span className="bg-[#222] block h-12 flex items-center pl-4 font-semibold">Razer Care</span>
              <img src="/images/tips-image/razercare.jpg" />
            </div>
          </a>
        </div>
      </div>

      {/* More */}
      <div className="mt-[4rem]">
        <p className="ml-[11.2rem] text-white text-lg font-bold">
          SECURE THE UNFAIR ADVANTAGE FOR YOUR BUSINESS, SCHOOL, AND MORE
        </p>
        <div className="flex justify-evenly">
          <a className="no-underline text-white" href="#">
            <span className="bg-[#222] block h-12  flex items-center pl-4 font-semibold">Razer Last Chance</span>
            <img src="/images/more/img1.jpg" />
          </a>

          <a className="no-underline text-white" href="#">
            <span className="bg-[#222] block h-12 flex items-center pl-4 font-semibold">
              Razer Certificated Refurbished
            </span>
            <img src="/images/more/img2.jpg" />
          </a>

          <a className="no-underline text-white" href="#">
            <span className="bg-[#222] block h-12 flex items-center pl-4 font-semibold">Razer Purchase Program</span>
            <img src="/images/more/img3.jpg" />
          </a>

          <a className="no-underline text-white" href="#">
            <span className="bg-[#222] block h-12 flex items-center pl-4 font-semibold">Play Now, Pay Over Time</span>
            <img src="/images/more/img4.jpg" />
          </a>
        </div>
      </div>

      {/* Term & Condition */}
      <div className="mt-[3rem] w-[75%] ml-[15%] border-t border-b pb-[20px] pt-[20px] ">
        <p className=" text-white">
          Basilsk V3 X HyperSpeed with Razer Blade 2023 Gift with purchase - Terms & Conditions
        </p>
        <div className="text-sm pl-[-10px]">
          <span className="block text-[#777]">
            1. The offer cannot be combined with any other offers, discounts, promotions or redemptions.
          </span>
          <span className="block text-[#777]">
            2. The offer is valid with the purchase of any Razer Blade powered by the 13th Gen Intel® Core™ or AMD
            Ryzen™ 9 7940HS processors.
          </span>
          <span className="block text-[#777]">
            3. Availability of products is limited, and offers shall only be valid while stocks last.
          </span>
          <span className="block text-[#777]">
            4. Offers are only applicable for purchases made on RazerStore and cannot be combined with any other offers.
          </span>
          <span className="block text-[#777]"> 5. Razer reserves the right to cancel any bulk orders.</span>
          <span className="block text-[#777]">
            6. Razer reserves the right to withdraw, terminate or amend the terms of this promotion at any time.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
