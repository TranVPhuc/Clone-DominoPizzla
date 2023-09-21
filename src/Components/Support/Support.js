import React from 'react'
import './Support.css'
import { Input } from 'antd';
const Support = () => {
  return (
    <div>
      <div className="relative">
        <img src="/images/support-main-img/bannerimg1.jpg" />
        <div className="absolute top-[20%] z-10 flex justify-center flex-col items-center left-[38%]">
          <h1 className="text-white">COMPLETE YOUR SETUP</h1>
          <p className="text-[#777] text-lg">A Color For Every Style</p>
          <a className="no-underline text-[#44d62c] hover:underline moreInfo" href="#">
            Learn More
          </a>
          <Input size="large" className="opacity-100" placeholder="Search Support (e.g. Blade Pro)" />
        </div>
      </div>

      <div className="bg-[#222222] pt-[2rem] pb-[2rem]">
        <ul className="flex flex-row justify-center items-baseline pb-[10px] pt-[15px]">
          <li className=" flex flex-col justify-center items-center mr-[5rem]">
            <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
              <img src="images/support-main-img/laptops.svg" />
              <span>Gold</span>
            </a>
          </li>
          <li className="flex flex-col justify-center items-center mr-[5rem]">
            <a className="no-underline subnav-item text-white flex flex-col justify-center items-center " href="#">
              <img src="images/support-main-img/console.svg" />
              <span>Silver</span>
            </a>
          </li>
          <li className="flex flex-col justify-center items-center mr-[5rem]">
            <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
              <img src="images/support-main-img/mobile.svg" />
              <span>Gold PINs</span>
            </a>
          </li>
          <li className="flex flex-col justify-center items-center mr-[5rem]">
            <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
              <img src="images/support-main-img/chairs.svg" />
              <span>Gold Webshop</span>
            </a>
          </li>
          <li className="flex flex-col justify-center items-center mr-[5rem]">
            <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
              <img src="images/support-main-img/icon-services.svg" />
              <span>Gift Cards</span>
            </a>
          </li>
          <li className="flex flex-col justify-center items-center mr-[5rem]">
            <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
              <img src="images/support-main-img/replacement-parts.svg" />
              <span>RazerCare</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center ">
        <ul className="list-disc p-4 list mr-[2rem]">
          <h1 className="text-white text-4xl font-light">Popular Support Videos</h1>
          <li>
            <a className="text-white no-underline category" href="#">
              View the latest support videos
            </a>
          </li>
          <li>
            <a className="text-white no-underline category" href="#">
              Install mechanical switches on a keyboard
            </a>
          </li>
          <li>
            <a className="text-white no-underline category" href="#">
              Install mechanical switches on a keyboard
            </a>
          </li>
          <li>
            <a className="text-white no-underline category" href="#">
              Set up and Use the Wireless Control Pod
            </a>
          </li>
          <li>
            <a className="text-white no-underline category" href="#">
              Detect Razer devices in Synapse 3
            </a>
          </li>
        </ul>

        <ul className="list-disc p-4 border-white list">
          <h1 className="text-white text-4xl font-light">Popular Support Topics</h1>
          <li>
            <a className="text-white no-underline category" href="#">
              Popular Support Topics
            </a>
          </li>
          <li>
            <a className="text-white no-underline category" href="#">
              Popular Support Topics
            </a>
          </li>
          <li>
            <a className="text-white no-underline category" href="#">
              Help with 7.1 Surround Sound activation
            </a>
          </li>
          <li>
            <a className="text-white no-underline category" href="#">
              Razer Blade is not charging
            </a>
          </li>
          <li>
            <a className="text-white no-underline category" href="#">
              Razer Blade is not charging
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Support