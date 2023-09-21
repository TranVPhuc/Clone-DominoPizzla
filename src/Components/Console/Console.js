import React from 'react'
import './Console.css'
import MyVideoComponent from './MyVideoComponent';
import CategoryCard from '../PC/CategoryCard';
import { Col, Row } from 'antd';
const Console = () => {
  return (
    <div>
      <ul className="flex flex-row justify-center items-baseline pb-[10px] pt-[15px]">
        <li className=" flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/console-main-img/logoxbox.svg" />
            <span>Xbox</span>
          </a>
          <span className="block text-[#F5B21D]">New</span>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center " href="#">
            <img src="images/console-main-img/logops.svg" />
            <span>PlayStation</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/console-main-img/logometaquest.svg" />
            <span>Meta Quest</span>
          </a>
          <span className="block text-[#F5B21D]">New</span>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/console-main-img/logorazerskin.svg" />
            <span>Razer Skin</span>
          </a>
          <span className="block text-[#F5B21D]">New</span>
        </li>
        <li className="flex flex-col justify-center items-center">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/console-main-img/logoaccessories.svg" />
            <span>Accessories</span>
          </a>
        </li>
      </ul>

      <div className="bg-[#111] flex justify-center pt-[3rem] pb-[2.5rem] ">
        <div className="w-[75%] items-center flex flex-col justify-center text-center">
          <h1 className="text-[#44d62c] font-thin">CONSOLE GAMING</h1>
          <p className="text-lg text-[#777]">
            Whatever gaming console you own, make your setup truly next-gen with our expansive arsenal of
            high-performance hardware. From immersive audio gear and essential accessories to multi-platform PC gaming
            controllers, secure the upgrades you need to achieve your perfect PlayStation 5, Xbox Series X|S, or
            Nintendo Switch loadout.
          </p>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/console-main-img/bannerimg1.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] left-[40%]">
          <h1 className="text-white font-light">RAZER KITSUNE</h1>
          <p className="text-[#777] text-lg">All-Button Optical Arcade Controller for PS5™ and PC</p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Learn More
          </a>
        </div>
      </div>

      <div>
        <MyVideoComponent />
      </div>

      <div className="w-[75%] pt-[20px] pb-[30px] ml-[16rem]">
        <Row className="" gutter={16}>
          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/console-main-img/cataimg1.jpg'}
              cateTitle={'Razer Hammerhead Hyperspeed'}
              cateDescription={'Wireless Multi-Platform Gaming Earbuds'}
            />
          </Col>

          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/console-main-img/cataimg2.jpg'}
              cateTitle={'Razer Wolverine V2 Pro'}
              cateDescription={'Wireless Pro Gaming Controller for PS5™ Consoles and PC'}
            />
          </Col>

          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/console-main-img/cataimg3.jpg'}
              cateTitle={'Razer Kaira Pro HyperSpeed Licensed'}
              cateDescription={'Wireless Multi-Platform Gaming Headset with Haptics'}
            />
          </Col>
        </Row>
      </div>

      <div className="relative title">
        <img src="/images/console-main-img/bannerimg2.jpg" />
        <div className="absolute items-center top-[25%] left-[60%]">
          <h1 className="text-white font-light">SCHOOL THE COMPETITION</h1>
          <p className="text-[#777] text-lg">SCHOOL THE COMPETITION</p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Shop Now
          </a>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/console-main-img/bannerimg3.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] left-[33%]">
          <h1 className="text-white font-light">SONIC THE HEDGEHOG LIMITED EDITION</h1>
          <p className="text-[#777] text-lg">Officially Licensed Xbox Controller and Quick Charging Stand</p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Learn More
          </a>
        </div>
      </div>

      <div className="w-[75%] pt-[20px] pb-[30px] ml-[32rem]">
        <Row className="" gutter={16}>
          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/console-main-img/cataimg4.jpg'}
              cateTitle={'Razer Hammerhead Hyperspeed'}
              cateDescription={'Wireless Multi-Platform Gaming Earbuds'}
            />
          </Col>

          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/console-main-img/cataimg5.jpg'}
              cateTitle={'Razer Wolverine V2 Pro'}
              cateDescription={'Wireless Pro Gaming Controller for PS5™ Consoles and PC'}
            />
          </Col>
        </Row>
      </div>

      <div className="relative title">
        <img src="/images/console-main-img/bannerimg4.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] ">
          <h1 className="text-white font-light">GAME. SET. MATCH.</h1>
          <p className="text-[#777] w-[50%] text-lg text-center">
            Get more colorful companions to match your Xbox Wireless Controller with our headset and quick charging
            stand bundle. Available in several official colorways, pick the pair that truly complements your gaming
            console and game controller.
          </p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Explore your desired color combo
          </a>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/console-main-img/bannerimg5.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] left-[33%]">
          <h1 className="text-white font-light">RAZER WOLVERINE V2 CHROMA</h1>
          <p className="text-[#777] text-lg">Fully Customizable Xbox Series X|S, Xbox One, and PC Controller​</p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Learn More
          </a>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/console-main-img/bannerimg6.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] left-[10%]">
          <h1 className="text-white font-light">CONNECT. COMPETE. CONQUER.</h1>
          <p className="text-[#777] text-lg w-[50%] text-center">
            Conquer the competition on PlayStation or Xbox with our latest game controllers and headsets. Experience the
            unfair advantage with specialized gear optimized for each video game console.
          </p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Learn More
          </a>
        </div>
      </div>

      <div className="bg-[#111] flex justify-center pt-[3rem] pb-[2.5rem] ">
        <div className="w-[75%] items-center flex flex-col justify-center text-center">
          <h1 className="text-[white] font-thin">BOLD. CLEAN. FRESH.</h1>
          <p className="text-lg text-[#777]">
            Play with pure style and performance on your Xbox Series X|S. Enhance the aesthetics of your video game
            console setup with our White Edition headsets and multi-platform PC gaming controllers.
          </p>
        </div>
      </div>

      <div className="w-[75%] pt-[20px] pb-[30px] ml-[16rem]">
        <Row className="mt-[20px] " gutter={16}>
          <Col className="gutter-row" span={6}>
            <CategoryCard
              cardSrc={'/images/console-main-img/cataimg6.png'}
              cateTitle={'RAZER WOLVERINE V2'}
              cateDescription={
                'Wired Gaming Controller for Xbox Series X|S with additional remappable front-facing buttons'
              }
            />
          </Col>

          <Col className="gutter-row" span={6}>
            <CategoryCard
              cardSrc={'/images/console-main-img/cataimg7.png'}
              cateTitle={'RAZER WOLVERINE V2 CHROMA WHITE'}
              cateDescription={'Fully Customizable Xbox Series X|S Controller with RGB Lighting'}
            />
          </Col>

          <Col className="gutter-row" span={6}>
            <CategoryCard
              cardSrc={'/images/console-main-img/cataimg8.png'}
              cateTitle={'RAZER KAIRA FOR XBOX'}
              cateDescription={'Wireless Xbox Series X|S headset with cutting-edge drivers and mic'}
            />
          </Col>

          <Col className="gutter-row" span={6}>
            <CategoryCard
              cardSrc={'/images/console-main-img/cataimg9.png'}
              cateTitle={'RAZER KAIRA PRO FOR XBOX'}
              cateDescription={'Wireless, Bluetooth-capable Xbox Series X|S headset that supports mobile Xbox gaming'}
            />
          </Col>
        </Row>
      </div>

      <div className="relative banner2 h-[30rem]">
        <div className="absolute top-[10%] w-[30%] left-[15%]">
          <h1 className="text-[white]">GAMEPADS ENGINEERED FOR TOTAL CONTROL</h1>
          <p className="text-[white] text-lg">
            See how the Razer Raiju goes from the drawing board and into your hands, thanks to a combination of science,
            design and engineering.
          </p>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Console