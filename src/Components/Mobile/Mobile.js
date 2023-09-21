import React from 'react'
import Subnav from './Subnav';
import { Col, Row } from 'antd';
import CategoryCard from '../PC/CategoryCard';
const Mobile = () => {
  return (
    <div>
      <Subnav />
      <div className="bg-[#111] flex justify-center pt-[3rem] pb-[2.5rem] ">
        <div className="w-[75%] items-center flex flex-col justify-center text-center">
          <h1 className="text-[#44d62c] font-thin">ENGINEERED FOR THE GAME, DESIGNED FOR LIFE</h1>
          <p className="text-lg text-[#777]">
            This is freedom of play, redefined. Our mobile gaming and lifestyle audio products are crafted to seamlessly
            integrate gaming into every aspect of your life.
          </p>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/mobile-main-img/bannerimg1.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] left-[40%]">
          <h1 className="text-white font-light">RAZER EDGE</h1>
          <p className="text-[#777] text-lg">The Ultimate Android Gaming Handheld</p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Learn More
          </a>
        </div>
      </div>

      <div className="w-[75%] pt-[20px] pb-[30px] ml-[15rem]">
        <Row className="" gutter={16}>
          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/mobile-main-img/cataimg1.webp'}
              cateTitle={'RAZER KISHI V2 PRO'}
              cateDescription={'Android Gaming Controller'}
            />
          </Col>

          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/mobile-main-img/cataimg2.webp'}
              cateTitle={'RAZER KISHI V2 XBOX EDITIONS'}
              cateDescription={'Mobile Gaming Controller for Xbox'}
            />
          </Col>

          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/mobile-main-img/cataimg3.webp'}
              cateTitle={'RAZER KISHI V2'}
              cateDescription={'Console-quality iPhone and Android gaming controller for cloud gaming and remote play'}
            />
          </Col>
        </Row>
      </div>

      <div className="relative title">
        <img src="/images/mobile-main-img/bannerimg2.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] left-[15%]">
          <h1 className="text-white font-light">STAY IN-SYNC WITH YOUR WORLD</h1>
          <p className="text-[#777] text-lg w-1/2 text-center">
            Whether you’re working from home or immersed in entertainment, our industry-leading Bluetooth low-latency
            audio deliver smooth, stutter-free sound and seamless connectivity.
          </p>
          <div className="flex justify-between w-1/3">
            <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
              View Over-Ear Headphones
            </a>
            <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
              View True Wireless Earbuds
            </a>
          </div>
        </div>
      </div>

      <div className="w-[75%] pt-[20px] pb-[30px] ml-[15rem]">
        <Row className="mb-[3rem]" gutter={16}>
          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/mobile-main-img/cataimg4.jpg'}
              cateTitle={'RAZER KISHI V2 PRO'}
              cateDescription={'Android Gaming Controller'}
            />
          </Col>

          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/mobile-main-img/cataimg5.jpg'}
              cateTitle={'RAZER KISHI V2 XBOX EDITIONS'}
              cateDescription={'Mobile Gaming Controller for Xbox'}
            />
          </Col>

          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/mobile-main-img/cataimg6.jpg'}
              cateTitle={'RAZER KISHI V2'}
              cateDescription={'Console-quality iPhone and Android gaming controller for cloud gaming and remote play'}
            />
          </Col>
        </Row>

        <Row className="" gutter={16}>
          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/mobile-main-img/cataimg7.jpg'}
              cateTitle={'RAZER KISHI V2 PRO'}
              cateDescription={'Android Gaming Controller'}
            />
          </Col>

          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/mobile-main-img/cataimg8.jpg'}
              cateTitle={'RAZER KISHI V2 XBOX EDITIONS'}
              cateDescription={'Mobile Gaming Controller for Xbox'}
            />
          </Col>

          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/mobile-main-img/cataimg9.jpg'}
              cateTitle={'RAZER KISHI V2'}
              cateDescription={'Console-quality iPhone and Android gaming controller for cloud gaming and remote play'}
            />
          </Col>
        </Row>
      </div>

      <div className="relative title">
        <img src="/images/mobile-main-img/bannerimg3.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] left-[4%]">
          <h1 className="text-white font-light">GO THE EXTRA MILE</h1>
          <p className="text-[#777] text-lg text-center w-[70%]">
            When you’re filling those few minutes in line at the coffee shop or commuting to work with a quick game or
            listening to that banger on repeat, Razer has the accessory that lets fellow gamers know they’re among their
            own.
          </p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Learn More
          </a>
        </div>
      </div>

      <div className="w-[75%] pt-[20px] pb-[30px] ml-[15rem]">
        <Row className="" gutter={16}>
          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/mobile-main-img/cataimg10.jpg'}
              cateTitle={'RAZER ARCTECH CASES'}
              cateDescription={
                'Protect your investment while experiencing better device performance and improved phone cooling with a Thermaphene Performance layer for maximum heat dissipation.'
              }
            />
          </Col>

          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/mobile-main-img/cataimg11.jpg'}
              cateTitle={'RAZER CHARGING PAD CHROMA'}
              cateDescription={
                'Keep your devices powered up and setup blazing bright with 10W wireless fast charging and Razer Chroma™ RGB'
              }
            />
          </Col>

          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/mobile-main-img/cataimg12.png'}
              cateTitle={'RAZER PHONE COOLER CHROMA'}
              cateDescription={'Smartphone Cooling Fan with Razer Chroma™ RGB'}
            />
          </Col>
        </Row>
      </div>

      <div className="bg-[#111] flex justify-center pt-[3rem] pb-[2.5rem] ">
        <div className="w-[75%] items-center flex flex-col justify-center text-center">
          <h1 className="text-[#44d62c] font-thin">
            RAZER MOBILE GAMING ACCESSORIES: REDEFINING THE GAMING EXPERIENCE
          </h1>
          <p className="text-lg text-[#777] w-[75%]">
            Razer is a name synonymous with high-quality gaming peripherals and accessories, and our mobile gaming
            accessories are no exception. These accessories are specifically designed to enhance the gaming experience
            on your mobile device, making it more immersive, comfortable, and enjoyable.
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center pt-[2rem]">
          <p className="text-white text-3xl">A MOBILE GAMING ACCESSORY FOR EVERY NEED</p>
          <p className="text-center text-lg text-[#777] w-[55%]">
            Choose from an extensive collection of mobile gaming accessories that cater to your needs, from handhelds,
            controllers, headphones, to phone cases that provide high-performance, quality, and portability. With our
            mobile gaming accessories, you can enjoy a more immersive and tactile gaming experience on the go.
          </p>
        </div>
        <div>
          <div className="ml-[3rem]">
            <Row className="mt-[4rem]" gutter={16}>
              <Col className="gutter-row flex flex-col items-center" span={6}>
                <img className="w-1/3 h-1/2 mb-[1rem]" src="/images/mobile-main-img/icon1.svg" />
                <p className="text-center text-[#777] text-xl font-light">
                  If you’re looking to improve your play when it comes to your favorite mobile games, then our
                  <a className="text-[#44d62c] ml-[5px] mr-[5px]" href="#">
                    mobile controllers
                  </a>
                  are designed to offer a greater level of precision and control that rivals console controllers.
                </p>
              </Col>

              <Col className="gutter-row flex flex-col items-center" span={6}>
                <img className="w-1/3 h-1/2 mb-[1rem]" src="/images/mobile-main-img/icon2.svg" />
                <p className="text-center text-[#777] text-xl font-light">
                  Interested in taking your cloud or mobile gaming to the next level? We’ve got you covered with
                  powerful
                  <a className="text-[#44d62c] ml-[5px] mr-[5px]" href="#">
                    handhelds
                  </a>
                  optimized for that very purpose.
                </p>
              </Col>

              <Col className="gutter-row flex flex-col items-center" span={6}>
                <img className="w-1/3 h-1/2 mb-[1rem]" src="/images/mobile-main-img/icon3.svg" />
                <p className="text-center text-[#777] text-xl font-light">
                  For those seeking a greater audio experience while on the go, our combination of
                  <a className="text-[#44d62c] ml-[5px] mr-[5px]" href="#">
                    wireless headphones and earbuds
                  </a>
                  will ensure seamless, immersive gaming free from distractions or cables.
                </p>
              </Col>

              <Col className="gutter-row flex flex-col items-center" span={6}>
                <img className="w-1/3 h-1/2 mb-[1rem]" src="/images/mobile-main-img/icon4.svg" />
                <p className="text-center text-[#777] text-xl font-light">
                  Lastly, when it comes to protecting your phone, our tough, durable
                  <a className="text-[#44d62c] ml-[5px] mr-[5px]" href="#">
                    phone cases
                  </a>
                  will allow you to game with complete peace of mind and express your own personal style at the same
                  time.
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="flex flex-col items-center pt-[8rem]">
          <p className="text-white text-3xl">WHAT MAKES RAZER MOBILE GAMING ACCESSORIES SUPERIOR</p>
          <p className="text-center text-lg text-[#777] w-[55%]">
            Our gaming phone accessories are among the most popular products we offer. We provide the best possible
            mobile gaming experience with improved graphics, high-quality audio, and ergonomic designs. Our phone
            accessories are compatible with popular mobile phone models, including iPhone and Android devices, ensuring
            gamers can enjoy their favorite games with ease.
          </p>
        </div>
        <div className="flex flex-col items-center pt-[8rem] pb-[5rem]">
          <p className="text-white text-3xl">BRINGING OUR UNFAIR ADVANTAGE TO MOBILE GAMING</p>
          <p className="text-center text-lg text-[#777] w-[55%]">
            Overall, Razer's mobile gaming accessories are a must-have for any mobile gamer. Our mobile gaming
            accessories are designed to meet the needs of gamers worldwide. With our cutting-edge designs, innovative
            technology, and exceptional craftsmanship, we offer gamers the products they need to take their gaming
            experience to the next level, whether they’re a casual gamer or a professional esports player.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mobile