import React from 'react';
import LaptopCard from '../Laptop/LaptopCard';
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Swiper.css';

const Apparel = () => {
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
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Xanthus Crossbody Bag']}
              laptopComponent={
                'Designed for the on-the-go gamer, be ready to play anywhere with striking utility wear crafted for everyday comfort and versatility'
              }
              price={'1,299.00'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/bag1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Xanthus Tote Bag']}
              laptopComponent={
                'Designed for the on-the-go gamer, be ready to play anywhere with striking utility wear crafted for everyday comfort and versatility'
              }
              price={'329.99'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/bag2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Nomad Duffel Bag']}
              laptopComponent={'Versatile All-weather Duffel Bag with Greater Capacity'}
              price={'999.00'}
              salePrice={'1,299.00'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/bag3.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Versatile All-weather Duffel Bag with Greater Capacity']}
              laptopComponent={'Lightweight all-weather toploader backpack'}
              price={'329.99'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/bag4.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer | EVISU Daicock Print T-Shirt']}
              price={'1,299.00'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/top1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Athleisure - Instinct Sports Bra']}
              laptopComponent={'Versatile athleisure apparel for fitness and everyday fashion'}
              price={'329.99'}
              exclusive={'EXCLUSIVE'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/top2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Athleisure - Instinct Tee']}
              laptopComponent={'Versatile athleisure apparel for fitness and everyday fashion'}
              price={'999.00'}
              salePrice={'1,299.00'}
              exclusive={'EXCLUSIVE'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/top3.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Athleisure - Instinct Tank Top']}
              laptopComponent={'Versatile athleisure apparel for fitness and everyday fashion'}
              price={'329.99'}
              exclusive={'EXCLUSIVE'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/top4.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer | EVISU Daicock Print with Embroidery Carrot-Fit Jeans #2017']}
              price={'1,299.00'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/bottom1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Athleisure - Instinct High Rise Leggings']}
              laptopComponent={'Versatile athleisure apparel for fitness and everyday fashion'}
              price={'329.99'}
              exclusive={'EXCLUSIVE'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/bottom2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Athleisure - Instinct Shorts']}
              laptopComponent={'Versatile athleisure apparel for fitness and everyday fashion'}
              price={'999.00'}
              exclusive={'EXCLUSIVE'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/bottom3.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Genesis Shorts']}
              laptopComponent={'Everyday apparel that blends minimalist style with standout comfort.'}
              price={'48.99'}
              salePrice={'69.99'}
              salePercentage={'30'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/bottom4.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer | EVISU Godhead Hoodie']}
              price={'1,299.00'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/outerwear1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Genesis Bomber Jacket']}
              laptopComponent={'Everyday apparel that blends minimalist style with standout comfort.'}
              price={'69.99'}
              salePrice={'99.99'}
              salePercentage={'30'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/outerwear2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Unleashed Zip Hoodie']}
              laptopComponent={'Everyday apparel bold in style and big on comfort.'}
              price={'69.99'}
              salePrice={'99.99'}
              salePercentage={'30'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/outerwear3.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Sneki Snek Hoodie']}
              laptopComponent={'Plush Hooded Outerwear'}
              price={'48.99'}
              exclusive={'EXCLUSIVE'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/outerwear4.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Sneki Snek Wall Light']}
              laptopComponent={'Wall-mounted LED Neon Gaming Light with RGB Lighting'}
              price={'1,299.00'}
              exclusive={'EXCLUSIVE'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/snekisnek1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Sneki Snek Fleece Blanket']}
              laptopComponent={'Plush Sleep Accessory'}
              price={'69.99'}
              exclusive={'EXCLUSIVE'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/snekisnek2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Sneki Snek Slippers']}
              laptopComponent={'Plush Indoor Footwear'}
              price={'69.99'}
              exclusive={'EXCLUSIVE'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/snekisnek3.jpg',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Sneki Snek Plushie']}
              laptopComponent={'Optimized for cuddles and Razer fans of all ages'}
              price={'48.99'}
              exclusive={'EXCLUSIVE'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/snekisnek4.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
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
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Sneki Snek Wall Light']}
              laptopComponent={'Wall-mounted LED Neon Gaming Light with RGB Lighting'}
              price={'1,299.00'}
              exclusive={'EXCLUSIVE'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/other1.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Sneki Snek Fleece Blanket']}
              laptopComponent={'Plush Sleep Accessory'}
              price={'29.99'}
              salePrice={'39.99'}
              salePercentage={'30'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/other2.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Sneki Snek Slippers']}
              laptopComponent={'Plush Indoor Footwear'}
              price={'69.99'}
              exclusive={'EXCLUSIVE'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/other3.png',
                  alt: 'product 1',
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LaptopCard
              nameLaptop={['Razer Sneki Snek Plushie']}
              laptopComponent={'Optimized for cuddles and Razer fans of all ages'}
              price={'48.99'}
              imageProducts={[
                {
                  src: '/images/apparel-page-img/other4.jpg',
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

export default Apparel;
