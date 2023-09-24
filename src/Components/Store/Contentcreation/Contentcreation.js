import React from 'react';
import LaptopCard from '../Laptop/LaptopCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Swiper.css';

const Contentcreation = () => {
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
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Kraken Kitty V2 Pro - Black']}
              laptopComponent={'Wired RGB Headset with Interchangeable Ears'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/content-page-img/headset1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Kraken Kitty V2 - Quartz']}
              laptopComponent={'Wired RGB Headset with Kitty Ears'}
              price={'399.99'}
              itemNew={'NEW'}
              imageProducts={[
                {
                  src: '/images/content-page-img/headset2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Kraken Kitty V2 BT']}
              laptopComponent={'Wireless Bluetooth RGB Headset with Kitty Ears'}
              price={'399.99'}
              itemNew={'NEW'}
              imageProducts={[
                {
                  src: '/images/content-page-img/headset3.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Kraken Kitty - Black']}
              laptopComponent={'Razer Kitty Ear USB Headset with Chroma'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/content-page-img/headset4.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Kitty Ears V2 - Quartz']}
              laptopComponent={'Clip-On Kitty Cat Ear Headset Attachment'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/content-page-img/streamacc1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Blue Screen']}
              laptopComponent={'Collapsible Chroma Key Backdrop for Streaming'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/content-page-img/streamacc2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Stream Controller']}
              laptopComponent={'All-in-one Control Deck for Streaming'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/content-page-img/streamacc3.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Stream Controller X']}
              laptopComponent={'All-in-one Controller for Streaming'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/content-page-img/streamacc4.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer DeathStalker V2 Pro']}
              laptopComponent={'Wireless Low-Profile RGB Optical Gaming Keyboard'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/content-page-img/inear.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer DeathStalker V2 Pro']}
              laptopComponent={'Wireless Low-Profile RGB Optical Gaming Keyboard'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/content-page-img/webcam1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer DeathStalker V2 Pro Tenkeyless']}
              laptopComponent={'Optical Gaming Keyboard with Near-zero Input Latency'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/content-page-img/webcam2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer DeathStalker V2']}
              laptopComponent={'Low-Profile RGB Optical Gaming Keyboard'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/content-page-img/webcam3.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer DeathStalker V2']}
              laptopComponent={'Low-Profile RGB Optical Gaming Keyboard'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/content-page-img/webcam4.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer DeathStalker V2 Pro']}
              laptopComponent={'Wireless Low-Profile RGB Optical Gaming Keyboard'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/content-page-img/mic1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer DeathStalker V2 Pro Tenkeyless']}
              laptopComponent={'Optical Gaming Keyboard with Near-zero Input Latency'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/content-page-img/mic2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer DeathStalker V2']}
              laptopComponent={'Low-Profile RGB Optical Gaming Keyboard'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/content-page-img/mic3.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer DeathStalker V2']}
              laptopComponent={'Low-Profile RGB Optical Gaming Keyboard'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/content-page-img/mic4.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Contentcreation;
