import React from 'react'
import SubnavBar from './SubnavBar';
import CategoryCard from './CategoryCard';
import { Col, Row } from 'antd';
const PC = () => {
  return (
    <div>
      {/* Sub Navbar */}
      <SubnavBar />

      <div className="bg-[#111] flex justify-center pt-[3rem] pb-[2.5rem]">
        <div className="w-[75%] items-center flex flex-col justify-center text-center">
          <h1 className="text-[#44d62c] font-thin">LAPTOPS & DESKTOPS</h1>
          <p className="text-lg text-[#777]">
            From cutting-edge gaming and creator laptops to high-end components for your dream PC build, Razer systems
            are meticulously crafted to provide the ultimate performance for work and play. Supported by our diverse
            collection of gamer accessories and PC peripherals, we’ve got you covered when it comes to your unique
            gaming or office desktop needs.
          </p>
        </div>
      </div>

      <div className="pt-[1.5rem] pb-[1.5rem] flex justify-evenly ">
        <CategoryCard
          cardSrc={'/images/PC-page-img/cataimg1.jpg'}
          cateTitle={'LAPTOP'}
          cateDescription={'Sleek high-performance gaming laptops'}
        />

        <CategoryCard
          cardSrc={'/images/PC-page-img/cataimg2.jpg'}
          cateTitle={'DESKTOPS & COMPONENTS'}
          cateDescription={'Engineered for enthusiasts and designed for performance'}
        />

        <CategoryCard
          cardSrc={'/images/PC-page-img/cataimg3.jpg'}
          cateTitle={'ACCESSORIES'}
          cateDescription={'Crafting the perfect gaming experience'}
        />

        <CategoryCard
          cardSrc={'/images/PC-page-img/cataimg4.jpg'}
          cateTitle={'RAZER SKINS'}
          cateDescription={'Custom designs for laptops, mobile controllers, and handheldss'}
        />
      </div>

      <div className="bg-[#111] flex justify-center pt-[3rem] pb-[2.5rem]">
        <div className="w-[75%] items-center flex flex-col justify-center text-center">
          <h1 className="text-[#44d62c] font-thin">PC & LAPTOP PERIPHERALS</h1>
          <p className="text-lg text-[#777]">
            The most powerful rigs mean nothing without the best gear to match. Gain a competitive edge with PC and
            laptop peripherals armed with our latest technology. From award-winning mice and keyboards to
            industry-leading headsets and monitors, deck out your setup with our comprehensive selection of peripherals
            for gaming and work.
          </p>
        </div>
      </div>

      <div className="pt-[1.5rem] pb-[1.5rem] grid-cols-3 inline-grid gap-4 pl-[30%]">
        <CategoryCard
          cardSrc={'/images/PC-page-img/cataimg5.jpg'}
          cateTitle={'MICE'}
          cateDescription={'Pixel-perfect precision for any hand size and grip style'}
        />

        <CategoryCard
          cardSrc={'/images/PC-page-img/cataimg6.jpg'}
          cateTitle={'MOUSE MATS'}
          cateDescription={'Soft, hard, and hybrid designs to enhance your control'}
        />

        <CategoryCard
          cardSrc={'/images/PC-page-img/cataimg7.jpg'}
          cateTitle={'KEYBOARDS'}
          cateDescription={'Optical, mechanical, and every type in between'}
        />

        <CategoryCard
          cardSrc={'/images/PC-page-img/cataimg8.jpg'}
          cateTitle={'HEADSETS'}
          cateDescription={'Tuned for gaming, lifestyle, or a perfect mix of both'}
        />

        <CategoryCard
          cardSrc={'/images/PC-page-img/cataimg9.jpg'}
          cateTitle={'SPEAKERS'}
          cateDescription={'Set the soundstage for full-range immersion'}
        />

        <CategoryCard
          cardSrc={'/images/PC-page-img/cataimg10.jpg'}
          cateTitle={'CHAIRS'}
          cateDescription={'Perfecting the science of comfort and support'}
        />
      </div>

      <div className="relative">
        <img src="/images/PC-page-img/bannerimg1.jpg" />
        <div className="absolute top-[1rem] z-10 flex justify-center flex-col items-center left-[38%]">
          <h1 className="text-white">COMPLETE YOUR SETUP</h1>
          <p className="text-[#777] text-lg">A Color For Every Style</p>
          <a className="no-underline text-[#44d62c] hover:underline moreInfo" href="#">
            Learn More
          </a>
        </div>
      </div>

      <div className="bg-[#111] flex justify-center pt-[3rem] pb-[2.5rem]">
        <div className="w-[75%] items-center flex flex-col justify-center text-center">
          <h1 className="text-[#44d62c] font-thin">CONTENT CREATION & STREAMING</h1>
          <p className="text-lg text-[#777]">
            Producing quality content requires quality hardware. From high-fidelity webcams to professional-grade
            microphones, deliver the best possible streaming experience with our range of content creation gear. Whether
            you're streaming from your gaming desktop or laptop, we’ve got everything you need to create content that
            stands out from the rest.
          </p>
        </div>
      </div>

      <div className="pt-[1.5rem] pb-[1.5rem] grid-cols-3 inline-grid gap-4 pl-[30%]">
        <CategoryCard
          cardSrc={'/images/PC-page-img/cataimg11.jpg'}
          cateTitle={'MICE'}
          cateDescription={'Pixel-perfect precision for any hand size and grip style'}
        />

        <CategoryCard
          cardSrc={'/images/PC-page-img/cataimg12.jpg'}
          cateTitle={'MOUSE MATS'}
          cateDescription={'Soft, hard, and hybrid designs to enhance your control'}
        />

        <CategoryCard
          cardSrc={'/images/PC-page-img/cataimg13.jpg'}
          cateTitle={'KEYBOARDS'}
          cateDescription={'Optical, mechanical, and every type in between'}
        />
      </div>

      <div className="bg-[#111] flex justify-center pt-[3rem] pb-[2.5rem]">
        <div className="w-[75%] items-center flex flex-col justify-center text-center">
          <h1 className="text-[#44d62c] font-thin">SOFTWARE</h1>
          <p className="text-lg text-[#777] w-[73%]">
            From customizing keybinds and Chroma effects to optimizing audio and game performance, Razer's software
            platforms are designed to enhance your gaming and productivity. Seamlessly integrated with our extensive
            collection of gamer accessories and PC peripherals, get the most out of our devices and create a single
            ecosystem for your gaming or office desktop.
          </p>
        </div>
      </div>

      <div className="w-[75%] pt-[20px] pb-[30px] ml-[16rem]">
        <Row className="" gutter={16}>
          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/PC-page-img/cataimg14.jpg'}
              cateTitle={'RAZER AXON'}
              cateDescription={
                'Bring your desktop to life with high-quality wallpapers that sync with your Razer Chroma™ RGB ecosystem.'
              }
            />
          </Col>

          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/PC-page-img/cataimg15.jpg'}
              cateTitle={'RAZER AXON'}
              cateDescription={
                'Bring your desktop to life with high-quality wallpapers that sync with your Razer Chroma™ RGB ecosystem.'
              }
            />
          </Col>

          <Col className="gutter-row" span={8}>
            <CategoryCard
              cardSrc={'/images/PC-page-img/cataimg16.jpg'}
              cateTitle={'RAZER AXON'}
              cateDescription={
                'Bring your desktop to life with high-quality wallpapers that sync with your Razer Chroma™ RGB ecosystem.'
              }
            />
          </Col>
        </Row>

        <Row className="mt-[20px] " gutter={16}>
          <Col className="gutter-row" span={6}>
            <CategoryCard
              cardSrc={'/images/PC-page-img/cataimg17.jpg'}
              cateTitle={'RAZER AXON'}
              cateDescription={
                'Bring your desktop to life with high-quality wallpapers that sync with your Razer Chroma™ RGB ecosystem.'
              }
            />
          </Col>

          <Col className="gutter-row" span={6}>
            <CategoryCard
              cardSrc={'/images/PC-page-img/cataimg18.jpg'}
              cateTitle={'RAZER AXON'}
              cateDescription={
                'Bring your desktop to life with high-quality wallpapers that sync with your Razer Chroma™ RGB ecosystem.'
              }
            />
          </Col>

          <Col className="gutter-row" span={6}>
            <CategoryCard
              cardSrc={'/images/PC-page-img/cataimg19.jpg'}
              cateTitle={'RAZER AXON'}
              cateDescription={
                'Bring your desktop to life with high-quality wallpapers that sync with your Razer Chroma™ RGB ecosystem.'
              }
            />
          </Col>

          <Col className="gutter-row" span={6}>
            <CategoryCard
              cardSrc={'/images/PC-page-img/cataimg20.jpg'}
              cateTitle={'RAZER AXON'}
              cateDescription={
                'Bring your desktop to life with high-quality wallpapers that sync with your Razer Chroma™ RGB ecosystem.'
              }
            />
          </Col>
        </Row>
      </div>

      <div className="relative banner2 h-[30rem]">
        <div className="absolute top-[10%] w-[30%] left-[15%]">
          <h1 className="text-[#44d62c]">PLAYTIME. ANYTIME</h1>
          <p className="text-[#777] text-lg">Play the latest games with graphics that rival reality</p>
          <p className="text-[#777] text-lg">
            DirectX 12 enables breathtaking, immersive graphics at high frame rates*.
          </p>
          <a className="no-underline text-[#44d62c] hover:underline moreInfo" href="#">
            <img src="images/PC-page-img/subbannerimg.jpg" />
          </a>
          <p className="text-sm pt-3 italic text-[#777]">
            *DirectX 12 Ultimate available with supported games, graphics chips, and requires the latest Windows 11
            update with updated hardware drivers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PC