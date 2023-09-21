import React from 'react'
import LaptopCard from '../Laptop/LaptopCard';
import Carousel from 'react-bootstrap/Carousel';
const Component = () => {
  return (
    <div className="bg-black mt-[-16px] pb-[25px]">
      <div className="ml-[6rem]">
        <h1 className="font-bold text-[#44d62c]">PC COMPONENTS</h1>
        <p className="text-[#777] font-semibold text-xl">
          Build the perfect gaming rig from our selection of top-shelf PC parts
        </p>
        <h2 className="font-bold text-white text-2xl">GAMING MONITORS</h2>
        <p className="text-[#777] font-semibold text-xl">
          Top-of-the-line, high-refresh rate QHD monitors for the smoothest, sharpest gaming experience
        </p>
      </div>

      {/* Monitor */}
      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer Raptor 27 - 1440P - 165 Hz'}
          laptopComponent={'The Ultimate Gaming Monitor'}
          price={'399.99'}
          salePrice={'799.99'}
          salePercentage={'50'}
          imageProducts={[
            {
              src: '/images/components-page-img/img1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Raptor 27 - 1440P - 165 Hz'}
          laptopComponent={'The Ultimate Gaming Monitor'}
          price={'399.99'}
          salePrice={'799.99'}
          salePercentage={'50'}
          imageProducts={[
            {
              src: '/images/components-page-img/img2.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      {/* Case and Controller */}
      <div className="mt-[20px] ml-[6rem]">
        <h2 className="font-bold text-white text-2xl">DESKTOP CASES & CONTROLLERS</h2>
        <p className="text-[#777] font-semibold text-xl">
          Mini-ITX and mid-tower ATX gaming chassis, PWM fan and ARGB controllers
        </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer Tomahawk ATX ATX'}
          laptopComponent={'Mid-tower ATX Gaming Chassis with Razer Chroma RGB'}
          price={'249.99'}
          imageProducts={[
            {
              src: '/images/components-page-img/case1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Tomahawk Mini-ITX Mini-ITX'}
          laptopComponent={'Mini-ITX Gaming Chassis with Razer Chroma RGB'}
          price={'169.99'}
          salePrice={'229.99'}
          salePercentage={'26'}
          imageProducts={[
            {
              src: '/images/components-page-img/case2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Chroma Addressable RGB Controller'}
          laptopComponent={'Compatible to work with any ARGB device'}
          price={'39.99'}
          imageProducts={[
            {
              src: '/images/components-page-img/controller1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer PWM PC Fan Controller'}
          laptopComponent={'PC Fan Controller'}
          price={'49.99'}
          imageProducts={[
            {
              src: '/images/components-page-img/controller2.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      {/* Cooling */}
      <div className="mt-[20px] ml-[6rem]">
        <h2 className="font-bold text-white text-2xl">COOLING</h2>
        <p className="text-[#777] font-semibold text-xl">
          High-performance PC case fans and AIO liquid coolers with Razer Chroma™ RGB
        </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={
            'Razer Hanbo Chroma RGB AIO Liquid Cooler 360MM (aRGB Pump Cap) RGB AIO Liquid Cooler 360MM (aRGB Pump Cap)'
          }
          laptopComponent={'All-In-One Liquid Coolers'}
          price={'279.99'}
          salePercentage={'22'}
          salePrice={'359.99'}
          imageProducts={[
            {
              src: '/images/components-page-img/cooling1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={
            'Razer Hanbo Chroma RGB AIO Liquid Cooler 240MM (aRGB Pump Cap) RGB AIO Liquid Cooler 240MM (aRGB Pump Cap)'
          }
          laptopComponent={'All-In-One Liquid Coolers'}
          price={'229.99'}
          salePrice={'299.99'}
          salePercentage={'23'}
          imageProducts={[
            {
              src: '/images/components-page-img/cooling2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Kunai Chroma - 140mm - 3 Fans - 140mm - 3 Fans'}
          laptopComponent={'Performance aRGB Fans'}
          price={'99.99'}
          salePrice={'149.99'}
          salePercentage={'33'}
          imageProducts={[
            {
              src: '/images/components-page-img/cooling3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Kunai Chroma - 140mm - 1 Fan - 140mm - 1 Fan'}
          laptopComponent={'Performance aRGB Fans'}
          price={'49.99'}
          imageProducts={[
            {
              src: '/images/components-page-img/cooling4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      {/* Power Supply & cables */}
      <div className="mt-[20px] ml-[6rem]">
        <h2 className="font-bold text-white text-2xl">POWER SUPPLY & CABLES</h2>
        <p className="text-[#777] font-semibold text-xl">
          Platinum PSU with Razer Chroma™ RGB, high-speed cables for PC and Mac
        </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer Katana Chroma - 850W'}
          laptopComponent={'Razer Katana Chroma - 850W'}
          price={'279.99'}
          salePercentage={'20'}
          salePrice={'349.99'}
          imageProducts={[
            {
              src: '/images/components-page-img/power1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Katana Chroma - 850W'}
          laptopComponent={'Razer Katana Chroma - 850W'}
          price={'279.99'}
          salePercentage={'20'}
          salePrice={'349.99'}
          imageProducts={[
            {
              src: '/images/components-page-img/cable1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Thunderbolt 4 Cable - 0.8 m - White'}
          laptopComponent={'Razer Thunderbolt 4 Cable - 0.8 m - White'}
          price={'59.99'}
          imageProducts={[
            {
              src: '/images/components-page-img/cable2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Thunderbolt 4 Cable - 0.8 m - Black'}
          laptopComponent={'Thunderbolt 4 Cable'}
          price={'59.99'}
          imageProducts={[
            {
              src: '/images/components-page-img/cable3.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      {/* Bundle */}
      <div className="mt-[20px] ml-[6rem]">
        <h2 className="font-bold text-white text-2xl">BUNDLES</h2>
        <p className="text-[#777] font-semibold text-xl">
          Deck out your setup with curated gear sets that meet every need.
        </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Cooling Blaze Bundle'}
          laptopComponent={
            'Be blown away by a brilliant combo that lights up the air with cutting-edge thermal performance.'
          }
          colorOption={'· Razer Kunai Chroma RGB 120mm - 3 fans'}
          colorOption2={' Razer Chroma Addressable RGB Controlle'}
          price={'279.99'}
          salePercentage={'20'}
          salePrice={'349.99'}
          imageProducts={[
            {
              src: '/images/components-page-img/bundle1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Supercharged Cooling Blaze Bundle'}
          laptopComponent={
            'Be blown away by a brilliant combo that lights up the air with cutting-edge thermal performance'
          }
          colorOption={'· Razer Kunai Chroma RGB 140mm - 3 fans'}
          colorOption2={' Razer Chroma Addressable RGB Controlle'}
          price={'279.99'}
          salePercentage={'20'}
          salePrice={'349.99'}
          imageProducts={[
            {
              src: '/images/components-page-img/bundle2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={' Razer Kunai Chroma RGB 140mm - 3 fans'}
          laptopComponent={' Razer Kunai Chroma RGB 140mm - 3 fans'}
          colorOption={'· Razer Kunai Chroma RGB 120mm - 3 fans'}
          colorOption2={' Razer PWM Gaming PC Fan Controller'}
          price={'279.99'}
          salePercentage={'20'}
          salePrice={'349.99'}
          imageProducts={[
            {
              src: '/images/components-page-img/bundle3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Thermal Domination Turbo Bundle'}
          laptopComponent={'Defeat the heat with a cutting-edge combo that offers complete system control. '}
          colorOption={'· Razer Kunai Chroma RGB 120mm - 3 fans'}
          colorOption2={' Razer PWM Gaming PC Fan Controller'}
          price={'279.99'}
          salePercentage={'20'}
          salePrice={'349.99'}
          imageProducts={[
            {
              src: '/images/components-page-img/bundle4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Component