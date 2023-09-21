import React from 'react'
import LaptopCard from '../Laptop/LaptopCard';
const Keyboards = () => {
  return (
    <div className="bg-black mt-[-16px] pb-[25px]">
      <div className="ml-[6rem]">
        <h1 className="font-bold text-[#44d62c]">GAMING KEYBOARDS</h1>
        <p className="text-[#777] font-semibold text-xl">Full-sized, Tenkeyless, and 60% keyboards</p>
        <h2 className="font-bold text-white text-2xl">THE RAZER BLACKWIDOW RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">Mechanical gaming keyboards powered by Razer Chroma™ RGB</p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer BlackWidow V4 Pro'}
          laptopComponent={'Mechanical Gaming Keyboard with Razer Chroma™ RGB'}
          price={'399.99'}
          salePrice={'799.99'}
          salePercentage={'8'}
          imageProducts={[
            {
              src: '/images/keyboard-page-img/blackwidow1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer BlackWidow V4 75%'}
          laptopComponent={'Hot-swappable Mechanical Gaming Keyboard'}
          price={'399.99'}
          itemNew={'NEW'}
          imageProducts={[
            {
              src: '/images/keyboard-page-img/blackwidow2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer BlackWidow V4'}
          laptopComponent={'Mechanical Gaming Keyboard with Razer Chroma™ RGB'}
          price={'399.99'}
          salePrice={'799.99'}
          salePercentage={'29'}
          imageProducts={[
            {
              src: '/images/keyboard-page-img/blackwidow3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer BlackWidow V4 X'}
          laptopComponent={'Mechanical Gaming Keyboard with Razer Chroma™ RGB'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/keyboard-page-img/blackwidow4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      <div className="ml-[6rem] mt-[3rem] mb-[3rem]">
        <h2 className="font-bold text-white text-2xl">THE RAZER HUNTSMAN RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">
          Esports optical keyboards for unrivalled speed and responsiveness
        </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer Huntsman V2 Analog'}
          laptopComponent={'Gaming Keyboard with Razer™ Analog Optical Switches'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/keyboard-page-img/huntsman1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Huntsman V2'}
          laptopComponent={'Optical Gaming Keyboard with Near-zero Input Latency'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/keyboard-page-img/huntsman2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Huntsman V2 Tenkeyless'}
          laptopComponent={'Tenkeyless Optical Gaming Keyboard'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/keyboard-page-img/huntsman3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Huntsman Mini Analog'}
          laptopComponent={'60% Gaming Keyboard with Analog Optical Switches'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/keyboard-page-img/huntsman4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      <div className="ml-[6rem] mt-[3rem] mb-[3rem]">
        <h2 className="font-bold text-white text-2xl">THE RAZER DEATHSTALKER RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">Ergonomic low-profile optical keyboards for work and play</p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer DeathStalker V2 Pro'}
          laptopComponent={'Wireless Low-Profile RGB Optical Gaming Keyboard'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/keyboard-page-img/deathstalker1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer DeathStalker V2 Pro Tenkeyless'}
          laptopComponent={'Optical Gaming Keyboard with Near-zero Input Latency'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/keyboard-page-img/deathstalker2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer DeathStalker V2'}
          laptopComponent={'Low-Profile RGB Optical Gaming Keyboard'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/keyboard-page-img/deathstalker3.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      <div className="ml-[6rem] mt-[3rem] mb-[3rem]">
        <h2 className="font-bold text-white text-2xl">THE RAZER DEATHSTALKER RANGE</h2>
        <p className="text-[#777] font-semibold text-xl">Ergonomic low-profile optical keyboards for work and play</p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer DeathStalker V2 Pro'}
          laptopComponent={'Wireless Low-Profile RGB Optical Gaming Keyboard'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/keyboard-page-img/other1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer DeathStalker V2 Pro Tenkeyless'}
          laptopComponent={'Optical Gaming Keyboard with Near-zero Input Latency'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/keyboard-page-img/other2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer DeathStalker V2'}
          laptopComponent={'Low-Profile RGB Optical Gaming Keyboard'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/keyboard-page-img/other3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer DeathStalker V2'}
          laptopComponent={'Low-Profile RGB Optical Gaming Keyboard'}
          price={'399.99'}
          imageProducts={[
            {
              src: '/images/keyboard-page-img/other4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Keyboards