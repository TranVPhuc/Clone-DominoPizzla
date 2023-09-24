import React from 'react';
import LaptopCard from '../Laptop/LaptopCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Swiper.css';

const Mobile = () => {
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
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Kishi V2 Pro for Android (Xbox)']}
              laptopComponent={'Razer Kishi V2 Pro for Android (Xbox)'}
              price={'399.99'}
              itemNew={'NEW'}
              imageProducts={[
                {
                  src: '/images/mobile-page-img/controller1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Kishi V2 Pro for Android']}
              laptopComponent={'Android Gaming Controller'}
              price={'399.99'}
              itemNew={'NEW'}
              imageProducts={[
                {
                  src: '/images/mobile-page-img/controller2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Kishi V2 for iPhone (Xbox)']}
              laptopComponent={'Universal Mobile Gaming Controller for iPhone'}
              price={'399.99'}
              itemNew={'NEW'}
              imageProducts={[
                {
                  src: '/images/mobile-page-img/controller3.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Kishi V2 for iPhone']}
              laptopComponent={'Universal Mobile Gaming Controller for iPhone'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/mobile-page-img/controller4.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Edge Gaming Tablet and Kishi V2 Pro Controller']}
              laptopComponent={'Android Gaming Handheld'}
              price={'399.99'}
              exclusive={'EXCLUSIVE'}
              imageProducts={[
                {
                  src: '/images/mobile-page-img/androidGamingDevice.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Hammerhead Pro HyperSpeed']}
              laptopComponent={
                'True Wireless Gaming Earbuds with Razer™ HyperSpeed Wireless, Razer Chroma™ RGB, and Bluetooth 5.3'
              }
              colorOption={
                'Get 50% off the Razer Charging Pad Chroma when you purchase a Razer Hammerhead Pro HyperSpeed'
              }
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/mobile-page-img/earbud1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Hammerhead True Wireless - Black']}
              laptopComponent={'Wireless Low Latency Earbuds with Razer Chroma™ RGB'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/mobile-page-img/earbud2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Opus - Black']}
              laptopComponent={'Wireless THX® Certified Headphones with Advanced Active Noise Cancellation'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/mobile-page-img/headphone1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer x *A Bathing Ape® Opus']}
              laptopComponent={'Wireless THX® Certified Headphones with Advanced Active Noise Cancellation'}
              price={'399.99'}
              exclusive={'EXCLUSIVE'}
              imageProducts={[
                {
                  src: '/images/mobile-page-img/headphone2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Charging Pad Chroma']}
              laptopComponent={'10W Fast Wireless Charger with Razer Chroma RGB'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/mobile-page-img/acc1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>

          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Phone Cooler Chroma - MagSafe Compatible - MagSafe Compatible']}
              laptopComponent={'Smartphone Cooling Fan with Razer Chroma™ RGB'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/mobile-page-img/acc2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Phone Cooler Chroma - Universal Clamp - Universal Clamp']}
              laptopComponent={'Smartphone Cooling Fan with Razer Chroma™ RGB'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/mobile-page-img/acc3.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Arctech Pro for iPhone 13 Pro']}
              laptopComponent={'Protective Smartphone Case with Thermaphene™ Cooling Technology'}
              price={'399.99'}
              exclusive={'EXCLUSIVE'}
              imageProducts={[
                {
                  src: '/images/mobile-page-img/acc4.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
