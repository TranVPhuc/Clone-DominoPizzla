import React from 'react'
import LaptopCard from '../Laptop/LaptopCard';
import Carousel from 'react-bootstrap/Carousel';

const Chairs = () => {
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
        <LaptopCard
          nameLaptop={'Razer Enki Pro - Automobili Lamborghini Edition'}
          laptopComponent={'Premium Gaming Chair with Alcantara® Leather for All-Day Comfort'}
          price={'1,299.00'}
          exclusive={'EXCLUSIVE'}
          imageProducts={[
            {
              src: '/images/chair-page-img/collab1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Enki Pro - Koenigsegg Edition'}
          laptopComponent={'Premium Gaming Chair with Alcantara® Leather for All-Day Comfort'}
          price={'329.99'}
          exclusive={'EXCLUSIVE'}
          imageProducts={[
            {
              src: '/images/chair-page-img/collab2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Enki Pro - Williams Esports Edition'}
          laptopComponent={'Premium Gaming Chair with Alcantara® Leather for All-Day Comfort'}
          price={'999.00'}
          salePrice={'1,299.00'}
          salePercentage={'23'}
          imageProducts={[
            {
              src: '/images/chair-page-img/collab3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer x *A Bathing Ape® Iskur X'}
          laptopComponent={'Ergonomic Gaming Chair'}
          price={'329.99'}
          exclusive={'EXCLUSIVE'}
          imageProducts={[
            {
              src: '/images/chair-page-img/collab4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      <div className="ml-[6rem]">
        <h2 className="font-bold text-white text-2xl">THE RAZER ENKI RANGE </h2>
        <p className="text-[#777] font-semibold text-xl">Gaming chairs optimized for all-day gaming comfort </p>
      </div>
      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Razer Enki Pro'}
          laptopComponent={'Premium Gaming Chair with Alcantara® Leather for All-Day Comfort'}
          price={'1,299.00'}
          imageProducts={[
            {
              src: '/images/chair-page-img/razerenki1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Enki - Green'}
          laptopComponent={'Gaming Chair for All-Day Comfort'}
          price={'329.99'}
          imageProducts={[
            {
              src: '/images/chair-page-img/razerenki2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Enki - Black'}
          laptopComponent={'Gaming Chair for All-Day Comfort'}
          price={'999.00'}
          imageProducts={[
            {
              src: '/images/chair-page-img/razerenki3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Enki - Quartz'}
          laptopComponent={'Gaming Chair for All-Day Comfort'}
          price={'329.99'}
          imageProducts={[
            {
              src: '/images/chair-page-img/razerenki4.png',
              alt: 'product 1',
            },
          ]}
        />
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
        <LaptopCard
          nameLaptop={'Razer Iskur - Black - XL'}
          laptopComponent={'Gaming Chair with Built-in Lumbar Support'}
          price={'1,299.00'}
          imageProducts={[
            {
              src: '/images/chair-page-img/razeriskur1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Iskur - Black / Green - XL'}
          laptopComponent={'Gaming Chair with Built-in Lumbar Support'}
          price={'329.99'}
          imageProducts={[
            {
              src: '/images/chair-page-img/razeriskur2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Iskur - Dark Gray Fabric - XL'}
          laptopComponent={'Gaming Chair with Built-in Lumbar Support'}
          price={'999.00'}
          imageProducts={[
            {
              src: '/images/chair-page-img/razeriskur3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Iskur - Black'}
          laptopComponent={'Gaming Chair with Built-in Lumbar Support'}
          price={'329.99'}
          imageProducts={[
            {
              src: '/images/chair-page-img/razeriskur4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>

      <div className="ml-[6rem] mt-[2rem]">
        <h2 className="font-bold text-white text-2xl">ACCESSORIES </h2>
        <p className="text-[#777] font-semibold text-xl">Head and lumbar cushions, rugs and mats, chair studs </p>
      </div>
      <div className="flex flex-row justify-start ml-[6rem]">
        <LaptopCard
          nameLaptop={'Team Razer Floor Mat'}
          laptopComponent={'Room and gaming chair accessory for esports'}
          price={'1,299.00'}
          imageProducts={[
            {
              src: '/images/chair-page-img/acc1.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Team Razer Floor Rug - Quartz'}
          laptopComponent={'Room and Gaming Chair Accessory for Esports'}
          price={'329.99'}
          exclusive={'EXCLUSIVE'}
          imageProducts={[
            {
              src: '/images/chair-page-img/acc2.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Sneki Snek Floor Rug'}
          laptopComponent={'Room and Gaming Chair Accessory'}
          price={'999.00'}
          exclusive={'EXCLUSIVE'}
          imageProducts={[
            {
              src: '/images/chair-page-img/acc3.png',
              alt: 'product 1',
            },
          ]}
        />

        <LaptopCard
          nameLaptop={'Razer Head Cushion - Quartz'}
          laptopComponent={'Neck & Head support for Gaming Chairs'}
          price={'329.99'}
          imageProducts={[
            {
              src: '/images/chair-page-img/acc4.png',
              alt: 'product 1',
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Chairs