import React from 'react'
import LaptopCard from '../Laptop/LaptopCard'
const Console = () => {
  return (
    <div className="bg-black mt-[-16px] pb-[25px]">
      {/* // Console */}
      <div className="ml-[6rem]">
        <h1 className="font-bold text-[#44d62c]">CONSOLE</h1>
        <p className="text-[#777] font-semibold text-xl">
          Gaming audio, controllers, and accessories for Xbox and PlayStation
        </p>
        <h2 className="font-bold text-white text-2xl">ALL-BUTTON ARCADE CONTROLLERS</h2>
        <p className="text-[#777] font-semibold text-xl">
          Perfect your execution with a quad movement button layout and lightning-fast optical switches
        </p>
      </div>
      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer Kitsune'}
          laptopComponent={'All-Button Optical Arcade Controller for PS5™ and PC'}
          price={'299.99'}
          itemNew={'NEW'}
          imageProducts={[
            {
              src: '/images/console-page-img/console1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Kitsune - SF6 Cammy Edition'}
          laptopComponent={'All-Button Optical Arcade Controller for PS5™ and PC'}
          price={'329.99'}
          itemNew={'NEW'}
          imageProducts={[
            {
              src: '/images/console-page-img/console2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Kitsune - SF6 Chun-Li Edition'}
          laptopComponent={'Razer Kitsune - SF6 Chun-Li Edition'}
          price={'329.99'}
          itemNew={'NEW'}
          imageProducts={[
            {
              src: '/images/console-page-img/console3.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      {/* Earbuds */}
      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">EARBUDS </h2>
        <p className="text-[#777] font-semibold text-xl">
          Enjoy seamless wireless audio with the Razer HammerHead HyperSpeed for Console
        </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer Hammerhead Pro HyperSpeed'}
          laptopComponent={
            'True Wireless Gaming Earbuds with Razer™ HyperSpeed Wireless, Razer Chroma™ RGB, and Bluetooth 5.3'
          }
          price={'199.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/earbud1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Hammerhead HyperSpeed - PlayStation Licensed - PlayStation Licensed'}
          laptopComponent={'Wireless Multi-Platform Gaming Earbuds'}
          price={'149.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/earbud2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Hammerhead HyperSpeed - Xbox Licensed - Xbox Licensed'}
          laptopComponent={'Wireless Multi-Platform Gaming EarbudsC'}
          price={'149.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/earbud3.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>
      {/* Controller */}
      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">CONTROLLERS</h2>
        <p className="text-[#777] font-semibold text-xl">
          Unlock enhanced control and customization with the Razer Wolverine V2 range
        </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer Wolverine V2 Pro - Black - Black'}
          laptopComponent={'Wireless Pro Gaming Controller for PS5™ Consoles and PC'}
          price={'199.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/controller1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Wolverine V2 Pro - White - White'}
          laptopComponent={'Wireless Pro Gaming Controller for PS5™ Consoles and PC'}
          price={'149.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/controller2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Wolverine V2 Chroma - Black - Black'}
          laptopComponent={'Xbox Series X|S Controller with Razer Chroma™ RGB'}
          price={'149.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/controller3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Wolverine V2 Chroma - White - White'}
          laptopComponent={'Xbox Series X|S Controller with Razer Chroma™ RGB'}
          price={'149.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/controller4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      {/* Collab */}
      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">CONTROLLERS</h2>
        <p className="text-[#777] font-semibold text-xl">
          Unlock enhanced control and customization with the Razer Wolverine V2 range
        </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer Wireless Controller & Quick Charging Stand for Xbox Razer Limited Edition'}
          laptopComponent={'Officially Licensed Xbox Controller and Quick Charging Stand'}
          price={'199.99'}
          exclusive={'EXCLUSIVE'}
          imageProducts={[
            {
              src: '/images/console-page-img/collab1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Universal Quick Charging Stand for Xbox - Forza Horizon 5 Limited Edition'}
          laptopComponent={'Quick Charging Stand for Xbox Wireless Controllers'}
          price={'149.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/collab2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Universal Quick Charging Stand for Xbox - Xbox 20th Anniversary Limited Edition'}
          laptopComponent={'Quick Charging Stand for Xbox Wireless Controllers'}
          price={'149.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/collab3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Sonic the Hedgehog Razer Wireless Controller & Quick Charging Stand for Xbox'}
          laptopComponent={'Officially Licensed Xbox Controller and Quick Charging Stand'}
          price={'149.99'}
          exclusive={'EXCLUSIVE'}
          imageProducts={[
            {
              src: '/images/console-page-img/collab4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      {/* Quick charge */}
      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">QUICK CHARGING STANDS & BUNDLES </h2>
        <p className="text-[#777] font-semibold text-xl">Accessories and sets to round out your setup </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer Universal Quick Charging Stand for Xbox - Velocity Green'}
          laptopComponent={'Quick Charger for Xbox Controllers'}
          price={'199.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/stand1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Universal Quick Charging Stand for Xbox - Lunar Shift'}
          laptopComponent={'Quick Charger for Xbox Controllers'}
          price={'149.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/stand2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Universal Quick Charging Stand for Xbox - Xbox 20th Anniversary Limited Edition'}
          laptopComponent={'Quick Charger for Xbox Controllers'}
          price={'149.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/stand3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Quick Charging Stand for PS5™ - Pink'}
          laptopComponent={'Quick Charging Stand for PS5™ DualSense™ Wireless Controller'}
          price={'149.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/stand4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      {/* Meta Gear */}
      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">QUICK CHARGING STANDS & BUNDLES </h2>
        <p className="text-[#777] font-semibold text-xl">Accessories and sets to round out your setup </p>
      </div>

      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={
            'Razer Universal Quick Charging Stand for Xbox - Velocity GreenRazer Facial Interface and Adjustable Head Strap System Authorized for Meta Quest 2'
          }
          price={'199.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/metagear1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Adjustable Head Strap System Authorized for Meta Quest 2'}
          laptopComponent={'Ergonomic VR Head Strap System'}
          price={'149.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/metagear2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Facial Interface Authorized for Meta Quest 2'}
          laptopComponent={'Universal Silicone VR Face Cushion with Cooling Vents'}
          price={'149.99'}
          imageProducts={[
            {
              src: '/images/console-page-img/metagear3.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Console