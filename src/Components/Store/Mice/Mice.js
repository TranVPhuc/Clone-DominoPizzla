import React from 'react'
import LaptopCard from '../Laptop/LaptopCard';
const Mice = () => {
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
        <LaptopCard
          nameLaptop={'Razer Viper V2 Pro + HyperPolling Wireless Dongle Bundle'}
          price={'399.99'}
          salePrice={'799.99'}
          salePercentage={'8'}
          imageProducts={[
            {
              src: '/images/mice-page-img/viper1.png',
              alt: 'product 1',
            },
            {
              src: '/images/mice-page-img/viper1.1.png',
              alt: 'product 1',
            },
            {
              src: '/images/mice-page-img/viper1.2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Viper V2 Pro'}
          laptopComponent={'Ultra-lightweight, Ultra-fast Wireless Esports Mouse'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/mice-page-img/viper2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Viper V3 HyperSpeed + HyperPolling Wireless Dongle Bundle'}
          price={'399.99'}
          salePrice={'799.99'}
          salePercentage={'29'}
          imageProducts={[
            {
              src: '/images/mice-page-img/viper3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Viper V3 HyperSpeed + HyperPolling Wireless Dongle Bundle'}
          laptopComponent={'Wireless Esports Mouse'}
          price={'399.99'}
          itemNew={'NEW'}
          imageProducts={[
            {
              src: '/images/mice-page-img/viper4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      <div className="ml-[6rem] mt-[3rem] mb-[3rem]">
        <h2 className="font-bold text-white text-2xl">THE RAZER COBRA RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">
          Compact, lightweight gaming mice made for all-round control, precision, and immersion
        </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer Cobra Pro + Mouse Dock Pro Bundle'}
          price={'399.99'}
          salePrice={'799.99'}
          salePercentage={'8'}
          imageProducts={[
            {
              src: '/images/mice-page-img/cobra1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Cobra Pro + HyperPolling Wireless Dongle Bundle'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/mice-page-img/cobra2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Cobra Pro + Wireless Charging Puck Bundle'}
          price={'399.99'}
          salePrice={'799.99'}
          salePercentage={'29'}
          imageProducts={[
            {
              src: '/images/mice-page-img/cobra3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Cobra Pro'}
          laptopComponent={'Customizable Wireless Gaming Mouse with Razer Chroma™ RGB'}
          exclusive={'NEW'}
          imageProducts={[
            {
              src: '/images/mice-page-img/cobra4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      <div className="ml-[6rem] mt-[3rem] mb-[3rem]">
        <h2 className="font-bold text-white text-2xl">THE RAZER BASILISK RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">
          Feature-rich, highly customizable gaming mice designed to fit any playstyle
        </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer Basilisk V3 Pro + Mouse Dock Pro Bundle'}
          price={'399.99'}
          salePrice={'799.99'}
          salePercentage={'8'}
          imageProducts={[
            {
              src: '/images/mice-page-img/basilisk1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Basilisk V3 Pro - Black'}
          laptopComponent={'Customizable Wireless Gaming Mouse with Razer HyperScroll Tilt Wheel'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/mice-page-img/basilisk2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Basilisk V3'}
          laptopComponent={'Customizable Gaming Mouse with Razer Chroma™ RGB'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/mice-page-img/basilisk3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Basilisk V3 X HyperSpeed'}
          laptopComponent={'Customizable Wireless Gaming Mouse with RGB Lighting'}
          exclusive={'EXCLUSIVE'}
          imageProducts={[
            {
              src: '/images/mice-page-img/basilisk4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      <div className="ml-[6rem] mt-[3rem] mb-[3rem]">
        <h2 className="font-bold text-white text-2xl">THE RAZER BASILISK RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">
          Feature-rich, highly customizable gaming mice designed to fit any playstyle
        </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer Naga V2 Pro + Mouse Dock Pro Bundle'}
          price={'399.99'}
          salePrice={'799.99'}
          salePercentage={'8'}
          imageProducts={[
            {
              src: '/images/mice-page-img/naga1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Naga V2 Pro'}
          laptopComponent={'MMO Wireless Gaming Mouse with HyperScroll Pro Wheel'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/mice-page-img/naga2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Naga V2 HyperSpeed'}
          laptopComponent={'Ergonomic Wireless MMO Gaming Mouse with 19 Programmable Buttons'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/mice-page-img/naga3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Naga Left-Handed Edition'}
          laptopComponent={'Ergonomic MMO Gaming Mouse for Left-Handed Users'}
          exclusive={'EXCLUSIVE'}
          imageProducts={[
            {
              src: '/images/mice-page-img/naga4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      <div className="ml-[6rem] mt-[3rem] mb-[3rem]">
        <h2 className="font-bold text-white text-2xl">THE RAZER DEATHADDER RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">
          Competitive gaming mice with an award-winning legacy of iconic ergonomics{' '}
        </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer DeathAdder V3 Pro + HyperPolling Wireless Dongle'}
          price={'399.99'}
          salePrice={'799.99'}
          salePercentage={'8'}
          imageProducts={[
            {
              src: '/images/mice-page-img/deathadder1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer DeathAdder V3'}
          laptopComponent={'Ultra-lightweight Ergonomic Esports Mouse'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/mice-page-img/deathadder2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Ultra-lightweight Ergonomic Esports Mouse'}
          laptopComponent={'Wireless gaming mouse with best-in-class ergonomics'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/mice-page-img/deathadder3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer DeathAdder V2 X HyperSpeed'}
          laptopComponent={'Wireless Gaming Mouse with Best-In-Class Ergonomics'}
          exclusive={'EXCLUSIVE'}
          imageProducts={[
            {
              src: '/images/mice-page-img/deathadder4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      <div className="ml-[6rem] mt-[3rem] mb-[3rem]">
        <h2 className="font-bold text-white text-2xl">THE RAZER DEATHADDER RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">
          Competitive gaming mice with an award-winning legacy of iconic ergonomics{' '}
        </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer Orochi V2 - Black'}
          laptopComponent={'Mobile Wireless Gaming Mouse with up to 950 Hours of Battery Life'}
          price={'399.99'}
          salePrice={'799.99'}
          salePercentage={'8'}
          imageProducts={[
            {
              src: '/images/mice-page-img/other1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Pro Click'}
          laptopComponent={'High-precision ergonomic wireless mouse for productivity'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/mice-page-img/other2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Pro Click Mini'}
          laptopComponent={'Portable Wireless Mouse for Productivity'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/mice-page-img/other3.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Mice