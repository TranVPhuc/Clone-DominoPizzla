import React from 'react';
import LaptopCard from '../Laptop/LaptopCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Swiper.css';
const Audio = () => {
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
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer BlackWidow V4 Pro']}
              laptopComponent={'Mechanical Gaming Keyboard with Razer Chroma™ RGB'}
              price={'399.99'}
              salePrice={'799.99'}
              salePercentage={'8'}
              imageProducts={[
                {
                  src: '/images/audio-page-img/blackshark1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer BlackWidow V4 75%']}
              laptopComponent={'Hot-swappable Mechanical Gaming Keyboard'}
              price={'399.99'}
              itemNew={'NEW'}
              imageProducts={[
                {
                  src: '/images/audio-page-img/blackshark2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer BlackWidow V4']}
              laptopComponent={'Mechanical Gaming Keyboard with Razer Chroma™ RGB'}
              price={'399.99'}
              salePrice={'799.99'}
              salePercentage={'29'}
              imageProducts={[
                {
                  src: '/images/audio-page-img/blackshark3.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer BlackWidow V4 X']}
              laptopComponent={'Mechanical Gaming Keyboard with Razer Chroma™ RGB'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/audio-page-img/blackshark4.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Huntsman V2 Analog']}
              laptopComponent={'Gaming Keyboard with Razer™ Analog Optical Switches'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/audio-page-img/barracuda1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer Huntsman V2']}
              laptopComponent={'Optical Gaming Keyboard with Near-zero Input Latency'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/audio-page-img/barracuda2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Huntsman V2 Tenkeyless']}
              laptopComponent={'Tenkeyless Optical Gaming Keyboard'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/audio-page-img/barracuda3.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Huntsman Mini Analog']}
              laptopComponent={'60% Gaming Keyboard with Analog Optical Switches'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/audio-page-img/barracuda4.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer DeathStalker V2 Pro']}
              laptopComponent={'Wireless Low-Profile RGB Optical Gaming Keyboard'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/audio-page-img/speaker1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer DeathStalker V2 Pro Tenkeyless']}
              laptopComponent={'Optical Gaming Keyboard with Near-zero Input Latency'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/audio-page-img/speaker2.png',
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
                  src: '/images/audio-page-img/speaker3.png',
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
                  src: '/images/audio-page-img/speaker4.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
          <SwiperSlide>
            {' '}
            <LaptopCard
              nameLaptop={['Razer DeathStalker V2 Pro']}
              laptopComponent={'Wireless Low-Profile RGB Optical Gaming Keyboard'}
              price={'399.99'}
              imageProducts={[
                {
                  src: '/images/audio-page-img/kraken1.png',
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
                  src: '/images/audio-page-img/kraken2.png',
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
                  src: '/images/audio-page-img/kraken3.png',
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
                  src: '/images/audio-page-img/kraken4.png',
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

export default Audio;
