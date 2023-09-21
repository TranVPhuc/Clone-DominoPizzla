import React from 'react'

const Subnav = () => {
  return (
    <div>
      <ul className="flex flex-row justify-center items-baseline pb-[10px] pt-[15px]">
        <li className=" flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/mobile-main-img/handhelds.svg" />
            <span>Handhelds</span>
          </a>
          <span className="block text-[#F5B21D]">New</span>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center " href="#">
            <img src="images/mobile-main-img/controller.svg" />
            <span>Controllers</span>
          </a>
          <span className="block text-[#F5B21D]">New</span>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/mobile-main-img/nexus.svg" />
            <span>Nexus</span>
          </a>
          <span className="block text-[#F5B21D]">New</span>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/mobile-main-img/headphones.svg" />
            <span>Headphones</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/mobile-main-img/earbuds.svg" />
            <span>Earbuds</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/mobile-main-img/dac.svg" />
            <span>DAC</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/mobile-main-img/glasses.svg" />
            <span>Smart Glasses</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/mobile-main-img/cases.svg" />
            <span>Cases</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/mobile-main-img/accessories.svg" />
            <span>Accessories</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/mobile-main-img/customs.svg" />
            <span>Customs</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/mobile-main-img/skins.svg" />
            <span>Razer Skins</span>
          </a>
          <span className="block text-[#F5B21D]">New</span>
        </li>
      </ul>
    </div>
  );
}

export default Subnav