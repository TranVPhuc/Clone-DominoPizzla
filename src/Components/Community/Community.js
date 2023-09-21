import React from 'react'
import Subnav from './Subnav'
import { Col, Row } from 'antd';
const Community = () => {
  return (
    <div>
      <Subnav />
      <div className="relative title">
        <img src="/images/community-main-img/bannerimg1.jpg" />
        <div className="absolute flex flex-col items-center top-[25%] left-[25%]">
          <h1 className="text-white text-4xl font-normal">WELCOME TO THE</h1>
          <p className="text-[#44d62c] font-bold text-8xl">RAZER COMMUNITY</p>
        </div>
      </div>

      <div className="bg-[#44d62c] flex justify-center pt-[3rem] pb-[2.5rem] ">
        <div className="w-[75%] items-center flex flex-col justify-center text-center">
          <p className="text-lg text-[black] w-[60%]">
            Welcome to the Razer Community – where millions of gamers connect to get our latest news, take part in
            giveaways, and interact with us be it live on stream, or through our posts.
          </p>

          <p className="text-lg text-[black] w-[60%]">
            Have an awesome Razer setup you’d like to show us? Drawn a cool piece of fanart? Drop us a message or tag us
            @Razer on our social pages. You might just get featured and be rewarded with cool Razer swag.
          </p>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/community-main-img/bannerimg2.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] left-[40%]">
          <h1 className="text-white font-light">WIN IT YOUR WAY</h1>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Discover
          </a>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/community-main-img/bannerimg3.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] left-[20%]">
          <h1 className="text-white font-light">DON’T KNOW WHERE TO BEGIN? START YOUR JOURNEY HERE.</h1>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Get Started
          </a>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/community-main-img/bannerimg4.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] left-[20%]">
          <h1 className="text-white font-light">WANT TO KNOW THE NEXT TIME WE GO LIVE ON STREAM?</h1>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            Discover Events
          </a>
        </div>
      </div>

      <div className="relative title">
        <img src="/images/community-main-img/bannerimg5.jpg" />
        <div className="absolute flex flex-col items-center top-[10%] left-[20%]">
          <h1 className="text-white font-light">GAME FOR SOME COMPETITION? LEARN MORE ABOUT TEAM RAZER.</h1>
          <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
            This is Esports
          </a>
        </div>
      </div>

      <div className="mt-[3rem] items-center ml-[25%] mb-[2rem]">
        <Row gutter={10}>
          <Col className="gutter-row mr-[2rem]" span={8}>
            <div className="relative">
              <img src="/images/community-main-img/cataimg1.jpg" />
              <div className="absolute flex flex-col items-center top-[10%] left-[15%]">
                <h1 className="text-white font-light text-3xl">CHAT ON RAZER INSIDER</h1>
                <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </Col>

          <Col className="gutter-row" span={8}>
            <div className="relative mb-4">
              <img src="/images/community-main-img/cataimg2.jpg" />
              <div className="absolute flex flex-col items-center top-[10%] ">
                <h1 className="text-white font-light text-center text-3xl">LEARN ABOUT OUR SUSTAINABILITY EFFORTS</h1>
                <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={10}>
          <Col className="gutter-row mr-[2rem]" span={8}>
            <div className="relative">
              <img src="/images/community-main-img/cataimg3.jpg" />
              <div className="absolute flex flex-col items-center top-[10%]">
                <h1 className="text-white font-light text-3xl text-center">GLOW UP WITH OUR DESKTOP WALLPAPERS</h1>
                <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
                  View All
                </a>
              </div>
            </div>
          </Col>

          <Col className="gutter-row" span={8}>
            <div className="relative">
              <img src="/images/community-main-img/cataimg4.jpg" />
              <div className="absolute flex flex-col items-center top-[10%] ">
                <h1 className="text-white font-light text-3xl text-center">BE A PART OF OUR DEVELOPER COMMUNITY</h1>
                <a className="no-underline text-[#44d62c] hover:underline hover:text-[#44d62c]" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="relative">
        <img src="images/community-main-img/bannerimg6.jpg" />
        <div className="absolute top-[15%] left-[20%] h-full z-10">
          <h1 className="text-white font-light text-3xl mb-[2rem] ">
            {' '}
            JOIN OUR MILLIONS OF GAMERS TODAY BY FOLLOWING US ON:
          </h1>
          <div className="flex h-fit justify-evenly">
            <a className="w-16" href="#">
              <img src="images/community-main-img/facebook.svg" />
            </a>

            <a className="w-16" href="#">
              <img src="images/community-main-img/instagram.svg" />
            </a>

            <a className="w-16" href="#">
              <img src="images/community-main-img/twitter.svg" />
            </a>

            <a className="w-16" href="#">
              <img src="images/community-main-img/youtube.svg" />
            </a>

            <a className="w-16" href="#">
              <img src="images/community-main-img/tiktok.svg" />
            </a>

            <a className="w-16" href="#">
              <img src="images/community-main-img/twitch.svg" />
            </a>

            <a className="w-16" href="#">
              <img src="images/community-main-img/discord-icon.svg" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src="images/community-main-img/bannerimg7.jpg" />
        <div className="absolute top-[15%] left-[20%] h-full z-10">
          <h1 className="text-white font-light text-3xl mb-[2rem] ">
            {' '}
            JOIN OUR MILLIONS OF GAMERS TODAY BY FOLLOWING US ON:
          </h1>
          <div className="flex h-fit justify-evenly">
            <a className="w-16" href="#">
              <img src="images/community-main-img/facebook.svg" />
            </a>

            <a className="w-16" href="#">
              <img src="images/community-main-img/instagram.svg" />
            </a>

            <a className="w-16" href="#">
              <img src="images/community-main-img/twitter.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community